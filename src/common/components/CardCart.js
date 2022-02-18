import styles from "src/common/styles/Cart.module.css";
import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import { useState } from "react";

export default function CardCart() {
  const [counter, setCounter] = useState(0);

    const addCounter = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
      };
      const subCounter = () => {
        const newCounter = counter - 1 < 0 ? 0 : counter - 1;
        setCounter(newCounter);
      };
  return (
    <>
      <div className={styles.CartContent}>
        <div className={`${styles.card} row`}>
          <div className={`${styles.productpicture} col-5 col-md-5`}>
            <button type="button" className="btn btn-light mx-3">
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
            <p>Eugene Accent Table 18.9 inches Espresso</p>
          </div>
          <div className={`${styles.price} col-2 col-md-2`}>
            <p>Price</p>
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
            <p>Total</p>
          </div>
        </div>
      </div>
    </>
  );
}
