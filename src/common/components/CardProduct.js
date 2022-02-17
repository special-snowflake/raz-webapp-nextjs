import Image from "next/image";


import styles from "src/common/styles/CardProduct.module.css";

function Card(data) {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img-wrapper"]}>
        <Image
          alt="product name"
          src={"/couch.jpg"}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className={styles["product-detail"]}>
        <p className={styles["product-name"]}>Sofa & Marwa</p>
        <p className={styles["product-price"]}>$99.8</p>
      </div>
    </div>
  );
}

export default Card;
