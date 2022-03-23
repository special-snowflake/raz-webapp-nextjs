import CardProduct from "src/common/components/CardProductSeller.js";
import styles from "src/common/styles/CardSellerProduct.module.css";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";
import { getSellerProduct } from "src/modules/utils/sellerProduct";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Routing from "src/common/components/Routing";
import LoadingBox from "src/common/components/LoadingBox";
import { useRouter } from "next/router";

function Product(props) {
  const token = useSelector((state) => state.auth.userData.token);
  console.log(token);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrnetPage] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const filter = router.query.filter || "all";
    console.log("filter", filter);
    const query = `?filter=${filter}&limit=5&page=1`;
    setLoading(true);
    getSellerProduct(query, token)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response));
  }, [router, router.query, token]);

  useEffect(() => {}, []);
  return (
    <>
      <Header />
      {/* <Routing type='private' user='seller' /> */}
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
      {/* <CardProduct /> */}
      <p>{products.data}</p>
      <div>
        {products.length > 0 && !loading ? (
          products.map((product, id) => (
            <CardProduct
              key={id}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              filter={router.query.filter || "all"}
            />
          ))
        ) : products.length === 0 || !loading ? (
          <div className={styles.rowContent}>Nothing to show</div>
        ) : (
          <div className={styles.rowContent}>
            <LoadingBox />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Product;
