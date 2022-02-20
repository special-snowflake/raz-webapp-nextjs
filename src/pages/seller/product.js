import CardProduct from "src/common/components/CardProductSeller.js";
import styles from "src/common/styles/CardSellerProduct.module.css";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";
import  {getSellerProduct} from "src/modules/utils/sellerProduct"
import { useSelector } from "react-redux";
import React,{ useState} from "react";

function Product(props) {
  const token = useSelector(state => state.auth.userData.token);
  console.log(token)
  const [producs, setProducts] = useState([]);
  
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
      <Footer />

    </>
  );
}
export default Product;
