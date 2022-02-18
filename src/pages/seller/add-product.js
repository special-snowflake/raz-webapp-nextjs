import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import MenuBar from 'src/common/components/MenuBar';
import LoadingBox from 'src/common/components/LoadingBox';
import ImageBoxProduct from 'src/common/components/ImageBoxProduct';

import {getCategory} from 'src/modules/utils/category';
import {getBrands} from 'src/modules/utils/brand';

import styles from 'src/common/styles/SellerAddProduct.module.css';
import {toast} from 'react-toastify';
import addImage from 'src/assets/addMoreImage.png';

function AddProduct() {
  const inputFileRef = React.createRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [category, setCategory] = useState(null);
  const [brands, setBrands] = useState(null);
  const [categoryChecked, setCategoryChecked] = useState([]);

  const clickImage = () => {
    inputFileRef.current.click();
  };

  const handleUpload = (e) => {
    if (e.target.files.length + selectedFiles.length > 3)
      return toast.warn('Maximum input 3 photos');

    if (e.target.files) {
      const images = [e.target.files];
      images.forEach((element) => {
        setSelectedImages([...selectedImages, ...element]);
      });
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedFiles((prevImage) => prevImage.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const getListCategory = () => {
    getCategory()
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getListBrand = () => {
    getBrands()
      .then((res) => {
        setBrands(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showBrands = () => {
    const elements = [];
    brands.forEach((element, idx) => {
      elements.push(
        <React.Fragment key={`brand-${idx}`}>
          <div className={styles['radio-item']}>
            <input
              type='radio'
              id={element.brand}
              name='idBrand'
              defaultValue={element.id}
              className={styles['radio']}
            />
            <label className={styles['label-radio']} htmlFor={element.brand}>
              {element.brand}
            </label>
          </div>
        </React.Fragment>,
      );
    });
    return elements;
  };

  const showCategory = () => {
    const elements = [];
    category.forEach((element, idx) => {
      elements.push(
        <React.Fragment key={`category-${idx}`}>
          <input
            type='checkbox'
            id={element.category}
            name='category'
            defaultValue={element.id}
            onChange={onChangeCategory}
            className={styles.inputCheckBox}
          />
          <label
            htmlFor={element.category}
            className={styles['checkbox-label']}>
            {element.category}
          </label>
        </React.Fragment>,
      );
    });
    return elements;
  };

  const onChangeCategory = (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked, e.target.value);
    if (isChecked) {
      setCategoryChecked([...categoryChecked, e.target.value]);
    } else {
      const index = categoryChecked.indexOf(e.target.value);
      const array = categoryChecked;
      array.splice(index);
      setCategoryChecked([...array]);
    }
  };

  useEffect(() => {
    getListBrand();
    getListCategory();
  }, []);

  const deleteImageProduct = (index) => {
    let array = [...selectedFiles];
    array.splice(index, 1);
    setSelectedFiles(array);
    let arrayImg = [...selectedImages];
    arrayImg.splice(index, 1);
    setSelectedImages(arrayImg);
  };

  const renderPhotos = (photos) => {
    return photos.map((photo, index) => {
      return (
        <React.Fragment key={`image-product ${index}`}>
          <div className={styles.imageWrapperAdd}>
            <button
              className={styles.deleteImageProduct}
              onClick={(e) => {
                e.preventDefault();
                deleteImageProduct(index);
              }}>
              <i className='bi bi-trash3'></i>
            </button>
            <ImageBoxProduct image={photo} />
          </div>
        </React.Fragment>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = new FormData();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const productCondition = e.target.productCondition.value;
    const color = e.target.color.value;
    const brand = e.target.idBrand.value;
    const category = categoryChecked;
    if (
      !name ||
      !description ||
      !productCondition ||
      !color ||
      !brand ||
      category.length < 1 ||
      selectedFiles.length < 1
    ) {
      return toast.warning('Please fill all the field');
    }
    selectedFiles.forEach((element) => {
      console.log(element);
    });
    body.append('name', name);
    body.append('description', description);
    body.append('productCondition', productCondition);
    body.append('color', color);
    body.append('idBrand', brand);
    body.append('idCategory', categoryChecked);
    selectedImages.forEach((element) => {
      body.append('images', element, element.name);
    });
    console.log(body);
  };
  return (
    <>
      <Header />
      <PageTitle
        title='Selling Product'
        subTitle='See your notifications for the latest updates'
      />
      <MenuBar />

      <form onSubmit={handleSubmit}>
        <main className={styles.container}>
          <div className={styles['wrapper-main']}>
            {category && brands ? (
              <>
                <p className={styles.title} style={{paddingTop: '50px'}}>
                  Inventory
                </p>
                <input
                  type='text'
                  name='name'
                  placeholder='Name of goods *'
                  className={styles['inputSmall']}
                />
                <textarea
                  name='description'
                  id='description'
                  cols='30'
                  rows='10'
                  maxLength={255}
                  placeholder='Description Product'
                  className={`${styles.textDescription} mb-5`}></textarea>
                <p className={styles.title}>Item Details</p>
                <input
                  type='text'
                  name='price'
                  placeholder='Unit price *'
                  className={styles['inputSmall']}
                />
                <input
                  type='number'
                  name='stock'
                  placeholder='Unit Stock *'
                  className={styles['inputSmall']}
                />
                {/* STOCK CONDITION */}
                <label
                  className={styles['title-stock']}
                  style={{marginTop: '30px', marginBottom: '10px'}}>
                  PRODUCT CONDITION
                </label>
                <div className={styles['wrapper-radio']}>
                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='new'
                      name='productCondition'
                      defaultValue='new'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='new'>
                      New Product
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='used'
                      name='productCondition'
                      defaultValue='used'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='used'>
                      Used Product
                    </label>
                  </div>
                </div>

                {/* BRANDS */}
                <label
                  className={styles['title-stock']}
                  style={{marginBottom: '10px'}}>
                  Brands
                </label>
                <div className={styles['wrapper-radio']}>{showBrands()}</div>

                {/* COLORS */}
                <label
                  className={styles['title-stock']}
                  style={{marginBottom: '10px'}}>
                  COLORS
                </label>
                <div className={styles['wrapper-radio']}>
                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='blue'
                      name='color'
                      defaultValue='blue'
                      className={styles['radio']}
                    />
                    <label
                      className={`${styles.labelBlue} ${styles['label-radio']}`}
                      htmlFor='blue'>
                      BLUE
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='djon'
                      name='color'
                      defaultValue='djon'
                      className={styles['radio']}
                    />
                    <label
                      className={`${styles.labelDjon} ${styles['label-radio']}`}
                      htmlFor='djon'>
                      DJON
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='red'
                      defaultValue='red'
                      name='color'
                      className={styles['radio']}
                    />
                    <label
                      className={`${styles.labelRed} ${styles['label-radio']}`}
                      htmlFor='red'>
                      RED
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='green'
                      name='color'
                      defaultValue='green'
                      className={styles['radio']}
                    />
                    <label
                      className={`${styles.labelGreen} ${styles['label-radio']}`}
                      htmlFor='green'>
                      GREEN
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='black'
                      name='color'
                      defaultValue='black'
                      className={styles['radio']}
                    />
                    <label
                      className={`${styles.labelBlack} ${styles['label-radio']}`}
                      htmlFor='black'>
                      BLACK
                    </label>
                    <div className={styles['radio-item']}>
                      <input
                        type='radio'
                        id='mustard'
                        defaultValue='mustard'
                        name='color'
                        className={styles['radio']}
                      />
                      <label
                        className={`${styles.labelMustard} ${styles['label-radio']}`}
                        htmlFor='mustard'>
                        MUSTARD
                      </label>
                    </div>
                  </div>
                </div>

                {/* CATEGORY */}
                <label
                  className={styles['title-stock']}
                  style={{marginBottom: '10px'}}>
                  CATEGORY
                </label>
                <div className={styles['wrapper-check']}>{showCategory()}</div>

                <p className={styles.title}>Photo of Goods</p>
                <div
                  className={`${
                    selectedFiles.length < 2
                      ? 'justify-content-start'
                      : 'justify-content-between'
                  } ${styles['main-image']}`}>
                  {selectedFiles.length !== 0 && renderPhotos(selectedFiles)}
                  <input
                    type='file'
                    id='file'
                    multiple
                    hidden
                    ref={inputFileRef}
                    onChange={handleUpload}
                  />
                  {selectedFiles.length < 3 && (
                    <div className={styles.imageWrapperAdd}>
                      <Image
                        src={addImage}
                        alt='add-image'
                        objectFit='cover'
                        layout='fill'
                        onClick={clickImage}
                      />
                    </div>
                  )}
                </div>
                <button className={styles['btn-sell']} type='submit'>
                  Sell Product
                </button>
              </>
            ) : (
              <LoadingBox />
            )}
          </div>
        </main>
      </form>

      <Footer />
    </>
  );
}

export default AddProduct;
