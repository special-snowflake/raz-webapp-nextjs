import styles from "src/common/styles/CardRelated.module.css";
import Image from "next/image";
import post1 from "src/assets/post1.png";
import post2 from "src/assets/post2.png";
import post3 from "src/assets/post3.png";

function CardRelated() {
  return (
    <div className="row d-flex justify-content-center mb-5">
      <div className="col-lg-10">
        <p className={styles.title}>Related Product</p>

        <div className="row d-flex justify-content-around">
          <div className={`col-lg-auto ${styles["card"]}`}>
            <div className={styles["wrapper-post"]}>
              <Image src={post1} alt={post1} />
              <div className={styles["wrapper-text"]}>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-clock"></i> How to open interior shop
                  </p>
                </div>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-tag"></i> Kids, Interior, Photos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-lg-auto ${styles["card"]}`}>
            <div className={styles["wrapper-post"]}>
              <Image src={post2} alt={post1} />
              <div className={styles["wrapper-text"]}>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-clock"></i> How to open interior shop
                  </p>
                </div>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-tag"></i> Kids, Interior, Photos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-lg-auto ${styles["card"]}`}>
            <div className={styles["wrapper-post"]}>
              <Image src={post3} alt={post1} />
              <div className={styles["wrapper-text"]}>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-clock"></i> How to open interior shop
                  </p>
                </div>
                <div className={styles["text"]}>
                  <p>
                    <i className="bi bi-tag"></i> Kids, Interior, Photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`col-lg-12  ${styles["dot"]}`}>
        <div className={styles.active}></div>
        <div></div>
      </div>
    </div>
  );
}

export default CardRelated;
