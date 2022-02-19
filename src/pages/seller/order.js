import { useState, useEffect } from "react";
import { getUserTransaction } from "src/modules/utils/transaction";
import OrderCard from "src/common/components/CardOrder";
import styles from "src/common/styles/CardOrder.module.css";
import MenuBar from "src/common/components/MenuBar";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import { connect } from "react-redux";

function Order(props) {
  const [order, setOrder] = useState({});
  useEffect(() => {
    const query = "?page=1&limit=5";
    const token = props.token;
    getUserTransaction(query, token)
    .then((res) => {
      setOrder({...res.data.data.result});
      console.log(res.data.data.result);
    })
    .catch((err) => console.log(err));
  }, [])


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
      <h1>{order.id}</h1>
      <OrderCard />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(Order);
