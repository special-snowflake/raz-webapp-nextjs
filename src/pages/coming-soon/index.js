import styles from "src/common/styles/Coming.module.css";
import Header from "src/common/components/header";

function ComingSoon() {
  return (
    <>
      <Header />

      <main className={styles["main"]}>
        <h1>HALAMAN COMING SOON</h1>
      </main>
    </>
  );
}

export default ComingSoon;
