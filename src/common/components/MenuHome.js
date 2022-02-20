import styles from "src/common/styles/MenuHome.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MenuHome({ isNew, isTrend, isSale, isActive }) {
  const router = useRouter();
  console.log("AKTIF", isActive);
  return (
    <ul className={styles["wrapper-menu"]}>
      <li className={styles["menu-item"]}>
        <p
          className={
            !isActive.newActive ? styles["menu-link"] : styles["active"]
          }
          onClick={() => {
            isNew();
          }}>
          New Products
        </p>
      </li>
      <li className={styles["menu-item"]}>
        <p
          className={
            isActive.trendActive ? styles["active"] : styles["menu-link"]
          }
          onClick={() => {
            isTrend();
          }}>
          Hot trend
        </p>
      </li>
      <li className={styles["menu-item"]}>
        <p
          className={
            isActive.saleActive ? styles["active"] : styles["menu-link"]
          }
          onClick={() => {
            isSale();
          }}>
          Sale off
        </p>
      </li>
    </ul>
  );
}

export default MenuHome;
