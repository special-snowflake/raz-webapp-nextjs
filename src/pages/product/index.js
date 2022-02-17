import {useEffect, useState} from 'react';
import Link from 'next/link';
import Router, {useRouter} from 'next/router';

import styles from 'src/common/styles/Product.module.css';

import PageTitle from 'src/common/components/PageTitle';
import Card from 'src/common/components/CardProduct';
import SideBar from 'src/common/components/SideBar';
import Footer from 'src/common/components/footer';
import Header from 'src/common/components/header';

function Product(props) {
  const [buttonIsHovered, setButtonHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const filter = router.asPath.slice(8);
    console.log('query', filter);
  }, [router]);
  return (
    <>
      <Header />
      <PageTitle title='Products' subTitle='Find and buy the one you like.' />
      <main className={styles['main']}>
        <SideBar />
        <div className={styles['main-content']}>
          <div className={styles['product-list-sort']}>
            <div className={styles['count']}>Showing 1-12 of 39 Results</div>
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
                <a href='#'>Newest</a>
                <a href='#'>Price: Lowest</a>
                <a href='#'>Price: Highest</a>
              </div>
            </div>
          </div>
          <div className={styles['product-list']}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={styles['pagination']}>
            <button
              className={`${styles['pagination-button']} ${styles['active']}`}>
              01
            </button>
            <button className={`${styles['pagination-button']}`}>02</button>
            <button className={`${styles['pagination-button']}`}>03</button>
            <button className={`${styles['pagination-button']}`}>04</button>
            <button className={`${styles['pagination-button']}`}>05</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;
