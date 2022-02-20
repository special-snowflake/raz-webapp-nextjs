import styles from "src/common/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles["wrapper-footer"]}>
      <div className="row">
        <div className="col-lg-5 ">
          <h1 className={styles["title-brand"]}>RAZ GARLIC</h1>
          <p className={styles["desc-brand"]}>
            Shopping is easier and more economical, get cash back up to 100% at
            Raz Garlic.
            <br /> Shop to your heart's content without having to worry about
            shipping costs, Check Raz garlic now.
          </p>
          <div className={styles["wrapper-icon"]}>
            <i className={`bi bi-facebook ${styles["icon"]}`}></i>
            <i className={`bi bi-twitter ${styles["icon"]}`}></i>
            <i className={`bi bi-youtube ${styles["icon"]}`}></i>
            <i className={`bi bi-dribbble ${styles["icon"]}`}></i>
          </div>
        </div>
        <div className="col-lg-2">
          <p className={styles["title"]}>COMPANY</p>
          <ul className={styles.ul}>
            <li className={styles.li}>ABOUT US</li>
            <li className={styles.li}>HELP CENTER</li>
            <li className={styles.li}>LICENSES</li>
            <li className={styles.li}>MARKET API</li>
            <li className={styles.li}>SITE MAP</li>
          </ul>
        </div>
        <div className="col-lg-2">
          <p className={styles["title"]}>USERFUL</p>
          <ul className={styles.ul}>
            <li className={styles.li}>THE COLLECTIONS</li>
            <li className={styles.li}>SIZE GUIDE</li>
            <li className={styles.li}>LOOKBOOK</li>
            <li className={styles.li}>INSTAGRAM SHOP</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
          <p className={styles["title"]}>CONTACT US</p>
          <div className="row">
            <div className={`col-lg-3 ${styles["main-contact"]}`}>
              <div className={styles["wrapper-icon-contact"]}>
                <i className={`bi bi-envelope ${styles["icon"]}`}></i>
                <i className={`bi bi-telephone ${styles["icon"]}`}></i>
                <i className={`bi bi-clock ${styles["icon"]} `}></i>
              </div>
            </div>
            <div className="col-lg-9 col-sm-1 d-flex flex-column justify-content-between mt-4">
              <p className={styles["title-contact"]}>raz-garlic@email.com</p>
              <p className={styles["title-contact"]}>+62 8121322210</p>
              <p className={styles["title-contact"]}>
                9:00am - 19:00pm <br />
                Monday - Sunday
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
