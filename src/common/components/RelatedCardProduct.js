import styles from "src/common/styles/CardRelated.module.css";
import Image from "next/image";
import one from "src/assets/b_OKITO-PLY-DINING-Chair-2.png";

const Relatedcardproduct = ({ data }) => {
  console.log("from related product card : ", data);
  return (
    <div className="row d-flex justify-content-center mb-5">
      <div className="col-4">
        <p className={styles.title}>Related Product</p>
      </div>
      <div className={styles.cardwrapperloop}>
        <div
          className={`${styles["wrapper-card"]} align-items-center justify-content-center `}
        >
          {data.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <Image
                  src={one}
                  alt={one}
                  width="300"
                  height="300"
                  //   layout="responsive"
                />
                <div className={`${styles["wrapper-text"]}`}>
                  <p className={styles.txta}>{item.name}</p>
                  <p className={styles.txtb}>{`$${item.price}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Relatedcardproduct;
