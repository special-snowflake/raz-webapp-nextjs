import styles from "src/common/styles/CardSellerProduct.module.css";
import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import React, { useState, useEffect } from "react";
import DeleteModal from "src/common/components/DeleteProduct";

export default function CardProduct({ name, id, price, stock }) {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    const id = e.target.value;
    return e.target.value, id, console.log(id);
  };
  console.log("delete id " + id);
  return (
    <>
      <DeleteModal onClose={() => setShow(false)} show={show} id={id} />
      <div className={styles.rowContent}>
        <div className={`${styles.card} row`} key={id}>
          <div className={`${styles.productpicture} col-6 col-md-6`}>
            <Image
              src={pic}
              width={170}
              height={170}
              layout="intrinsic"
              alt="pic"
            />
            <p>{name}</p>
          </div>
          <div className="col-4 col-md-3">
            <p>
              <i className="bi bi-check-circle"></i>
              {stock !== null ? stock : " - "}
              Stock
            </p>
            {/* className={styles.productStock} */}
          </div>
          <div className={`${styles.price} col-4 col-md-3`}>
            <p>{price !== null ? price : " - "}</p>
            <button
              type="button"
              className="btn btn-danger"
              key={id}
              value={id}
              onClick={() => {
                setShow(true), handleClick;
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
