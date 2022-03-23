import styles from 'src/common/styles/CardSellerProduct.module.css';
import Image from 'next/image';
import pic from 'src/assets/b_OKITO-PLY-DINING-Chair-3.png';
import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import Routing from 'src/common/components/Routing';
import React, {useState, useEffect} from 'react';
import {deleteFromFavorite, getUserFavorite} from 'src/modules/utils/favorite';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import LoadingCircle from 'src/common/components/LoadingBox';
import defaultProduct from 'public/defaultProduct.jpg';
import Card from 'src/common/components/CardFavorite';

export default function index() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [meta, setMeta] = useState(null);
  const token = useSelector((state) => state.auth.userData.token);
  const router = useRouter();
  const [image, setImage] = useState(defaultProduct);

  useEffect(() => {
    const page = router.query.page || 1;

    getUserFavorite(token, page)
      .then((res) => {
        console.log(res);
        setFavoriteList(res.data.data);
        setMeta(res.data.meta);
        setIsLoading(false);
      })
      .catch((err) => console.log({...err}));
  }, [router.query.page, reload]);

  return (
    <>
      <Header />
      <Routing type="private" user="customer" />
      <PageTitle title="Favorite" subTitle="My favorite list." />
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <LoadingCircle />
        </div>
      ) : favoriteList.length === 0 ? (
        <div className={styles.emptyList}>Favorite list is empty</div>
      ) : (
        <>
          <div className={`${styles.productWrapper} mt-5`}>
            <div
              className="row mx-auto"
              style={{margin: 'auto', paddingLeft: '60px'}}
            >
              <div
                className="col-4"
                style={{
                  marginLeft: '30px',
                  marginRight: '70px',
                }}
              >
                <p>Product</p>
              </div>
              <div className="col-2">
                <p>Stock Status</p>
              </div>
              <div
                className={`${styles.price} col`}
                style={{marginLeft: '20px'}}
              >
                <p>Price</p>
              </div>
            </div>
          </div>
          {favoriteList.map((item) => (
            <Card key={item.id} data={item} reload={() => setReload(!reload)} />
          ))}
        </>
      )}
      <Footer />
    </>
  );
}
