import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";
import styles from "src/common/styles/SellerAddProduct.module.css";
import addImage from "src/assets/addMoreImage.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function AddProduct() {
  const inputFileRef = React.createRef();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const clickImage = () => {
    inputFileRef.current.click();
  };

  const handleUpload = (e) => {
    if (e.target.files.length > 3)
      return toast.warn("Maximum input 3 photos", {
        position: "bottom-center",
        theme: "dark",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

    if (e.target.files) {
      console.log(e.target.files);
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImage) => prevImage.concat(fileArray));

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
    console.log("FILE-UPLOAD", e.target.files);
  };

  const renderPhotos = (photos) => {
    return photos.map((photo, index) => {
      return (
        <img
          src={photo}
          alt="photo-product"
          key={index}
          className={styles["input-image"]}
        />
      );
    });
  };

  return (
    <>
      <Header />
      <PageTitle
        title="Selling Product"
        subTitle="See your notifications for the latest updates"
      />
      <MenuBar />

      <main className={styles.container}>
        <div className={styles["wrapper-main"]}>
          <p className={styles.title} style={{ paddingTop: "50px" }}>
            Inventory
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name of goods *"
            className={styles["inputSmal"]}
          />
          <input
            type="text"
            name="description"
            placeholder="Description Product *"
            className={styles["inputBig"]}
            style={{ marginBottom: "100px" }}
          />
          <p className={styles.title}>Item Details</p>
          <input
            type="text"
            name="price"
            placeholder="Unit price *"
            className={styles["inputSmal"]}
          />
          <input
            type="text"
            name="stock"
            placeholder="Unit Stock *"
            className={styles["inputSmal"]}
          />
          {/* STOCK CONDITION */}
          <label
            className={styles["title-stock"]}
            style={{ marginTop: "30px", marginBottom: "10px" }}>
            Stock Condition
          </label>
          <div className={styles["wrapper-radio"]}>
            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="new"
                name="stock"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="new">
                New Product
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="second"
                name="stock"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="second">
                Second Product
              </label>
            </div>
          </div>

          {/* BRANDS */}
          <label
            className={styles["title-stock"]}
            style={{ marginBottom: "10px" }}>
            Brands
          </label>
          <div className={styles["wrapper-radio"]}>
            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="ikea"
                name="brands"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="ikea">
                IKEA
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="informa"
                name="brands"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="informa">
                INFORMA
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="north"
                name="brands"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="north">
                NORTH OXFORD
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="sweet"
                name="brands"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="sweet">
                SWEET HOUSE
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="mr"
                name="brands"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="mr">
                MR. POPPIN 1929
              </label>
            </div>
          </div>

          {/* COLORS */}
          <label
            className={styles["title-stock"]}
            style={{ marginBottom: "10px" }}>
            COLORS
          </label>
          <div className={styles["wrapper-radio"]}>
            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="black"
                name="colors"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="black">
                BLACK
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="white"
                name="colors"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="white">
                WHITE
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="yellow"
                name="colors"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="yellow">
                YELLOW
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="red"
                name="colors"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="red">
                RED
              </label>
            </div>

            <div className={styles["radio-item"]}>
              <input
                type="radio"
                id="blue"
                name="colors"
                className={styles["radio"]}
              />
              <label className={styles["label-radio"]} htmlFor="blue">
                BLUE
              </label>
            </div>
          </div>

          {/* CATEGORY */}
          <label
            className={styles["title-stock"]}
            style={{ marginBottom: "10px" }}>
            CATEGORY
          </label>
          <div className={styles["wrapper-check"]}>
            <input type="checkbox" id="sofa" name="sofa" value="1" />
            <label htmlFor="sofa" className={styles["checkbox-label"]}>
              SOFA
            </label>

            <input type="checkbox" id="table" name="table" value="1" />
            <label htmlFor="table" className={styles["checkbox-label"]}>
              TABLE
            </label>

            <input type="checkbox" id="interior" name="interior" value="1" />
            <label htmlFor="interior" className={styles["checkbox-label"]}>
              INTERIOR
            </label>

            <input type="checkbox" id="exterior" name="exterior" value="1" />
            <label htmlFor="exterior" className={styles["checkbox-label"]}>
              EXTERIOR
            </label>

            <input type="checkbox" id="Furniture" name="Furniture" value="1" />
            <label htmlFor="Furniture" className={styles["checkbox-label"]}>
              FURNITURE
            </label>
          </div>

          <p className={styles.title}>Photo of Goods</p>
          <div className={styles["main-image"]}>
            {renderPhotos(selectedFiles)}
            <input
              type="file"
              id="file"
              multiple
              hidden
              ref={inputFileRef}
              onChange={handleUpload}
            />
            <Image
              src={addImage}
              alt="add-image"
              className={styles["input-image"]}
              onClick={clickImage}
            />
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <button className={styles["btn-sell"]}>Sell Product</button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AddProduct;
