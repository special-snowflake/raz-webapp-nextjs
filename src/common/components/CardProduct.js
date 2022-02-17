import Image from 'next/image';
import {useEffect, useState} from 'react';

import styles from 'src/common/styles/CardProduct.module.css';

import defaultProduct from 'public/defaultProduct.jpg';

function Card(props) {
  const [image, setImage] = useState(defaultProduct);

  useEffect(() => {
    if (props.image && props.image !== null) {
      const URL = process.env.NEXT_PUBLIC_API_URL;
      const imageBackend = URL + '/' + props.image;
      setImage(imageBackend);
    }
  }, [props]);
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['img-wrapper']}>
        <Image
          alt='product name'
          src={image}
          layout='fill'
          objectFit='cover'
          priority={true}
          onError={() => {
            setImage(defaultProduct);
          }}
        />
      </div>
      <div className={styles['product-detail']}>
        <p className={styles['product-name']}>{props.name}</p>
        <p className={styles['product-price']}>${props.price}</p>
      </div>
    </div>
  );
}

export default Card;
