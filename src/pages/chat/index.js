import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import Image from "next/image";
import styles from "src/common/styles/Chat.module.css";
import connor from "src/assets/connor.png";
import { useSelector } from "react-redux";

function Chat() {
  const token = useSelector((state) => state.auth.userData.token);
  console.log(token);

  return (
    <>
      <Header />
      <PageTitle
        title="Your Cart"
        subTitle="Buy everything in your cart now!"
      />
      <div className={`${styles.chatWrapper} row`}>
        <aside className="col-md-4 mx-0 p-0">
          <div className={styles.userWrapper}>
            <div className={styles.userActiveWrapper}>
              <div className={styles.iconActive}>
                <i
                  className={
                    !token
                      ? "bi bi-circle"
                      : `${styles.isIcon} bi bi-circle-fill`
                  }
                ></i>
              </div>
              <Image
                src={connor}
                alt="user"
                width={50}
                height={50}
                className={styles.userImg}
              />
            </div>
            <div>
              <p className={styles.userName}>name</p>
              <p className={styles.status}>-Status-</p>
            </div>
          </div>

          {/* fridnlist */}
          <div className={styles.friendWrapper}>
            <div className={styles.userActiveWrapper}>
              <div className={styles.iconActive}>
                <i
                  className={
                    !token
                      ? "bi bi-circle"
                      : `${styles.isIcon} bi bi-circle-fill`
                  }
                ></i>
              </div>
              <Image
                src={connor}
                alt="user"
                width={50}
                height={50}
                className={styles.userImg}
              />
            </div>
            <div>
              <p className={styles.friendName}>name</p>
              <p className={styles.friendstatus}>-Status-</p>
            </div>
          </div>
          <div className={styles.friendWrapper}>
            <div className={styles.userActiveWrapper}>
              <div className={styles.iconActive1}>
                <i
                  className={
                    token
                      ? `${styles.noIcon} bi bi-circle-fill`
                      : `${styles.isIcon} `
                  }
                ></i>
              </div>
              <Image
                src={connor}
                alt="user"
                width={50}
                height={50}
                className={styles.userImg}
              />
            </div>
            <div>
              <p className={styles.friendName}>name</p>
              <p className={styles.friendstatus}>-Status-</p>
            </div>
          </div>
        </aside>
        <section className="col-md-8 mx-0 p-0">
          <div className={styles.userWrapper}>
            <div className={styles.userActiveWrapper}>
              <div className={styles.iconActive2}>
                <i
                  className={
                    token
                      ? `${styles.noIcon} bi bi-circle-fill`
                      : `${styles.isIcon} `
                  }
                ></i>
              </div>
              <Image
                src={connor}
                alt="user"
                width={50}
                height={50}
                className={styles.userImg}
              />
            </div>
            <div>
              <p className={styles.userName}>name</p>
              <p className={styles.status}>-Status-</p>
            </div>
          </div>
          <hr />
          <div className={styles.inputText}>
            <input type="text" placeholder=" type something" />
            <button className="btn btn-dark"> Send </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Chat;
