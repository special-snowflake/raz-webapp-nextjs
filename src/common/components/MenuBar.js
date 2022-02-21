import styles from "src/common/styles/MenuBar.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
// import MyproductTemp from "src/common/components/MyproductTemp";

function MenuBar() {
  const router = useRouter();
  const [selects, setSelect] = useState();

  return (
    <ul className={styles["wrapper-menu"]}>
      <li className={styles["menu-item"]}>
        <Link href="/seller" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller"
                ? styles["active"]
                : styles["menu-link"]
            }
          >
            Profile
          </a>
        </Link>
      </li>

      <li className={styles["menu-item"]}>
        <Link href="/seller/product" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller/product"
                ? styles["active"]
                : styles["menu-link"]
            }
          >
            My Product
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <div className={styles["dropdown-content"]}>
                <Link href="/" passHref>All</Link>
                <Link href="/" passHref>Archive</Link>
                <Link href="/" passHref>Sold Out</Link>
              </div>
            </div>
          </a>
        </Link>
      </li>
      {/* <li className={styles["menu-item"]}>
        My Product <i className="bi bi-caret-down-fill"></i>
        
      </li> */}

      <li className={styles["menu-item"]}>
        <Link href="/seller/add-product" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller/add-product"
                ? styles["active"]
                : styles["menu-link"]
            }
          >
            Selling Product
          </a>
        </Link>
      </li>

      <li className={styles["menu-item"]}>
        <Link href="/seller/order" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller/order"
                ? styles["active"]
                : styles["menu-link"]
            }
          >
            My Order
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <div className={styles["dropdown-content"]}>
                <Link href="/" passHref>All</Link>
                <Link href="/" passHref>Get Paid</Link>
                <Link href="/" passHref>Processed</Link>
                <Link href="/" passHref>Sent</Link>
                <Link href="/" passHref>Completed</Link>
                <Link href="/" passHref>Order Cancel</Link>
              </div>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default MenuBar;
