import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import styles from "src/common/styles/Tracking.module.css";
import Image from "next/image";
import map from "src/assets/map.png";
import devider from "src/assets/line-dot.svg";

export default function TrackingDetail() {
  return (
    <>
      <Header />
      <PageTitle
        title="Order Tracking"
        subTitle="Track where your order arrived"
      />

      <section className="row p-0 mx-auto">
        <div className="col col-md-5 col-lg-5 p-0 m-0">
          <Image src={map} width={600} height={600} alt="img"  />
        </div>
        <div className="col col-md-6 col-lg-6 mx-auto">
            <div className={`${styles.authWrapperSection}`}>
              <div className="row mx-auto">
                <div className="col">
                  <p>Order ID</p>
                  <p>ABCD-EFGH-W123</p>
                </div>
                <div className="col">
                  <p>Order Item</p>
                  <p>Fabric Mid Century Chair</p>
                </div>
              </div>
              <div className="col-5">
                <div className="col d-flex  align-items-center">
                  <div className={styles.faqIcon}>
                    <i className="bi bi-truck"></i>
                  </div>
                  <div>
                    <p>On Delivery</p>
                    <p>Kebun Jeruk, Jakarta Barat</p>
                  </div>
                </div>
                <div>
                  <div className={styles.imgdevider}>
                    <Image src={devider} height={140} width={3 } alt="img" />
                  </div>
                </div>
                <div className="col d-flex align-items-center">
                  <div className={styles.faqIcon}>
                    <i className="bi bi-truck"></i>
                  </div>
                  <div>
                    <p>Destination</p>
                    <p>Kebun Mangga, Jakarta Selatan</p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`${styles.checkOnMap} btn btn-dark`}
              >
                Track Now
              </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
