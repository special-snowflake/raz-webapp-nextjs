import React, { useState, useEffect } from "react";
import styles from "src/common/styles/CardSellerProduct.module.css";
import { deleteProduct } from "src/modules/utils/sellerProduct";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function DeleteModal(props) {
  const token = useSelector((state) => state.auth.userData.token);
  const router = useRouter();
  if (!props.show) {
    return null;
  }
  console.log(token);
  //   console.log(props.id, id);
  const deleteHandler = () => {
    const id = props.id;
    deleteProduct(id, token)
      .then((response) => {
        router.reload();
        return toast.success("success" + response.data.msg);
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };

  const forceRefresh = () => {
    router.reload();
    // router.reload(window.location.dashboard);
  };
  return (
    <>
      <div
        className={styles.deleteModalWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>modal</h1>
        <div className={styles.modalDelete} key={props.id}>
          <div className="card-body my-4">
            <p className="card-text">
              Are you sure you want to delete this product ?
            </p>
            <button className="btn btn-secondary m-2" onClick={forceRefresh}>
              cancel
            </button>
            <button className="btn btn-dark m-2" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
