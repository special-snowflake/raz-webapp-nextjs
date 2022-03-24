import styles from "src/common/styles/CardRelated.module.css";
import Image from "next/image";
import one from "src/assets/b_OKITO-PLY-DINING-Chair-2.png";

const Relatedcardproduct = ({ data }) => {
  console.log("from related product card : ", data);
  return (
    <div className="row d-flex justify-content-center mb-5">
      <div className="col-10 mb-5">
        <p className={styles.title}>Related Product</p>
      </div>
      <div className={styles["wrapper-card"]}>
        <div className={styles.card}>
          <Image src={one} alt={one} width="800" layout="responsive" />
          <div className={styles["wrapper-text"]}>
            <p>a</p>
            <p>b</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatedcardproduct;
