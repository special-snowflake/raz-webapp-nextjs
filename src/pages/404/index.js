import Header from "src/common/components/header";
import styles from "src/common/styles/NotFound.module.css";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Header />
      <main className={`row ${styles["wrapper"]}`}>
        <div className={`col-lg-8 ${styles["wrapper-404"]}`}>
          <p className={styles.title}>404</p>
          <p className={styles.message}>Page cannot be found!</p>
          <p className={styles.description}>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissi
          </p>
          <div className={styles["wrapper-homepage"]}>
            <span className={styles["line"]}></span>
            <Link href="/" passHref>
              <a className={styles["homepage"]}>BACK TO HOMEPAGE</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={styles["circle"]}></div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
