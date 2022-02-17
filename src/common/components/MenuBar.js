import styles from "src/common/styles/MenuBar.module.css";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function MenuBar() {
  const router = useRouter();
  
  return (
    <ul className={styles["wrapper-menu"]}>
      <li className={styles["menu-item"]}>
        <Link href="/seller" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller"
                ? styles["active"]
                : styles["menu-link"]
            }>
            Profile
          </a>
        </Link>
      </li>

      <li className={styles["menu-item"]}>
        My Product <i className="bi bi-caret-down-fill"></i>
      </li>

      <li className={styles["menu-item"]}>
        <Link href="/seller/add-product" className={styles["menu-item"]}>
          <a
            className={
              router.pathname === "/seller/add-product"
                ? styles["active"]
                : styles["menu-link"]
            }>
            Selling Product
          </a>
        </Link>
      </li>

      <li className={styles["menu-item"]}>
        My Order <i className="bi bi-caret-down-fill"></i>
      </li>
    </ul>
  );
}

export default MenuBar;
