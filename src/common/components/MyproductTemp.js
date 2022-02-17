import styles from "src/common/styles/SellerProduct.module.css";

export default function MyproductTemp() {
  return (
    <>
      <div>TEMPORARY</div>
      <div className={styles.productWrapper}>
        <div className={`${styles.row} row`}>
          <div className="col-4 col-md-3 mx-auto my-auto">
            <p>Product</p>
          </div>
          <div className="col-4 col-md-3 mx-auto my-auto">
            <p>Stock Status</p>
          </div>
          <div className="col-4 col-md-3 mx-auto my-auto">
            <p>Price</p>
          </div>
        </div>
      </div>
    </>
  );
}
