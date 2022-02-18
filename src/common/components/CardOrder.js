import styles from "src/common/styles/CardOrder.module.css";
import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";

export default function OrderCard() {
  return (
    <>
      {/* content */}
      <div className={styles.rowContent}>
        <div className={`${styles.card} row`}>
          <div className={`${styles.productpicture} col-5 col-md-5`}>
            <Image
              src={pic}
              width={170}
              height={170}
              className={styles.productpictureGap}
              layout="intrinsic"
              alt="pic"
            />
            <p>Eugene Accent Table 18.9 inches Espresso</p>
          </div>
          <div className={`${styles.price} col-2 col-md-2`}>
            <p>Price</p>
          </div>
          <div className="col-1 col-md-1 d-flex justify-content-center py-3">
            <p>02</p>
          </div>
          <div className="col-2 col-md-2 d-flex justify-content-center">
            <p>
              <i className="bi bi-check-circle"></i>Processed
            </p>
          </div>
          <div className="col-2 col-md-2 d-flex justify-content-end">
            <p>Total</p>
          </div>
        </div>
      </div>
    </>
  );
}
