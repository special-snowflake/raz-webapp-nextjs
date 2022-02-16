import styles from "src/common/styles/Header.module.css";
import { useState } from "react";

function Header() {
  const [login, setLogin] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(false);

  const toggleAuthSwitch = () => {
    toggleAuth ? setToggleAuth(false) : setToggleAuth(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles["container"]}>
        <input type="checkbox" id="check" className={styles.check} />
        <div className={styles["logo-container"]}>
          <h3 className={styles.logo}>
            RAZ <span>Garlic</span>
          </h3>
        </div>

        <div className={styles["nav-btn"]}>
          <div className={styles["nav-links"]}>
            <ul className={styles["wrapper-ul"]}>
              <li className={styles["nav-link"]}>
                <a href="#" className={styles["tag-a"]}>
                  Home
                </a>
              </li>

              <li className={styles["nav-link"]}>
                <a href="#" className={styles["tag-a"]}>
                  PAGES{" "}
                  <i className={`bi bi-caret-down-fill ${styles.icon}`}></i>
                </a>
                <div className={styles.dropdown}>
                  <ul className={styles["wrapper-ul"]}>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        About Us
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        Contact Us
                      </a>
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
                          transform: "translateX(10px)"
                        }}>
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
                      <a href="#" className={styles["tag-a-menu"]}>
                        404 Page
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        FAQ Page
                      </a>
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
                      <a href="#" className={styles["tag-a-menu"]}>
                        Order Page
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        Shopping Cart
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
                        Check Out
                      </a>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <a href="#" className={styles["tag-a-menu"]}>
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
                <a href="#" className={styles["tag-a"]}>
                  BLOG
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["wrapper-icon"]}>
            <i className={`bi bi-search ${styles.icon2}`}></i>
            <i className={`bi bi-heart ${styles.icon2}`}></i>
            <i className={`bi bi-cart ${styles.icon2}`}></i>
            <div
              className={styles["wrapper-btn-menu"]}
              onClick={toggleAuthSwitch}>
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

      {login ? (
        <MenuLogin show={toggleAuth} />
      ) : (
        <ul
          className={
            !toggleAuth ? styles["wrapper-menu"] : styles["wrapper-menu-show"]
          }>
          <li>Login</li>
          <li>Register</li>
          <li>Chat</li>
          <li>Notification</li>
        </ul>
      )}
    </header>
  );
}

function MenuLogin({ show }) {
  return (
    <ul
      className={!show ? styles["wrapper-menu"] : styles["wrapper-menu-show"]}>
      <li>Profile</li>
      <li>Chat</li>
      <li>Notification</li>
      <li>Logout</li>
    </ul>
  );
}

export default Header;
