import { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
// import OrderCard from "src/common/components/CardOrder";
import styles from "src/common/styles/Order.module.css";
import MenuBar from "src/common/components/MenuBar";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import Image from "next/image";

import {
  getAllTransaction,
  updateTransaction,
} from "src/modules/utils/transaction";
import { toast } from "react-toastify";
import Routing from "src/common/components/Routing";

function Order(props) {
  const [orderData, setOrderData] = useState([]);
  const [reload, setReload] = useState(false);

  // useEffect(() => {}, []);

  useEffect(() => {
    const query = "page=1";
    const token = props.token;

    getAllTransaction(token, query)
      .then((res) => {
        setOrderData([...res.data.data]);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  return (
    <main>
      <Routing type='private' user='seller' />
      <Header />
      <PageTitle
        title="Selling Product"
        subTitle="See your notifications for the latest updates"
      />
      <MenuBar />
      <section className={styles["table-wrapper"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>PRODUCTS</th>
              <th>STATUS</th>
              <th>TOTAL PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orderData.length > 0 ? (
              orderData.map((item) => (
                <tr key={item.id}>
                  <Link href="/detail" passHref>
                    <td className={styles["product"]}>
                      <div className={styles["img-wrapper"]}>
                        <Image
                          src={"/couch.jpg"}
                          layout="fill"
                          objectFit="cover"
                          alt="pic"
                        />
                      </div>
                      <div className={styles["product-name"]}>
                        <a>{item.name}</a>
                        {item.count > 1 && (
                          <p className={styles["other-item"]}>
                            +{item.count - 1} other(s) item
                          </p>
                        )}
                      </div>
                    </td>
                  </Link>
                  <td>
                    {item.status[0].toUpperCase() + item.status.substring(1)}
                  </td>
                  <td className={styles["price"]}>{`$${item.totalPrice}`}</td>
                  <td className={styles["action"]}>
                    {/* <button title="Set Status" className={`btn btn-secondary`}>
                      <i className="bi bi-pencil-square"></i>
                    </button> */}
                    <select
                      onChange={(e) => {
                        updateTransaction(props.token, item.id, {
                          status: e.target.value,
                        })
                          .then((res) => {
                            toast.success(
                              `Success update status for item id= ${item.id}`
                            );
                            setReload(!reload);
                          })
                          .catch((err) => {
                            toast.error(
                              `Error update status for item id= ${item.id}`
                            );
                          });
                      }}
                      disabled={item.status === "sent"}
                    >
                      <option selected disabled>
                        Set status
                      </option>
                      <option
                        hidden={
                          item.status === "processed" || item.status === "sent"
                        }
                        value="processed"
                      >
                        Processed
                      </option>
                      <option hidden={item.status === "sent"} value="sent">
                        Sent
                      </option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </section>

      {/* <div className={styles.productWrapper}>
        <div className={`${styles.row} row`}>
          <div className="col-5 col-md-5">
            <p>Product</p>
          </div>
          <div className="col-2 col-md-2">
            <p>Price</p>
          </div>
          <div className="col-1 col-md-1">
            <p>Quantity</p>
          </div>
          <div className="col-2 col-md-2 d-flex justify-content-center">
            <p>Status Order</p>
          </div>
          <div
            className={`${styles.total} col-2 col-md-2 d-flex justify-content-end`}
          >
            <p>Total</p>
          </div>
        </div>
      </div> */}
      {/* <h1>{order.id}</h1> */}

      <Footer />
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(Order);
