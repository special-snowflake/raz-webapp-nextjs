import styles from "src/common/styles/Home.module.css";
import CardHome from "src/common/components/CardHome";
import bangku from "src/assets/bangku-home.png";
import Image from "next/image";
import Link from "next/link";
import MenuHome from "src/common/components/MenuHome";
import { searchProducts } from "src/modules/utils/product";
import { useEffect, useState, useCallback } from "react";
import LoadingCircle from "./LoadingBox";
import user1 from "src/assets/userone.png";
import user2 from "src/assets/usertwo.png";
import user3 from "src/assets/userthree.png";
import user4 from "src/assets/user four.png";

function Home() {
  const [newProduct, setNewProduct] = useState([]);
  const [trendProduct, setTrendProduct] = useState([]);
  const [saleProduct, setSaleProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState({
    newActive: true,
    trendActive: false,
    saleActive: false
  });

  const getNewProduct = () => {
    const filter = `?sort=Latest&limit=9`;
    setLoading(true);
    searchProducts(filter)
      .then((res) => {
        setLoading(false);
        setNewProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  const getTrendProduct = () => {
    const filter = `?sort=popular&limit=9`;
    setLoading(true);
    searchProducts(filter)
      .then((res) => {
        setLoading(false);
        setTrendProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  const getSaleProduct = () => {
    const filter = `?sort=Oldest&limit=9`;
    setLoading(true);
    searchProducts(filter)
      .then((res) => {
        setLoading(false);
        setSaleProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  const productNew = () => {
    return (
      <div className={styles["wrapper-card"]}>
        {newProduct.map((item, index) => {
          return (
            <CardHome
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    );
  };

  const productTrend = () => {
    return (
      <div className={styles["wrapper-card"]}>
        {trendProduct.map((item, index) => {
          return (
            <CardHome
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    );
  };

  const productSale = () => {
    return (
      <div className={styles["wrapper-card"]}>
        {saleProduct.map((item, index) => {
          return (
            <CardHome
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    );
  };

  const handleOffNew = (childData) => {
    setIsActive({
      ...isActive,
      newActive: false,
      trendActive: false,
      saleActive: false
    });
  };

  const handleOnTrend = (childData) => {
    setIsActive({
      ...isActive,
      trendActive: true,
      newActive: false,
      saleActive: false
    });
  };

  const handleOnSale = (childData) => {
    setIsActive({
      ...isActive,
      saleActive: true,
      newActive: false,
      trendActive: false
    });
  };

  useEffect(() => {
    getNewProduct();
    getTrendProduct();
    getSaleProduct();
  }, []);

  return (
    <>
      <div className={`row ${styles.main}`}>
        <div className="col-lg-8 d-flex  flex-column justify-content-center">
          <p className={styles.title}>Welcome to Luxury Interior Shop</p>
          <p className={styles.description}>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissi
          </p>
          <div className={styles.explorer}>
            <span></span>
            <Link href="/product" passHref>
              <a>EXPLORER MORE</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={styles["wrapper-image"]}>
            <Image src={bangku} width={300} height={300} alt="bangku" />
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {loading ? (
          <div className="d-flex justify-content-center">
            <LoadingCircle />
          </div>
        ) : (
          <>
            <MenuHome
              isActive={isActive}
              isSale={handleOnSale}
              isTrend={handleOnTrend}
              isNew={handleOffNew}
            />

            {isActive.trendActive
              ? productTrend()
              : isActive.saleActive
              ? productSale()
              : productNew()}
          </>
        )}
        <div className={styles["wrapper-more-product"]}>
          <span></span>
          <Link href="product" passHref>
            <a>View More PRODUCT</a>
          </Link>
        </div>
      </div>

      <div className={`row `}>
        <div className={`col-lg-12 ${styles["wrapper-comment"]}`}>
          <p className={styles["title-comment"]}>What Clients Say?</p>
          <p className={styles["title-description"]}>
            {`“Gave 5 stars for excellent customer service. I had a couple of
          questions which they replied quickly to answer. If I could give
          multiple reasons for my rating it would also be for the design quality
          and customization to go along with the great service. The theme is
          excellent, keep up the great work."`}
          </p>

          <p className={styles["name-user-comment"]}>
            Trevor Rivera - Calinofrnia
          </p>
          <div className={styles["wrapper-image-comment"]}>
            <Image src={user1} alt="user" width={100} height={100} />
            <Image src={user2} alt="user" width={100} height={100} />
            <Image src={user3} alt="user" width={100} height={100} />
            <Image src={user4} alt="user" width={100} height={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
