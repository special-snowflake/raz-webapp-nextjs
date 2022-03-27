import Image from "next/image";
import defaultProduct from "public/defaultProduct.jpg";
import { useState } from "react";
// import style from "src/common/styles/SellerAddProduct.module.css";
// const defaultProduct = require("src/assets/b_okito-ply-dining-chair.png");

function ImageBoxProduct(props) {
  const [image, setImage] = useState(props.image);
  console.log("img box image", image);
  return (
    <Image
      src={image}
      alt="products"
      objectFit="cover"
      layout="fill"
      onError={() => {
        setImage(defaultProduct);
      }}
    />
  );
}

export default ImageBoxProduct;
