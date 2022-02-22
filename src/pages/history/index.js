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
  getUserTransaction,
  updateTransaction,
} from "src/modules/utils/transaction";
import Routing from "src/common/components/Routing";
import LoadingCircle from "src/common/components/LoadingBox";

function History(props) {
  const router = useRouter();
  const [buttonIsHovered, setButtonHovered] = useState(false);
  const [transactionData, setTransactionData] = useState(null);
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

    getUserTransaction(token, query)
      .then((res) => {
        setTransactionData(res.data.data);
        setMeta(res.data.meta);
      })
      .catch((err) => console.log(err));
  }, [reload, router.query]);

  const updateTransactionHandler = (e) => {
    updateTransaction(props.token, router.query.id, {
      status: e.target.value,
    })
      .then((res) => {
        toast.success(`Success update status for item id= ${router.query.id}`);
        setReload(!reload);
      })
      .catch((err) => {
        toast.error(`Error update status for item id= ${router.query.id}`);
      });
  };

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
                    `/history?status=${router.query.status}&page=${i}`
                  );
                }
                if (!router.query.status) {
                  router.push(`/history?page=${i}`);
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
      <Routing type="private" user="customer" />
      <Header />
      <PageTitle title="History" subTitle="See your latest order." />
      <section className={styles["table-wrapper"]}>
        <div
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          className={styles["dropdown"]}
        >
          <button className={styles["sort"]}>
            Filter by{" "}
            {buttonIsHovered ? (
              <i className="bi bi-caret-down-fill"></i>
            ) : (
              <i className="bi bi-caret-down"></i>
            )}
          </button>
          <div className={styles["dropdown-content"]}>
            <Link href="/history" passHref>
              All
            </Link>
            <Link href="/history?status=paid" passHref>
              Paid
            </Link>
            <Link href="/history?status=processed" passHref>
              Processed
            </Link>
            <Link href="/history?status=sent" passHref>
              Sent
            </Link>
            <Link href="/history?status=completed" passHref>
              Completed
            </Link>
          </div>
        </div>
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
            {transactionData && transactionData.length > 0 ? (
              transactionData.map((item) => (
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
                      onChange={updateTransactionHandler}
                      disabled={transactionData.status !== "sent"}
                      className={styles["set-status"]}
                    >
                      <option selected disabled>
                        Set status
                      </option>
                      <option
                        hidden={transactionData.status === "completed"}
                        value="completed"
                      >
                        Completed
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
        {!transactionData ? (
          <div className={styles["loading-wrapper"]}>
            <LoadingCircle />
          </div>
        ) : (
          transactionData.length === 0 && (
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
    roles: state.auth.userData.roles,
  };
};

export default connect(mapStateToProps)(History);
