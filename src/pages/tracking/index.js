// import styles from "src/common/styles/Notification.module.css";
import Header from 'src/common/components/header';
import PageTitle from 'src/common/components/PageTitle';
import Footer from 'src/common/components/footer';
import styles from 'src/common/styles/Tracking.module.css';
import Image from 'next/image';
import map from 'src/assets/map.png';
import Link from 'next/link';
import Routing from 'src/common/components/Routing';
// import devider from "src/assets/Line-dot.svg";
// import { useState } from "react";

function Tracking(props) {
  // const tracking = [ map, setMap] = useState(false)
  return (
    <>
      <Header />

      <Routing type='private' user='all' />
      <PageTitle
        title='Order Tracking'
        subTitle='Track where your order arrived'
      />

      <section className='row p-0 m-0'>
        <div className='col col-md-5 col-lg-5 p-0 m-0'>
          <Image src={map} width={600} height={600} alt='img' />
        </div>
        <div className=' col col-md-4 col-lg-4 mx-auto'>
          <div>
            <div className={`${styles.authWrapperSection} mx-auto`}>
              <p className={styles.trackingTitle}>
                {` To track your order please enter your Order ID in the box below
                and press the "Track" button. This was given to you on your
                receipt and in the confirmation email you should have received.`}
              </p>
              <div>
                <form>
                  <div className={`${styles.formAuth} form-group`}>
                    <label>Order ID</label>
                    <input
                      type='email'
                      name='email'
                      placeholder='Order ID'
                      className={'form-control'}
                      required
                    />
                  </div>
                  <div className={`${styles.formAuth} form-group`}>
                    <label>Billing Email</label>
                    <input
                      type='password'
                      name='password'
                      placeholder='Email'
                      className={'form-control'}
                      required
                    />
                  </div>
                </form>
              </div>
              <Link href='/tracking/detail' passHref>
                <button
                  type='submit'
                  className={`${styles.trackButton} btn btn-dark`}>
                  Track Now
                </button>
              </Link>
            </div>
            {/* <OrderTracking />  */}
            {/* <div>{props ? <OrderTracking /> : <TrackingDetail />}</div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Tracking;

// const OrderTracking = (props) => {
//   return (
//     <>

//     </>
//   );
// };
