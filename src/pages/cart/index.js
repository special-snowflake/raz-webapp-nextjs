import styles from "src/common/styles/Cart.module.css";
import CardCart from "src/common/components/CardCart";
// import EmptyCart from "src/common/components/EmptyCart";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";

export default function Cart() {
  return (
    <>
     <Header />
      <PageTitle
        title="Selling Product"
        subTitle="See your notifications for the latest updates"
      />
      <div className="row">
        <section className="col-10 col-sm-10 col-md-8">
          <div className={styles.cartWrapper}>
            <div className={styles.container}>
              <div className={`${styles.row} row`}>
                <div className="col-5 col-md-5 d-flex justify-content-start">
                  <p>Product</p>
                </div>
                <div className="col-2 col-md-2">
                  <p>Price</p>
                </div>
                <div className="col-2 col-md-2">
                  <p>Quantity</p>
                </div>
                <div
                  className={`${styles.total} col-2 col-md-2 d-flex justify-content-end`}
                >
                  <p>Total</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rowContent}>
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
          </div>

          <div className="d-flex justify-content-around w-100">
            <div className={`${styles.codeInput} d-flex align-items-center`}>
              <input type="text" className="form-control" placeholder="input your code" />
              <button className={`${styles.shippingTitle} btn btn-light`}>Apply Coupon</button>
            </div>
            <div>
              <button className={`${styles.btnClear} btn btn-light`}>
                Clear Cart
              </button>
              <button className={`${styles.shippingTitle} btn btn-light`}>Update Cart</button>
            </div>
          </div>
        </section>

        {/* subtotoal */}
        <section className="col-10 col-sm-10 col-md-3">
          <div className={styles.totalWrapper}>
            <p className={styles.shippingTitle}>Cart Total</p>
            <div className="row">
              <div className={`${styles.shippingTitle} col`}>Subtotal</div>
              <div className={`${styles.shippingTitle} col`}>Price</div>
            </div>
            <div className={`${styles.shipping} row`}>
              <div className={`${styles.shippingTitle} col`}>Shipping</div>
              <div className={`${styles.shippingOptions} col`}>
                <form>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label className="form-check-label">flat rate $10</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label className="form-check-label">free shipping</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label className="form-check-label">local pickup</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className={`${styles.shippingTitle} col`}>Total Price</div>
              <div className={`${styles.shippingTitle} col`}>Price</div>
            </div>
            <button className={`${styles.shippingBtn} btn btn-dark btn-block`}>
              Procced To Check Out
            </button>
          </div>
        </section>
      {/* <EmptyCart /> */}
      {/* Conditinal fetching .. . .  */}
      </div>
    <Footer />
    </>
  );
}
