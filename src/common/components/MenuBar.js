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
                <Link href="/seller/product?filter=all" passHref>All</Link>
                <Link href="/seller/product?filter=archieve" passHref>Archive</Link>
                <Link href="/seller/product?filter=sold out" passHref>Sold Out</Link>
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
                <Link href="/seller/order" passHref>All</Link>
                <Link href="/seller/order?status=paid" passHref>Paid</Link>
                <Link href="/seller/order?status=processed" passHref>Processed</Link>
                <Link href="/seller/order?status=sent" passHref>Sent</Link>
                <Link href="/seller/order?status=completed" passHref>Completed</Link>
              </div>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default MenuBar;
