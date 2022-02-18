import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "src/common/styles/ProductDetail.module.css";
import sofa from "src/assets/sofa.png";
import userone from "src/assets/userone.png";
import usertwo from "src/assets/usertwo.png";
import userthree from "src/assets/userthree.png";
import { useRouter } from "next/router";
import ProductSlider from "src/common/components/ProductSlider";
import { geProductId } from "src/modules/utils/product";

export default function DetailProduct(props) {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState({});
  const menu = [
    "description",
    "review",
    "addotional informatin",
    "about brand",
    "Shipping & delivery",
  ];
  const [productsMenu, setProductsMenu] = useState("");

  const id = router.query.id;
  useEffect(() => {
    const token = props.token;
    geProductId(token)
      .then((response) => {
        setProduct({ ...response.data.data });
        console.log(response.data.data.name + ": " + response.data.data.id);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router.query]);

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };
  return (
    <>
      <section className={styles.productMainWrapper}>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Product</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                [product]
              </li>
            </ol>
          </nav>
        </div>
        {/* end of breadcrumb */}
        <div className={styles.imgProductContainer}>
          <ProductSlider />
        </div>
        <div className={styles.productDescriptionWrapper}>
          <p className={styles.productTitle}>{product.name}</p>
          <p className={styles.productRate}>Rate Example (2 reviews)</p>
          <div>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productStock}>
              <i className="bi bi-check-circle"></i>19 Sold / {product.stock} In
              Stock
            </p>
          </div>
          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className={`${styles.counter} d-flex align-items-center`}>
            <div className="btn btn btn-light" onClick={subCounter}>
              -
            </div>
            <div>{counter}</div>
            <div className="btn btn btn-light" onClick={addCounter}>
              +
            </div>
          </div>
          <button className={`${styles.productDescButton} btn btn-dark`}>
            Add to Chart
          </button>
          <button className={`${styles.productDescButton} btn btn-dark`}>
            <i className="bi bi-heart"></i>
          </button>
          <button
            className={`${styles.productDescButton} btn btn-outline-dark`}
          >
            Add to Wihslist
          </button>
        </div>
        <div className={styles.additional}>
          <p>SKU: N/A</p>
          <p>Categories: {product.category}</p>
          <p>Tag: Furniture, Chair, Scandinavian, Modern</p>
          <p>Product ID: 274</p>
        </div>
        <div className={`${styles.shippingOptions} d-flex align-items-center`}>
          <p>
            <i className="bi bi-truck-flatbed"></i>Delivery and return
          </p>
          <p>
            <i className="bi bi-rulers"></i>Size Guide
          </p>
          <p>
            <i className="bi bi-geo-alt"></i>Store availability
          </p>
        </div>
        <div className={`${styles.socialMediaIcon} d-flex align-items-center`}>
          <div>
            <i className="bi bi-facebook"></i>
          </div>
          <div>
            <i className="bi bi-twitter"></i>
          </div>
          <div>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
        {/* desctription components */}
        <section>
          <div
            className={`${styles.productDetailNav} d-flex align-items-center justify-content-center`}
          >
            {menu.map((productMenu, idx) => (
              <p key={idx} onClick={() => setProductsMenu(productMenu)}>
                {productMenu.toLocaleUpperCase()}
              </p>
            ))}
            {/* <p>Description</p>
            <p>Review</p>
            <p>Additional information</p>
            <p>About Brand</p>
            <p>Shipping & Delivery</p> */}
          </div>
          {/* desc sec */}

          {/* content section DEscription */}
          <section>
            {/* <h1>THIS IS SECTION DESCRIPTION</h1> */}
            <div>
              {productsMenu === "description" && <Description />}
              {productsMenu === "review" && <Review />}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

const Description = () => {
  return (
    <>
      <div className="d-flex align-items-center mx-auto w-75 row">
        <div className="col-10 col-sm-10 col-md-5 col-lg-5">
          <Image
            src={sofa}
            // className={styles.imageStarter}
            alt="register"
            width={400}
            height={450}
            // layout="fill"
            // objectFit="scale-down"
            // objectPosition="static"
          />
        </div>
        <div
          className={`${styles.productDescriptionSection} col-10 col-sm-10 col-md-6 col-lg-6`}
        >
          <div className={styles.productDescriptionSectionP}>
            <p>
              Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
              egestas magna molestie a. Proin ac ex maximus, ultrices justo
              eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in
              vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat
              tellus at, hendrerit arcu..
            </p>
          </div>
          <div>
            <ul>
              <li>
                Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                tincidunt semper
              </li>
              <li>
                Aliquam est et tempus. Eaecenas libero ante, tincidunt vel
              </li>
            </ul>
          </div>
          <div className={styles.productDescriptionSectionP}>
            <p>
              Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas
              eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper.
              Phasellus accum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Review = () => {
  return (
    <>
      {/* review components-- border bottom percomment */}
      <section>
        {/* <h1>THIS IS SECTION REVIEW </h1> */}
        {/* multiple comment */}
        <div
          className={`${styles.cardReviewComment} w-75 mx-auto col-10 col-sm-10`}
        >
          {/* parent comment */}
          <div>
            <div className="d-flex align-items-center">
              <div className={styles.userReviewImage}>
                <Image
                  src={userone}
                  alt="user"
                  width={150}
                  height={150}
                  // layout="fill"
                  // objectFit="scale-down"
                  // objectPosition="static"
                />
              </div>
              <div>
                <p className={styles.commentQuote}>
                  {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                </p>
                <div className="d-flex align-items-center">
                  <p className={styles.commentTime}>
                    35 mins ago, 15 November 2019
                  </p>
                  <button className={`${styles.replyBtn} btn btn-light`}>
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* reply commenet card */}
          <div className="d-flex align-items-center">
            <div className="w-25">
              <i className="bi bi-align-end"></i>
            </div>

            <div>
              <div className="d-flex align-items-center">
                <div className={styles.userReviewImage}>
                  <Image
                    src={usertwo}
                    alt="user"
                    width={150}
                    height={150}
                    // layout="fill"
                    // objectFit="scale-down"
                    // objectPosition="static"
                  />
                </div>
                <div>
                  <p className={styles.commentQuote}>
                  {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                  </p>
                  <div className="d-flex align-items-center">
                    <p className={styles.commentTime}>
                      35 mins ago, 15 November 2019
                    </p>
                    <button className={`${styles.replyBtn} btn btn-light`}>
                      reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single comment */}
        <div
          className={`${styles.cardReviewComment} w-75 mx-auto col-10 col-sm-10`}
        >
          <div>
            <div className="d-flex align-items-center">
              <div className={styles.userReviewImage}>
                <Image
                  src={userthree}
                  alt="user"
                  width={150}
                  height={150}
                  // layout="fill"
                  // objectFit="scale-down"
                  // objectPosition="static"
                />
              </div>
              <div>
                <p className={styles.commentQuote}>
                {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                </p>
                <div className="d-flex align-items-center">
                  <p className={styles.commentTime}>
                    35 mins ago, 15 November 2019
                  </p>
                  <button className={`${styles.replyBtn} btn btn-light`}>
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* leave comment section */}
      <section className="w-75 mx-auto my-5">
        <p className={styles.productTitle}>Leave A Comment</p>
        <p className={styles.productRate}>
          Your email address will not be published. Required fields are marked *
        </p>
        <form>
          <div className="row my-3">
            <div className="form-group col-sm-4">
              <input type="text" className="form-control" placeholder="Name*" />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
              />
            </div>
            <div className="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Website*"
              />
            </div>
          </div>
          <div className="form-group my-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <button className={`${styles.productDescButton} btn btn-dark`}>
            Send
          </button>
        </form>
      </section>
    </>
  );
};
