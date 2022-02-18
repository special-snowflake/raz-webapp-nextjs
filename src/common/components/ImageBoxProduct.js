import Image from 'next/image';
import style from 'src/common/styles/SellerAddProduct.module.css';

function ImageBoxProduct(props) {
  const image = props.image;
  return <Image src={image} alt='products' objectFit='cover' layout='fill' />;
}

export default ImageBoxProduct;
