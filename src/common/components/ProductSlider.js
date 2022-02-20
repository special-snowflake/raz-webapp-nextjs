import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import sofa from "src/assets/sofa.png";
import one from "src/assets/b_OKITO-PLY-DINING-Chair-2.png";
import two from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import three from "src/assets/b_OKITO-PLY-DINING-Chair-31.png";
import styles from "src/common/styles/ProductDetail.module.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div
        className={`${styles.galleryImageWrapper} row align-items-center justify-content-center`}
      >
        <div
          ref={sliderRef}
          className={`${styles.mainImg} keen-slider col-8 col-md-8 col-lg-4`}
        >
          <div className="keen-slider__slide number-slide1">
            <Image
              src={one}
              height={400}
              objectFit="scale-down"
              alt="product"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              src={one}
              height={400}
              objectFit="scale-down"
              alt="product"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image
              src={two}
              height={400}
              objectFit="scale-down"
              alt="product"
            />
          </div>
          <div className="keen-slider__slide number-slide4">
            <Image
              src={three}
              height={400}
              objectFit="scale-down"
              alt="product"
            />
          </div>
        </div>

        <div
          ref={thumbnailRef}
          className="keen-slider thumbnail"
          style={{
            position: " absolute",
            top: "21vh",
            left: "3vw",
            float: "left",
            display: "flex",
            width: "35vw",
            textAlign: "left",
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "center",
            margin: "0",
            padding: "2vw",
            height: "auto",
            display: "list-item",
          }}
        >
          <div
            className="keen-slider__slide number-slide1"
            style={{
              margin: "auto 30px",
            }}
          >
            <Image src={one} 
            width={200} height={200}
            />
          </div>
          <div
            className="keen-slider__slide number-slide2 "
            style={{
              margin: "auto 20px",
            }}
          >
            <Image src={two} 
            width={200} height={200}/>
          </div>
          <div
            className="keen-slider__slide number-slide3 "
            style={{
              margin: "auto 10px",
            }}
          >
            <Image src={three}
            width={200} height={200} />
          </div>
        </div>
      </div>
    </>
  );
}
