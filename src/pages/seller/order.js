import OrderCard from "src/common/components/CardOrder";
import styles from "src/common/styles/CardOrder.module.css";
import MenuBar from "src/common/components/MenuBar";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";

function Order() {
  return (
    <>
     <Header />
      <PageTitle
        title="Selling Product"
        subTitle="See your notifications for the latest updates"
      />
    <MenuBar />
      <div className={styles.productWrapper}>
        <div className={`${styles.row} row`}>
          <div className="col-5 col-md-5">
            <p>Product</p>
          </div>
          <div className="col-2 col-md-2">
            <p>Price</p>
          </div>
          <div className="col-1 col-md-1">
            <p>Quantity</p>
          </div>
          <div className="col-2 col-md-2 d-flex justify-content-center">
            <p>Status Order</p>
          </div>
          <div
            className={`${styles.total} col-2 col-md-2 d-flex justify-content-end`}
          >
            <p>Total</p>
          </div>
        </div>
      </div>
      <OrderCard />
      <Footer />
    </>
  );
}

export default Order;
