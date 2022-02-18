import CardProduct from "src/common/components/CardProductSeller.js";
import styles from "src/common/styles/CardSellerProduct.module.css";

function Product() {
  return (
    <>
     <div className={styles.productWrapper}>
        <div className={`${styles.row} row`}>
          <div className="col-6 col-md-6">
            <p>Product</p>
          </div>
          <div className="col-3 col-md-3">
            <p>Stock Status</p>
          </div>
          <div className={`${styles.price} col-3 col-md-3`}>
            <p>Price</p>
          </div>
        </div>
      </div>
      <CardProduct />
    </>
  );
}
export default Product;
