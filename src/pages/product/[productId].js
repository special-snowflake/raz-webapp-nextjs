import Image from "next/image";
import { useState } from "react";
import styles from "src/common/styles/ProductDetail.module.css";
import sofa from "src/assets/sofa.png";
import userone from "src/assets/userone.png";
import usertwo from "src/assets/usertwo.png";
import userthree from "src/assets/userthree.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function productId() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };
  return (
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
        <Carousel>
          <div>
            <Image src={sofa} alt="Product"/>
          </div>
          <div>
            <Image src={sofa} alt="Product"/>
          </div>
          <div>
            <Image src={sofa} alt="Product"/>
          </div>
        </Carousel>
      </div>
      <div className={styles.productDescriptionWrapper}>
        <p className={styles.productTitle}>Product Title</p>
        <p className={styles.productRate}>Rate Example (2 reviews)</p>
        <div>
          <p className={styles.productPrice}>Price</p>
          <p className={styles.productStock}>
            <i className="bi bi-check-circle"></i>19 Sold / 40 In Stock
          </p>
        </div>
        <div className={styles.productDescription}>
          <p>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit.
            Proin dui lacus, viverra at imperdiet non, facilisis eget orci.
            Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam
            eu, pretium finibus libero. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae
            neque tellus.
          </p>
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
        <button className={`${styles.productDescButton} btn btn-outline-dark`}>
          Add to Wihslist
        </button>
      </div>
      <div className={styles.additional}>
        <p>SKU: N/A</p>
        <p>Categories: Furniture, Interior, Chair</p>
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
          <p>Description</p>
          <p>Review</p>
          <p>Additional information</p>
          <p>About Brand</p>
          <p>Shipping & Delivery</p>
        </div>
        {/* desc sec */}

        {/* content section DEscription */}
        <section>
          <h1>THIS IS SECTION DESCRIPTION</h1>

          <div className="d-flex align-items-center mx-auto w-75">
            <div>
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
            <div className={styles.productDescriptionSection}>
              <div className={styles.productDescriptionSectionP}>
                <p>
                  Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                  egestas magna molestie a. Proin ac ex maximus, ultrices justo
                  eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                  in vehicula lacus scelerisque. Vestibulum ut sem laoreet,
                  feugiat tellus at, hendrerit arcu..
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
                  Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                  Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                  tincidunt semper. Phasellus accum
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* review components-- border bottom percomment */}
      <section>
        <h1>THIS IS SECTION REVIEW </h1>
        {/* multiple comment */}
        <div className={`${styles.cardReviewComment} w-50 mx-auto`}>
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
                  “Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”
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
                    “Theme is very flexible and easy to use. Perfect for us.
                    Customer support has been excellent and answered every
                    question we've thrown at them with 12 hours.”
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
        <div className={`${styles.cardReviewComment} w-50 mx-auto`}>
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
                  “Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”
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
      <section className="w-50 mx-auto my-5">
        <p className={styles.productTitle}>Leave A Comment</p>
        <p className={styles.productRate}>
          Your email address will not be published. Required fields are marked *
        </p>
        <form>
          <div className="row my-3">
            <div class="form-group col-sm-4">
              <input type="text" className="form-control" placeholder="Name*" />
            </div>
            <div class="form-group col-sm-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
              />
            </div>
            <div class="form-group col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Website*"
              />
            </div>
          </div>
          <div class="form-group my-3">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <button className={`${styles.productDescButton} btn btn-dark`}>
            Send
          </button>
        </form>
      </section>
    </section>
  );
}
