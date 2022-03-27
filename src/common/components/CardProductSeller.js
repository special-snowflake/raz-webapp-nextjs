import styles from "src/common/styles/CardSellerProduct.module.css";
import Image from "next/image";
import Link from "next/link";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import React, { useState, useEffect } from "react";
import DeleteModal from "src/common/components/DeleteProduct";

export default function CardProduct({ name, id, price, stock, filter }) {
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
          <Link href={`/product/${id}`} passHref>
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
          </Link>
          <div className="col-4 col-md-3">
            <p>
              <i className="bi bi-check-circle"></i>
              {stock !== null ? stock : " - "}
              Stock
            </p>
            {/* className={styles.productStock} */}
          </div>
          <div className={`${styles.price} col-4 col-md-3`}>
            <p>{price !== null ? `$${price}` : " - "}</p>
            {filter && filter !== "archieve" ? (
              <>
                <div className={`${styles.menuBtn} btn-group`} role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-outline-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul
                    className={`${styles["dropdown-menu-product"]} dropdown-menu`}
                    aria-labelledby="btnGroupDrop1"
                  >
                    <li>
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
                    </li>
                    <li>
                      <Link href={`/seller/edit-product/${id}`} passHref>
                        <button className="btn btn-primary">Edit </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
