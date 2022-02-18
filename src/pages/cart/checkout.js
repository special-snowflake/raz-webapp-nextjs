import { useState } from "react";
import styles from "src/common/styles/Checkout.module.css";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";

export default function Checkout() {
  const [selects, setSelect] = useState();

  return (
    <>
    <Header />
      <PageTitle
        title="Profile"
        subTitle="See your notifications for the latest updates"
      />
      <div className={styles.checkoutWrapper}>
        <form>
        <label className={styles.checkoutTitle}>Self Information</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Address*"
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
                <option>+61</option>
                <option>+08</option>
              </select>
            </div>
            <input
              type="number"
              className="form-control mx-0 my-0 w-50"
              placeholder="Phone Number*"
            />
          </div>

          <div className={`${styles.visaOptions} form-group d-flex justify-content-around`}>
            <p className={styles.payIcon}>visa</p>
            <select value={selects} onChange={(e) => setSelect(e.target.value)}>
              <option>Pay with Visa</option>
              <option>+61</option>
              <option>+08</option>
            </select>
            {/* <div>{selects}</div> */}
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
