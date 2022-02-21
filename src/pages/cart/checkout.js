import { useState } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import styles from "src/common/styles/Checkout.module.css";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";

import { addTransaction } from "src/modules/utils/transaction";
import { emptyCart } from "src/store/actions/cart";

function Checkout(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selects, setSelect] = useState();

  const checkoutHandler = (e) => {
    e.preventDefault();
    console.log("payment", e.target.paymentMethod.value);
    const body = {
      totalPrice: props.cart.totalPrice,
      shippingMethod: props.cart.shippingMethod,
      paymentMethod: e.target.paymentMethod.value,
      status: "paid",
      productList: props.cart.products.map((product) => {
        const { id, quantity } = product;
        return (product = { idProduct: id, quantity });
      }),
    };
    addTransaction(body, props.auth.userData.token)
      .then((res) => {
        dispatch(emptyCart());
        toast.success("Checkout success!");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Checkout error.");
      });
  };

  return (
    <>
      <Header />
      <PageTitle
        title="Profile"
        subTitle="See your notifications for the latest updates"
      />
      <div className={styles.checkoutWrapper}>
        <form onSubmit={checkoutHandler}>
          <label className={styles.checkoutTitle}>Self Information</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Address*"
              required
            />
          </div>

          <div className="form-group d-flex justify-content-center">
            <div className="btn-group">
              <select
                className={styles.checkoutBtnNmbr}
                value={selects}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option>+62</option>
              </select>
            </div>
            <input
              type="number"
              className="form-control mx-0 my-0 w-50"
              placeholder="Phone Number*"
              required
            />
          </div>

          <div
            className={`${styles.visaOptions} form-group d-flex justify-content-around`}
          >
            <p className={styles.payIcon}>visa</p>
            <select
              name="paymentMethod"
              value={selects}
              onChange={(e) => setSelect(e.target.value)}
              required
            >
              <option value="visa">Pay with Visa</option>
              <option value="transfer">Transfer</option>
              <option value="ewallet">E-wallet</option>
            </select>
          </div>
          <button
            type="submit"
            className={`${styles.checkoutBtn} btn btn-dark ml-5 pl-5`}
          >
            Check out
          </button>
        </form>
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

export default connect(mapStateToProps)(Checkout);
