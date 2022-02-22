import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import styles from "src/common/styles/Tracking.module.css";
import Image from "next/image";
import map from "src/assets/map.png";
import devider from "src/assets/line-dot.svg";
import Routing from "src/common/components/Routing";
import { getDetailTransaction } from "src/modules/utils/transaction";
import LoadingCircle from "src/common/components/LoadingBox";

function TrackingDetail(props) {
  const router = useRouter();
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    getDetailTransaction(props.token, router.query.id)
      .then((res) => {
        setTransactionData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query]);

  return (
    <>
      <Header />
      <PageTitle
        title="Order Tracking"
        subTitle="Track where your order arrived"
      />
      <Routing type="private" user="all" />
      <section className="row p-0 mx-auto">
        <div className="col col-md-5 col-lg-5 p-0 m-0">
          <Image src={map} width={600} height={600} alt="img" />
        </div>
        {transactionData ? (
          <div className="col col-md-6 col-lg-6 mx-auto">
            <div className={`${styles.authWrapperSection}`}>
              <div className="row mx-auto">
                <div className="col">
                  <p>Order ID</p>
                  <p>{transactionData ? transactionData.id : "-"}</p>
                </div>
                <div className="col">
                  <p>Order Item</p>
                  <p>
                    {transactionData
                      ? `${transactionData.products[0].name}`
                      : `-`}
                  </p>
                </div>
              </div>
              <div className="col-5">
                <div className="col d-flex  align-items-center">
                  <div className={styles.faqIcon}>
                    <i className="bi bi-truck"></i>
                  </div>
                  <div>
                    <p>
                      {transactionData.status
                        ? transactionData.status[0].toUpperCase() +
                          transactionData.status.substring(1)
                        : "-"}
                    </p>
                    {/* <p>Kebun Jeruk, Jakarta Barat</p> */}
                  </div>
                </div>
                {/* <div>
                  <div className={styles.imgdevider}>
                    <Image src={devider} height={140} width={3} alt="img" />
                  </div>
                </div> */}
                {/* <div className="col d-flex align-items-center">
                  <div className={styles.faqIcon}>
                    <i className="bi bi-truck"></i>
                  </div>
                  <div>
                    <p>Destination</p>
                    <p>Kebun Mangga, Jakarta Selatan</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <LoadingCircle />
        )}
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: {} };
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    roles: state.auth.userData.roles,
  };
};

export default connect(mapStateToProps)(TrackingDetail);
