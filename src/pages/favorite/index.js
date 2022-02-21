import styles from 'src/common/styles/CardSellerProduct.module.css';
import Image from 'next/image';
import pic from 'src/assets/b_OKITO-PLY-DINING-Chair-3.png';
import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import Routing from 'src/common/components/Routing';

export default function index() {
  return (
    <>
      <Header />
      <Routing type='private' user='customer' />
      <PageTitle
        title='My Account'
        subTitle='Register and log in with your account to be able to shop at will'
      />
      <div className={`${styles.productWrapper} mt-5`}>
        <div
          className='row mx-auto'
          style={{margin: 'auto', paddingLeft: '60px'}}>
          <div
            className='col-4'
            style={{
              marginLeft: '30px',
              marginRight: '70px',
            }}>
            <p>Product</p>
          </div>
          <div className='col-2'>
            <p>Stock Status</p>
          </div>
          <div className={`${styles.price} col`} style={{marginLeft: '20px'}}>
            <p>Price</p>
          </div>
        </div>
      </div>

      <div className={styles.rowContent}>
        <div className={`${styles.card} row`}>
          <div className='col-1'>
            <i className='bi bi-heart-fill mx-3'></i>
          </div>
          <div className={`${styles.productpicture} col`}>
            <Image
              src={pic}
              width={170}
              height={170}
              layout='intrinsic'
              alt='pic'
            />
            <p>Eugene Accent Table 18.9 inches Espresso</p>
          </div>
          <div className='col-2'>
            <p>
              <i className='bi bi-check-circle'></i>19 Stock
            </p>
            {/* className={styles.productStock} */}
          </div>
          <div className={`${styles.price} col`}>
            <p>Price</p>
            <button type='button' className='btn btn-danger'>
              Delete
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
