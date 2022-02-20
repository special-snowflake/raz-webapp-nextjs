import { useState } from "react";

import styles from "src/common/styles/Cart.module.css";

import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import {
  addQuantity,
  subQuantity,
  removeItemCart,
} from "src/store/actions/cart";

export default function CardCart({ data, dispatch }) {
  const [counter, setCounter] = useState(data.quantity);

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    dispatch(addQuantity(data.id));
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
    dispatch(subQuantity(data.id));
  };

  const removeCartItemHandler = () => {
    dispatch(removeItemCart(data.id));
  };

  return (
    <>
      <div className={styles.CartContent}>
        <div className={`${styles.card} row`}>
          <div className={`${styles.productpicture} col-5 col-md-5`}>
            <button
              onClick={removeCartItemHandler}
              type="button"
              className="btn btn-light mx-3"
            >
              <strong>
                <i className="bi bi-x-lg"></i>
              </strong>
            </button>
            <Image
              src={pic}
              width={70}
              height={70}
              className={styles.productpictureGap}
              layout="intrinsic"
              alt="pic"
            />
            <p>{data.name}</p>
          </div>
          <div className={`${styles.price} col-2 col-md-2`}>
            <p>{`$${data.price}`}</p>
          </div>
          <div className="col-2 col-md-2">
            <div className={`${styles.counter} d-flex align-items-center`}>
              <div className="btn btn btn-light" onClick={subCounter}>
                -
              </div>
              <div>{counter}</div>
              <div className="btn btn btn-light" onClick={addCounter}>
                +
              </div>
            </div>
          </div>
          <div className="col-2 col-md-2 d-flex justify-content-end">
            <p>{`$${data.total}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
