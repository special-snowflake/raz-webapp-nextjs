import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "src/common/styles/SideBar.module.css";

function SideBar(data) {
  const [filterMin, setFilterMin] = useState(0);
  const [filterMax, setFilterMax] = useState(0);

  function log(value) {
    // console.log(value);
    setFilterMin(value[0]);
    setFilterMax(value[1]);
  }

  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["category-wrapper"]}>
        <p className={styles["section-title"]}>Category</p>
        <div className={styles["category-list"]}>
          <Link href="">
            <a className={styles["category-item"]}>
              <p>Category2</p>
              <p>qty</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles["category-item"]}>
              <p>Category3</p>
              <p>qty</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles["category-item"]}>
              <p>Category3</p>
              <p>qty</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles["category-item"]}>
              <p>Category4</p>
              <p>qty</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles["category-item"]}>
              <p>Category5</p>
              <p>qty</p>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["price-wrapper"]}>
        <p className={styles["section-title"]}>Price</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles["range-slider"]}>
            <p
              className={styles["min-max"]}
            >{`Min: $${filterMin} - Max: $${filterMax}`}</p>
            <Range
              allowCross={false}
              min={0}
              max={10000}
              defaultValue={[0, 2000]}
              onChange={log}
            />
          </div>
          <button type="submit" className={`${styles["filter-button"]}`}>
            Filter
          </button>
        </form>
      </div>
      <div className={styles["brands-wrapper"]}>
        <p className={styles["section-title"]}>Brands</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles["brand-item"]}>
            <input type="checkbox" id="ikewa" name="ikewa" />
            <label htmlFor="ikewa">IKEWA</label>
          </div>
          <div className={styles["brand-item"]}>
            <input type="checkbox" id="Informan" name="Informan" />
            <label htmlFor="Informan">Informan</label>
          </div>
          <div className={styles["brand-item"]}>
            <input type="checkbox" id="aceng" name="aceng" />
            <label htmlFor="aceng">Aceng Hardware</label>
          </div>
        </form>
      </div>
      <div className={styles["colors-wrapper"]}>
        <p className={styles["section-title"]}>Colors</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["blue"]} name="blue" />
          </div>
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["djon"]} name="djon" />
          </div>
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["red"]} name="red" />
          </div>
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["green"]} name="green" />
          </div>
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["black"]} name="black" />
          </div>
          <div className={styles["color-item-container"]}>
            <input type="checkbox" id={styles["mustard"]} name="mustard" />
          </div>
        </form>
      </div>
    </aside>
  );
}

export default SideBar;
