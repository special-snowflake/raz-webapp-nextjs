import styles from "src/common/styles/Notification.module.css";
import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";

function Notification(props) {
  return (
    <>
      <Header />
      <PageTitle
        title="Notification"
        subTitle="See your notifications for the latest updates"
      />
      <main className={styles["main"]}>
        <div className={styles["notification-list"]}>
          <div className={styles["notification-item"]}>
            <div className={styles["notification-dot"]}></div>
            <p
              className={`${styles["notification-title"]} ${styles["unread"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles["notification-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              dapibus non elementum arcu tortor...
            </p>
          </div>
          <div className={styles["notification-item"]}>
            <p className={styles["notification-title"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles["notification-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              dapibus non elementum arcu tortor...
            </p>
          </div>
          <div className={styles["notification-item"]}>
            <p className={styles["notification-title"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles["notification-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              dapibus non elementum arcu tortor...
            </p>
          </div>
        </div>
        <div className={styles["pagination"]}>
          <button
            className={`${styles["pagination-button"]} ${styles["active"]}`}>
            01
          </button>
          <button className={`${styles["pagination-button"]}`}>02</button>
          <button className={`${styles["pagination-button"]}`}>03</button>
          <button className={`${styles["pagination-button"]}`}>04</button>
          <button className={`${styles["pagination-button"]}`}>05</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Notification;
