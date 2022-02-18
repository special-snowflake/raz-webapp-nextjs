import styles from "src/common/styles/CardSellerProduct.module.css";
import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";

export default function CardProduct() {
  return (
    <>
      <div className={styles.rowContent}>
        <div className={`${styles.card} row`}>
          <div className={`${styles.productpicture} col-6 col-md-6`}>
            <Image
              src={pic}
              width={170}
              height={170}
              layout="intrinsic"
              alt="pic"
            />
            <p>Eugene Accent Table 18.9 inches Espresso</p>
          </div>
          <div className="col-4 col-md-3">
            <p>
              <i className="bi bi-check-circle"></i>19 Stock
            </p>
            {/* className={styles.productStock} */}
          </div>
          <div className={`${styles.price} col-4 col-md-3`}>
            <p>Price</p>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
