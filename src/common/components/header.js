import styles from "src/common/styles/Header.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function Header() {
  const user = useSelector((state) => state.auth.userData);
  const { token } = user;

  const [toggleAuth, setToggleAuth] = useState(false);

  const toggleAuthSwitch = () => {
    toggleAuth ? setToggleAuth(false) : setToggleAuth(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles["container"]}>
        <input type="checkbox" id="check" className={styles.check} />
        <div className={styles["logo-container"]}>
          <h3>
            <Link href="/" passHref>
              <a className={styles.logo}>
                RAZ <span>Garlic</span>
              </a>
            </Link>
          </h3>
        </div>

        <div className={styles["nav-btn"]}>
          <div className={styles["nav-links"]}>
            <ul className={styles["wrapper-ul"]}>
              <li className={styles["nav-link"]}>
                <Link href="/" className={styles["tag-a"]}>
                  <a className={styles["tag-a"]}>HOME</a>
                </Link>
              </li>

              <li className={styles["nav-link"]}>
                <a href="#" className={styles["tag-a"]}>
                  PAGES{" "}
                  <i className={`bi bi-caret-down-fill ${styles.icon}`}></i>
                </a>
                <div className={styles.dropdown}>
                  <ul className={styles["wrapper-ul"]}>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/about" passHref>
                        <a className={styles["tag-a-menu"]}>About Us</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/contact" passHref>
                        <a className={styles["tag-a-menu"]}>Contact Us</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        Comming Soon <i className="bi bi-caret-down-fill"></i>
                      </a>
                      <div
                        className={styles["dropdown"]}
                        style={{
                          position: "absolute",
                          left: "95%",
                          top: "0",
                          paddingLeft: "0.3rem",
                          cursor: "pointer",
                          transform: "translateX(10px)",
                        }}
                      >
                        <ul className={styles["wrapper-ul"]}>
                          <li className={styles["dropdown-link"]}>
                            <a href="#" className={styles["tag-a-menu"]}>
                              Comming Soon 001
                            </a>
                          </li>
                          <li className={styles["dropdown-link"]}>
                            <a href="#" className={styles["tag-a-menu"]}>
                              Comming Soon 002
                            </a>
                          </li>

                          <div className={styles.arrow}></div>
                        </ul>
                      </div>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/404">
                        <a className={styles["tag-a-menu"]}>404 Page</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/faq">
                        <a className={styles["tag-a-menu"]}>FAQ Page</a>
                      </Link>
                    </li>
                    <div className={styles.arrow}></div>
                  </ul>
                </div>
              </li>

              <li className={styles["nav-link"]}>
                <a href="#" className={styles["tag-a"]}>
                  SHOP <i className="bi bi-caret-down-fill"></i>
                </a>
                <div className={styles.dropdown}>
                  <ul className={styles["wrapper-ul"]}>
                    <li className={styles["dropdown-link"]}>
                      <a href="/cart" className={styles["tag-a-menu"]}>
                        Order Page
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="/cart" className={styles["tag-a-menu"]}>
                        Shopping Cart
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="/cart/checkout" className={styles["tag-a-menu"]}>
                        Check Out
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="/profile" className={styles["tag-a-menu"]}>
                        My Account
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        Order Tracking
                      </a>
                    </li>
                    <div className={styles.arrow}></div>
                  </ul>
                </div>
              </li>

              <li className={styles["nav-link"]}>
                <Link href="/blog" passHref>
                  <a className={styles["tag-a"]}>BLOG</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles["wrapper-icon"]}>
            <i className={`bi bi-search ${styles.icon2}`}></i>
            {/* search kosong */}
            <Link href="/favorite" passHref>
              <i className={`bi bi-heart ${styles.icon2}`}></i>
            </Link>
            <Link href="/cart" passHref>
              <i className={`bi bi-cart ${styles.icon2}`}></i>
            </Link>
            <div
              className={styles["wrapper-btn-menu"]}
              onClick={toggleAuthSwitch}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={styles["hamburger-menu-container"]}>
          <div className={styles["hamburger-menu"]}>
            <div className={styles.div}></div>
          </div>
        </div>
      </div>

      {token ? (
        <MenuLogin show={toggleAuth} />
      ) : (
        <ul
          className={
            !toggleAuth ? styles["wrapper-menu"] : styles["wrapper-menu-show"]
          }
        >
          <li>
            <Link href="/auth">
              <a className={styles["tag-a-menu"]}>Login</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/chat">
              <a className={styles["tag-a-menu"]}>Chat</a>
            </Link>{" "}
          </li>

          <li>
            <Link href="/notification">
              <a className={styles["tag-a-menu"]}>Notification</a>
            </Link>{" "}
          </li>
        </ul>
      )}
    </header>
  );
}

function MenuLogin({ show }) {
  return (
    <ul
      className={!show ? styles["wrapper-menu"] : styles["wrapper-menu-show"]}
    >
      <li>
        <Link href="/seller" passHref>
          <a className={styles["tag-a-menu"]}>Profile</a>
        </Link>
      </li>
      <li>
        <Link href="/chat" passHref>
          <a className={styles["tag-a-menu"]}>Chat</a>
        </Link>
      </li>
      <li>
        <Link href="/notification" passHref>
          <a className={styles["tag-a-menu"]}>Notification</a>
        </Link>
      </li>
      <li>
        <p className={styles["tag-a-menu"]}>Logout</p>
      </li>
    </ul>
  );
}

export default Header;
