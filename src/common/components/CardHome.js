import Link from "next/link";
import Image from "next/image";
import styles from "src/common/styles/Home.module.css";
import defaultProduct from "public/defaultProduct.jpg";

function CardHome({ id, name, price, image }) {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const imageCard = host + image;

  return (
    <>
      <Link href={`/product/${id}`} passHref>
        <div className={styles["card-wrapper"]}>
          <div className={styles["img-wrapper"]}>
            <Image
              alt="product name"
              src={defaultProduct}
              layout="fill"
              objectFit="cover"
              priority={true}
              onError={() => {
                setImage(defaultProduct);
              }}
              // onClickHandler={() => onClickHandler}
            />
          </div>
          <div className={styles["product-detail"]}>
            <p className={styles["product-name"]}>{name}</p>
            <p className={styles["product-price"]}>{`$${price}`}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
export default CardHome;
