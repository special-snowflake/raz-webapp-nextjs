import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import styles from "src/common/styles/Cart.module.css";
import CardCart from "src/common/components/CardCart";
import EmptyCart from "src/common/components/EmptyCart";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";

import { updateCart, emptyCart } from "src/store/actions/cart";
import { useRouter } from "next/router";
import Routing from "src/common/components/Routing";

function Cart(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(props.cart.subTotal);

  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  const toCheckout = (e) => {
    e.preventDefault();
    const shippingMethod = e.target.flexRadioDefault.value;
    if (!props.auth.userData.token) {
      toast.error("You need to login first before checkout.");
      router.push("/auth");
    } else {
      dispatch(updateCart({ shippingMethod, totalPrice }));
      toast.info("Finish your payment.");
      router.push("/cart/checkout");
    }
  };

  useEffect(() => {
    setTotalPrice(props.cart.subTotal);
  }, [props.cart.subTotal]);

  return (
    <>
      <Header />
      <Routing type='private' user='customer' />
      <PageTitle
        title="Your Cart"
        subTitle="Buy everything in your cart now!"
      />
      <div className="row">
        {props.cart.products.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
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
                {props.cart.products.map((data) => (
                  <CardCart key={data.id} data={data} dispatch={dispatch} />
                ))}
              </div>

              <div className="d-flex justify-content-around w-100">
                <div
                  className={`${styles.codeInput} d-flex align-items-center`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="input your code"
                  />
                  <button className={`${styles.shippingTitle} btn btn-light`}>
                    Apply Coupon
                  </button>
                </div>
                <div>
                  <button
                    onClick={emptyCartHandler}
                    className={`${styles.btnClear} btn btn-light`}
                  >
                    Clear Cart
                  </button>
                  <button className={`${styles.shippingTitle} btn btn-light`}>
                    Update Cart
                  </button>
                </div>
              </div>
            </section>

            <section className="col-10 col-sm-10 col-md-3">
              <div className={styles.totalWrapper}>
                <form
                  onSubmit={toCheckout}
                  onChange={(e) => {
                    e.target.value === "flat"
                      ? setTotalPrice(props.cart.subTotal + 10)
                      : setTotalPrice(props.cart.subTotal);
                  }}
                >
                  <p className={styles.shippingTitle}>Cart Total</p>
                  <div className="row">
                    <div className={`${styles.shippingTitle} col`}>
                      Subtotal
                    </div>
                    <div
                      className={`${styles.shippingTitle} col`}
                    >{`$${props.cart.subTotal}`}</div>
                  </div>
                  <div className={`${styles.shipping} row`}>
                    <div className={`${styles.shippingTitle} col`}>
                      Shipping
                    </div>
                    <div className={`${styles.shippingOptions} col`}>
                      <div className="form-check">
                        <input
                          value="flat"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          required
                        />
                        <label className="form-check-label">
                          flat rate $10
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          value="free"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          required
                        />
                        <label className="form-check-label">
                          free shipping
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          value="pickup"
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          required
                        />
                        <label className="form-check-label">local pickup</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.shippingTitle} col`}>
                      Total Price
                    </div>
                    <div
                      className={`${styles.shippingTitle} col`}
                    >{`$${totalPrice}`}</div>
                  </div>
                  <button
                    type="submit"
                    className={`${styles.shippingBtn} btn btn-dark btn-block`}
                  >
                    Proceed To Check Out
                  </button>
                </form>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
