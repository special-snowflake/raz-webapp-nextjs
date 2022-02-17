import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";
import styles from "src/common/styles/sellerAddProduct.module.css";

function AddProduct() {
  return (
    <>
      <Header />
      <PageTitle
        title="Selling Product"
        subTitle="See your notifications for the latest updates"
      />
      <MenuBar />

      <main className={styles.container}>
        <p className={styles.title}>Inventory</p>
        <input type="text" name="name" className={styles["inputSmal"]} />
        <input type="text" name="description" className={styles["inputBig"]} />
        <p className={styles.title}>Item Details</p>
        <input type="text" name="price" className={styles["inputSmal"]} />
        <input type="text" name="stock" />
        <label>Stock Condition</label>
        <div className={styles["wrapper-radio"]}>
          <div className={styles["radio-item"]}>
            <input type="radio" className={styles["radio"]} />
            <label>Stock Condition</label>
          </div>
          <div className={styles["radio-item"]}>
            <input type="radio" className={styles["radio"]} />
            <label>Stock Condition</label>
          </div>
        </div>
        <p className={styles.title}>Item Details</p>
        <div className={styles["wrapper-image"]}>{""}</div>
        <button className={styles["btn-sell"]}>Sell Product</button>
      </main>

      <Footer />
    </>
  );
}

export default AddProduct;
