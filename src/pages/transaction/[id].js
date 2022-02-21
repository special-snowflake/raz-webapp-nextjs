import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import styles from "src/common/styles/DetailTransaction.module.css";

import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import LoadingCircle from "src/common/components/LoadingBox";

import {
  getDetailTransaction,
  updateTransaction,
} from "src/modules/utils/transaction";
import Link from "next/link";

function DetailTransaction(props) {
  const router = useRouter();
  const [transactionData, setTransactionData] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getDetailTransaction(props.token, router.query.id)
      .then((res) => {
        setTransactionData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router, reload]);

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

  return (
    <main>
      <Header />
      <PageTitle
        title="Detail Transaction"
        subTitle={`Detail transaction page of transaction with id=${router.query.id}`}
      />
      <section className={styles["detail-wrapper"]}>
        <button
          onClick={() => router.back()}
          title="Back"
          className={`btn btn-light bg-black text-white`}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        {transactionData ? (
          <table className={styles["table"]}>
            <tbody>
              <tr>
                <th>Status</th>
                <td>
                  {transactionData.status
                    ? transactionData.status[0].toUpperCase() +
                      transactionData.status.substring(1)
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>Products</th>
                <td>
                  <table className={styles["table-products"]}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionData.products &&
                        transactionData.products.map((product, idx) => {
                          return (
                            <tr key={product.idProduct}>
                              <td>{idx + 1}</td>
                              <td>
                                <Link href={`/product/${product.idProduct}`}>
                                  <a>{product.name}</a>
                                </Link>
                              </td>
                              <td>{`$${parseInt(product.price)}`}</td>
                              <td>{parseInt(product.quantity)}</td>
                              <td>{`$${parseInt(product.total)}`}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th>Sub Total</th>
                <td>
                  {transactionData.shippingMethod === "flat"
                    ? `$${transactionData.totalPrice - 10}`
                    : `$${transactionData.totalPrice}`}
                </td>
              </tr>
              <tr>
                <th>Shipping Method</th>
                <td>
                  {transactionData.shippingMethod === "flat"
                    ? "Flat rate $10"
                    : transactionData.shippingMethod === "free"
                    ? "Free shipping"
                    : transactionData.shippingMethod === "pickup"
                    ? "Local pickup"
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td>{`$${transactionData.totalPrice}`}</td>
              </tr>
              <tr>
                <th>Payment Method</th>
                <td>
                  {transactionData.paymentMethod
                    ? transactionData.paymentMethod[0].toUpperCase() +
                      transactionData.paymentMethod.substring(1)
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>Transaction Date</th>
                <td>{transactionData.createdAt}</td>
              </tr>
              <tr>
                <th>
                  {`${
                    transactionData.status
                      ? transactionData.status[0].toUpperCase() +
                        transactionData.status.substring(1)
                      : ""
                  } at`}
                </th>
                <td>
                  {transactionData.updatedAt
                    ? transactionData.updatedAt
                    : transactionData.createdAt}
                </td>
              </tr>
              <tr>
                <td>
                  {props.roles === "1" ? (
                    <select
                      onChange={updateTransactionHandler}
                      disabled={transactionData.status === "sent"}
                      className={styles["set-status"]}
                    >
                      <option selected disabled>
                        Set status
                      </option>
                      <option
                        hidden={
                          transactionData.status === "processed" ||
                          transactionData.status === "sent"
                        }
                        value="processed"
                      >
                        Processed
                      </option>
                      <option
                        hidden={transactionData.status === "sent"}
                        value="sent"
                      >
                        Sent
                      </option>
                    </select>
                  ) : props.roles === "2" &&
                    props.id == transactionData.idUser ? (
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
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <LoadingCircle />
        )}
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

export default connect(mapStateToProps)(DetailTransaction);
