import styles from "src/common/styles/Header.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { logoutAction } from "src/store/actions/auth";
import Router, { useRouter } from "next/router";
import Logout from "./Logout";
import { useEffect } from "react";

import { getUserFavorite } from "src/modules/utils/favorite";

function Header() {
  const user = useSelector((state) => state.auth.userData);
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showLogout, setShowLogout] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(false);
  const [hoverIconSearch, setHovericonSearch] = useState(false);
  const [hoverIconLove, setHovericonLove] = useState(false);
  const [hoverIconCart, setHovericonCart] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [favoriteCounter, setFavoriteCounter] = useState(0);

  const callbackLogout = (isShow) => {
    setShowLogout(isShow);
  };

  const toggleAuthSwitch = () => {
    toggleAuth ? setToggleAuth(false) : setToggleAuth(true);
  };

  const logoutHandler = () => {
    dispatch(logoutAction(user.token));
  };

  const toggleSearch = () => {
    onSearch ? setOnSearch(false) : setOnSearch(true);
  };
  const handleClickedLogout = () => {
    setShowLogout(true);
  };

  const searchProducts = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    Router.push({
      pathname: "/product",
      query: {
        search
      }
    });
  };

  useEffect(() => {
    user.token && user.roles == 2 &&
      getUserFavorite(user.token, 1)
        .then((res) => {
          setFavoriteCounter(res.data.meta.totalData);
        })
        .catch((err) => console.log({ ...err }));
  }, []);

  return (
    <header className={styles.header}>
      <Logout isShow={showLogout} callbackShow={callbackLogout} />
      <div className={styles["container"]}>
        <input type="checkbox" id="check" className={styles.check} />
        <div className={styles["logo-container"]}>
          <h3>
            <Link href="/" passHref>
              <a className={styles.logo}>
                RAZ
                {/* <span>Garlic</span> */}
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
                      <a href="/comming-soon" className={styles["tag-a-menu"]}>
                        Comming Soon
                      </a>
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
                      <Link href="/cart" passHref>
                        <a className={styles["tag-a-menu"]}>Order Page</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/cart" passHref>
                        <a className={styles["tag-a-menu"]}>Shooping Cart</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/cart/checkout" passHref>
                        <a className={styles["tag-a-menu"]}>Check Out</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/profile" passHref>
                        <a className={styles["tag-a-menu"]}>My Account</a>
                      </Link>
                    </li>
                    <li className={styles["dropdown-link"]}>
                      <Link href="/tracking" passHref>
                        <a className={styles["tag-a-menu"]}>Order Tracking</a>
                      </Link>
                    </li>
                    <div className={styles.arrow}></div>
                  </ul>
                  {/* <Shop/> */}
                </div>
              </li>

              <li className={styles["nav-link"]}>
                <Link href="/blog" passHref>
                  <a className={styles["tag-a"]}>BLOG</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={` ${styles["container-icon"]}`}>
            <div className={styles["wrapper-icon"]}>
              <i
                className={
                  hoverIconSearch || onSearch
                    ? `bi bi-search-heart ${styles.icon2}`
                    : `bi bi-search ${styles.icon2}`
                }
                onMouseEnter={() => {
                  setHovericonSearch(true);
                }}
                onMouseLeave={() => {
                  setHovericonSearch(false);
                }}
                onClick={toggleSearch}></i>
            </div>
            <div className={styles["wrapper-icon"]}>
              <div className={styles["wrapper-notif-show"]}>
                <p className={styles["notif"]}>{favoriteCounter}</p>
              </div>
              <Link href="/favorite" passHref>
                <i
                  className={
                    hoverIconLove
                      ? `bi bi-heart-fill ${styles.icon2}`
                      : `bi bi-heart ${styles.icon2}`
                  }
                  onMouseEnter={() => {
                    setHovericonLove(true);
                  }}
                  onMouseLeave={() => {
                    setHovericonLove(false);
                  }}></i>
              </Link>
            </div>

            <div className={styles["wrapper-icon"]}>
              <div
                className={
                  cartProducts.length > 0
                    ? styles["wrapper-notif-show"]
                    : styles["wrapper-notif"]
                }>
                <p className={styles["notif"]}>{cartProducts.length}</p>
              </div>
              <Link href="/cart" passHref>
                <i
                  className={
                    hoverIconCart
                      ? `bi bi-cart-fill ${styles.icon2}`
                      : `bi bi-cart ${styles.icon2}`
                  }
                  onMouseEnter={() => {
                    setHovericonCart(true);
                  }}
                  onMouseLeave={() => {
                    setHovericonCart(false);
                  }}></i>
              </Link>
            </div>
            <div className={styles["wrapper-icon"]}>
              <div
                className={styles["wrapper-btn-menu"]}
                onClick={toggleAuthSwitch}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["hamburger-menu-container"]}>
          <div className={styles["hamburger-menu"]}>
            <div className={styles.div}></div>
          </div>
        </div>
      </div>
      {user.token ? (
        <MenuLogin
          show={toggleAuth}
          logout={logoutHandler}
          user={user}
          handleClickedLogout={handleClickedLogout}
        />
      ) : (
        <ul
          className={
            !toggleAuth ? styles["wrapper-menu"] : styles["wrapper-menu-show"]
          }>
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
      <form
        className={onSearch ? styles["wrapper-input-search"] : null}
        onSubmit={searchProducts}>
        <input
          type="text"
          name="search"
          className={
            !onSearch ? styles["input-search"] : styles["input-search-show"]
          }
          placeholder="Type here to search..."
        />
      </form>
    </header>
  );
}

function MenuLogin({ show, handleClickedLogout, user }) {
  return (
    <ul
      className={!show ? styles["wrapper-menu"] : styles["wrapper-menu-show"]}>
      <li>
        {user.roles === "1" ? (
          <Link href="/seller" passHref>
            <a className={styles["tag-a-menu"]}>Profile</a>
          </Link>
        ) : (
          <Link href="/profile" passHref>
            <a className={styles["tag-a-menu"]}>Profile</a>
          </Link>
        )}
      </li>
      <li>
        <Link href="/chat" passHref>
          <a className={styles["tag-a-menu"]}>Chat</a>
        </Link>
      </li>
      <li>
        <Link href="/history" passHref>
          <a className={styles["tag-a-menu"]}>History</a>
        </Link>
      </li>
      <li>
        <Link href="/notification" passHref>
          <a className={styles["tag-a-menu"]}>Notification</a>
        </Link>
      </li>
      <li>
        <p
          onClick={() => {
            handleClickedLogout();
          }}
          className={styles["tag-a-menu"]}>
          Logout
        </p>
      </li>
    </ul>
  );
}
export default Header;
