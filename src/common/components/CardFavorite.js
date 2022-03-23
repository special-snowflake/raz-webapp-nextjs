import Image from 'next/image';
import {useEffect, useState} from 'react';
import styles from 'src/common/styles/CardSellerProduct.module.css';

import {toast} from 'react-toastify';

import defaultProduct from 'public/defaultProduct.jpg';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import {deleteFromFavorite} from 'src/modules/utils/favorite';
import {useDispatch} from 'react-redux';
import {addProduct} from 'src/store/actions/cart';

function Card(props) {
  const [image, setImage] = useState(defaultProduct);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);

  const {data} = props;

  useEffect(() => {
    if (data.image && data.image !== null) {
      const URL = process.env.NEXT_PUBLIC_API_URL;
      const imageBackend = URL + '/' + data.image;
      setImage(imageBackend);
      console.log('product id : ' + data.id);
    }
    console.log('product : ' + data.id);
  }, [data]);

  const deleteFavoriteHandler = () => {
    deleteFromFavorite(token, data.id)
      .then((res) => {
        props.reload();
        toast.success('Success delete item from favorite');
      })
      .catch((err) => {
        console.log({...err});
        toast.error('Failed delete item from favorite.');
      });
  };

  const addToCartHandler = () => {
    const {id, name, image, price} = data;
    const parsedPrice = parseFloat(price);
    dispatch(
      addProduct({
        id,
        name,
        images: image,
        price: parsedPrice,
        quantity: 1,
        total: parsedPrice,
      })
    );
    toast.success('Added to cart', {position: 'bottom-left'});
  };

  return (
    <>
      <div className={styles.rowContent}>
        <div className={`${styles.card} row`}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="col-1"
          >
            <i
              onClick={deleteFavoriteHandler}
              className={`bi ${isHovered ? 'bi-x-lg' : 'bi-heart-fill'} mx-3`}
            ></i>
          </div>
          <div className={`${styles.productpicture} col`}>
            <Image
              src={image}
              width={170}
              height={170}
              layout="intrinsic"
              alt="item"
              onError={() => {
                setImage(defaultProduct);
              }}
            />
            <p>{data.name}</p>
          </div>
          <div className="col-2">
            <p>
              <i className="bi bi-check-circle"></i>
              {data.stock} Stock
            </p>
          </div>
          <div className={`${styles.price} col`}>
            <p>{`$${data.price}`}</p>
            <button
              onClick={addToCartHandler}
              type="button"
              className="btn btn-danger"
              disabled={parseInt(data.stock) < 1 ? true : false}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
