import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
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
import LoadingCircle from "src/common/components/LoadingBox";

function Order(props) {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);
  const [reload, setReload] = useState(false);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    // const status = `${router.query.status}&` || "";
    const status = router.query.status ? `status=${router.query.status}&` : "";
    // const page = `page=${router.query.page}` || "page=1";
    const page = router.query.page ? `page=${router.query.page}` : "page=1";
    const query = status + page;
    const token = props.token;
    console.log(query);

    getAllTransaction(token, query)
      .then((res) => {
        setOrderData(res.data.data);
        setMeta(res.data.meta);
      })
      .catch((err) => console.log(err));
  }, [reload, router.query]);

  const showPagination = () => {
    if (meta.totalData === 0) {
      return (
        <>
          <button
            className={`${styles["pagination-button"]} ${styles["disabled"]}`}
          >
            1
          </button>
        </>
      );
    }
    if (meta.totalPage === 1) {
      return (
        <button
          className={`${styles["pagination-button"]} ${styles["active"]}`}
        >
          1
        </button>
      );
    }
    const currentPage = parseInt(router.query.page);
    const elements = [];
    for (let i = 1; i < meta.totalPage + 1; i++) {
      if (currentPage === i) {
        elements.push(
          <React.Fragment key={`pagination-${i}`}>
            <button
              className={`${styles["pagination-button"]} ${styles["active"]}`}
            >
              {i}
            </button>
          </React.Fragment>
        );
      } else {
        elements.push(
          <React.Fragment key={`pagination-${i}`}>
            <button
              onClick={() => {
                if (router.query.status) {
                  router.push(
                    `/seller/order?status=${router.query.status}&page=${i}`
                  );
                }
                if (!router.query.status) {
                  router.push(`/seller/order?page=${i}`);
                }
              }}
              className={`${styles["pagination-button"]}`}
            >
              {i}
            </button>
          </React.Fragment>
        );
      }
    }
    return elements;
  };

  return (
    <main>
      <Header />
      <PageTitle
        title="My Order"
        subTitle="See your latest order from customer"
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
            {orderData && orderData.length > 0 ? (
              orderData.map((item) => (
                <tr key={item.id}>
                  <Link href={`/transaction/${item.id}`} passHref>
                    <td className={styles["product"]}>
                      <div className={styles["img-wrapper"]}>
                        <Image
                          src={"/couch.jpg"}
                          layout="fill"
                          objectFit="cover"
                          alt="item.name"
                        />
                      </div>
                      <div className={styles["product-name"]}>
                        <p>{item.name}</p>
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
        {!orderData ? (
          <div className={styles["loading-wrapper"]}>
            <LoadingCircle />
          </div>
        ) : (
          orderData.length === 0 && (
            <div className={styles["loading-wrapper"]}>
              No Data to be displayed.
            </div>
          )
        )}
        <div className={styles["pagination"]}>
          {meta !== null && showPagination()}
        </div>
      </section>

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
