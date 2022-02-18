import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Router, {useRouter} from 'next/router';

import styles from 'src/common/styles/Product.module.css';

import PageTitle from 'src/common/components/PageTitle';
import Card from 'src/common/components/CardProduct';
import SideBar from 'src/common/components/SideBar';
import Footer from 'src/common/components/footer';
import Header from 'src/common/components/header';
import LoadingBox from 'src/common/components/LoadingBox';

import {searchProducts} from 'src/modules/utils/product';

function Product(props) {
  const [buttonIsHovered, setButtonHovered] = useState(false);
  const [listProduct, setListProduct] = useState(null);
  const [meta, setMeta] = useState(null);
  const router = useRouter();
  console.log('query router index', router.query);
  const [isLoading, setIsLoading] = useState(true);

  const getListProduct = (filter) => {
    searchProducts(filter)
      .then((res) => {
        setListProduct(res.data.data);
        setMeta(res.data.meta);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
      });
  };

  const showCard = () => {
    if (listProduct.length === 0 || listProduct === null) {
      return <h2>We can't find anything</h2>;
    }
    const elements = [];
    listProduct.forEach((element) => {
      const data = (
        <React.Fragment key={`product-${element.id}`}>
          <Card
            id={element.id}
            name={element.name}
            price={element.price}
            image={element.image}
          />
        </React.Fragment>
      );
      elements.push(data);
    });
    return elements;
  };

  const showPagination = () => {
    if (meta.totalData === 0) {
      return (
        <>
          <button
            className={`${styles['pagination-button']} ${styles['disabled']}`}>
            1
          </button>
        </>
      );
    }
    if (meta.totalPage === 1) {
      return (
        <button
          className={`${styles['pagination-button']} ${styles['active']}`}>
          1
        </button>
      );
    }
    const currentPage = parseInt(router.query.page);
    const elements = [];
    for (let i = 1; i < meta.totalPage + 1; i++) {
      if (currentPage === i) {
        elements.push(
          <React.Fragment key={`pagination-${i}`}>
            <button
              className={`${styles['pagination-button']} ${styles['active']}`}>
              {i}
            </button>
          </React.Fragment>,
        );
      } else {
        elements.push(
          <React.Fragment key={`pagination-${i}`}>
            <button
              onClick={() => {
                onClickPagination(i);
              }}
              className={`${styles['pagination-button']}`}>
              {i}
            </button>
          </React.Fragment>,
        );
      }
    }
    return elements;
  };

  const onClickPagination = (page) => {
    const query = {...router.query, ...{page}};
    console.log('onclick pagination', page, query);
    Router.push({
      pathname: '/product',
      query,
    });
  };

  const showHeader = () => {
    if (meta.totalData === 0) {
      return 'Showing 0 from 0 Results';
    }
    const minData = meta.page * meta.limit - meta.limit + 1;
    const topData = meta.page * meta.limit;
    const maxData = topData > meta.totalData ? meta.totalData : topData;
    return `Showing ${minData}-${maxData} of ${meta.totalData} Results`;
  };

  const handleSort = (sort) => {
    const page = 1;
    const query = {...router.query, ...{sort}, ...{page}};
    Router.push({
      pathname: '/product',
      query,
    });
  };

  useEffect(() => {
    const filter = router.asPath.slice(8);
    console.log('query filter', filter);
    setIsLoading(true);
    getListProduct(filter);
  }, [router]);

  // const onClickHandler = (id) => {
  //   router.push(`/product/${id[0]}`); //[0] or not
  //   console.log(id);
  // };
  return (
    <>
      <Header />
      <PageTitle title='Products' subTitle='Find and buy the one you like.' />
      <main className={styles['main']}>
        <SideBar />
        <div className={styles['main-content']}>
          <div className={styles['product-list-sort']}>
            <div className={styles['count']}>
              {' '}
              {meta !== null && showHeader()}
            </div>
            <div
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className={styles['dropdown']}>
              <button className={styles['sort']}>
                Sort by{' '}
                {buttonIsHovered ? (
                  <i className='bi bi-caret-down-fill'></i>
                ) : (
                  <i className='bi bi-caret-down'></i>
                )}
              </button>
              <div className={styles['dropdown-content']}>
                <span
                  onClick={() => {
                    handleSort('Latest');
                  }}>
                  Latest
                </span>
                <span
                  onClick={() => {
                    handleSort('Price ASC');
                  }}>
                  Price: Lowest
                </span>
                <span
                  onClick={() => {
                    handleSort('Price DESC');
                  }}>
                  Price: Highest
                </span>
              </div>
            </div>
          </div>
          <div className={styles['product-list']}>
            {listProduct !== null && !isLoading ? showCard() : <LoadingBox />}
          </div>
          <div className={styles['pagination']}>
            {meta !== null && showPagination()}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;
