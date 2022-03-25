import styles from "src/common/styles/Coming.module.css";
import Header from "src/common/components/HeaderComming";

function ComingSoon() {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <p className={styles["title"]}>
          We’re Building <br />
          Something New
        </p>
        <div className={styles["wrapper-date"]}>
          <div className={styles["wrapper"]}>
            <p className={styles["number"]}>09</p>
            <p className={styles["title-date"]}>Days</p>
          </div>
          <div className={styles["wrapper"]}>
            <p className={styles["number"]}>18</p>
            <p className={styles["title-date"]}>Hours</p>
          </div>

          <div className={styles["wrapper"]}>
            <p className={styles["number"]}>37</p>
            <p className={styles["title-date"]}>Mins</p>
          </div>

          <div className={styles["wrapper"]}>
            <p className={styles["number"]}>56</p>
            <p className={styles["title-date"]}>Secs</p>
          </div>
        </div>
        <div className={styles["wrapper-input"]}>
          <input placeholder="Your Email" className={styles["input"]} />
          <button className={styles["btn-sub"]}>Subscribe</button>
        </div>

        <div className={styles["footer"]}>
          <div className={styles["wrapper-title-footer"]}>
            <p className={styles["title-company"]}>RAZ</p>
            <p className={styles["desc-company"]}>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
              Quisque a nunc vel diam auctor commodo.
            </p>
          </div>

          <div className={styles["wrapper-icon"]}>
            <div className={styles["icon"]}>
              <i class="bi bi-facebook"></i>
            </div>

            <div className={styles["icon"]}>
              <i class="bi bi-twitter"></i>
            </div>

            <div className={styles["icon"]}>
              <i class="bi bi-youtube"></i>
            </div>

            <div className={styles["icon"]}>
              <i class="bi bi-dribbble"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComingSoon;
