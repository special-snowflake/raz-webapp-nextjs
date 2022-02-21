import styles from "src/common/styles/CardRelated.module.css";
import Image from "next/image";
import one from "src/assets/b_OKITO-PLY-DINING-Chair-2.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function CardRelated({ data }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15
    }
  });
  console.log("DATA", data);
  return (
    <div className="row d-flex justify-content-center mb-5">
      <div className="col-10 mb-5">
        <p className={styles.title}>Related Product</p>
      </div>
      <div className={`${styles["wrapper-card"]} keen-slider`} ref={sliderRef}>
        {data.map((item, index) => {
          return (
            <div className={`keen-slider__slide   ${styles.card}`} key={index}>
              <Image src={one} alt={one} width="800" layout="responsive" />
              <div className={styles["wrapper-text"]}>
                <p>nama Product</p>
                <p>Harga Product</p>
              </div>
            </div>
          );
        })}

        {/* <div className={`keen-slider__slide   ${styles.card}`}>
          <Image src={one} alt={one} width="800" layout="responsive" />
          <div className={styles["wrapper-text"]}>
            <p>nama Product</p>
            <p>Harga Product</p>
          </div>
        </div>
        <div className={`keen-slider__slide   ${styles.card}`}>
          <Image src={one} alt={one} width="800" layout="responsive" />
          <div className={styles["wrapper-text"]}>
            <p>nama Product</p>
            <p>Harga Product</p>
          </div>
        </div>
        <div className={`keen-slider__slide   ${styles.card}`}>
          <Image src={one} alt={one} width="800" layout="responsive" />
          <div className={styles["wrapper-text"]}>
            <p>nama Product</p>
            <p>Harga Product</p>
          </div>
        </div>
        <div className={`keen-slider__slide   ${styles.card}`}>
          <Image src={one} alt={one} width="800" layout="responsive" />
          <div className={styles["wrapper-text"]}>
            <p>nama Product</p>
            <p>Harga Product</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CardRelated;
