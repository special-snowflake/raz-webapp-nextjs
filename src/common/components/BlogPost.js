import styles from "src/common/styles/BLogPost.module.css";
import Link from "next/link";
import Router from "next/router";
import Card from "src/common/components/CardProduct";

export default () => (
  <>
    <section className={styles.wrapper}>
      <div className={styles.slider}>
        <Link href="#slide-1" scroll={false}
        className={styles.sliderBtn}>
          <a>1</a>
        </Link>
        <Link href="#slide-2" scroll={false}>
          <a>2</a>
        </Link>
        <Link href="#slide-3" scroll={false}>
          <a>3</a>
        </Link>
        <Link href="#slide-4" scroll={false}>
          <a>4</a>
        </Link>
        <Link href="#slide-5" scroll={false}>
          <a>5</a>
        </Link>

        <div className={styles.slides}>
          <div name="slide-1" id="slide-1">
            <Card />
          </div>
          <div name="slide-2" id="slide-2">
            <Card />
          </div>
          <div id="slide-3">
            {" "}
            <Card />
          </div>
          <div id="slide-4">
            {" "}
            <Card />
          </div>
          <div id="slide-5">
            {" "}
            <Card />
          </div>
        </div>
      </div>
    </section>
  </>
);
