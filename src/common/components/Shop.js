import styles from "src/common/styles/Shop.module.css";
import Image from "next/image";
import pic from "src/assets/b_RIALTO-Riva-19.png";

export default function Shop() {
  return (
    <section>
        <div className={`${styles.discount} col d-flex align-items-center`}>
          <Image src={pic} width={150} height={150} />
          <div>
            <p className={styles.title}>Decorative Ceramic Accent Vases</p>
            <p className={styles.sales}>Off 50%</p>
            <button className="btn btn-dark">Shop Now</button>
          </div>
        </div>
    </section>
  );
}
