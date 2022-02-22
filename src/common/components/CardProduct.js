import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "src/common/styles/CardProduct.module.css";

import defaultProduct from "public/defaultProduct.jpg";
import Link from "next/link";

function Card(props) {
  const [image, setImage] = useState(defaultProduct);

  const id = props.id;
  useEffect(() => {
    if (props.image && props.image !== null) {
      const URL = process.env.NEXT_PUBLIC_API_URL;
      const imageBackend = URL + "/" + props.image;
      setImage(imageBackend);
      console.log("product id : " + id);
    }
    console.log("product : " + id);
  }, [props]);
  const onClickHandler = (id) => {
    // router.push(`/product/${id[0]}`); //[0] or not
    console.log(id);
  };
  return (
    <>
      <Link href={`/product/${id}`} passHref>
        <div className={styles["card-wrapper"]}>
          <div className={styles["img-wrapper"]}>
            <Image
              alt="product name"
              src={image}
              layout="fill"
              objectFit="cover"
              priority={true}
              onError={() => {
                setImage(defaultProduct);
              }}
              onClickHandler={() => onClickHandler}
            />
          </div>
          <div className={styles["product-detail"]}>
            <p className={styles["product-name"]}>{props.name}</p>
            <p className={styles["product-price"]}>{`$${props.price}`}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
