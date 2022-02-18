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
  const [category, setCategory] = useState(null);
  const [brands, setBrands] = useState(null);

  const clickImage = () => {
    inputFileRef.current.click();
  };

  const handleUpload = (e) => {
    if (e.target.files.length + selectedFiles.length > 3)
      return toast.warn('Maximum input 3 photos');

    if (e.target.files) {
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
            value={element.id}
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

  useEffect(() => {
    getListBrand();
    getListCategory();
  }, []);

  const deleteImageProduct = (index) => {
    console.log(index);
    let array = selectedFiles;
    console.log(array);
    array.splice(index, 1);
    console.log(array);
    setSelectedFiles(array);
  };
  const renderPhotos = (photos) => {
    // const photos = selectedFiles;
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
  };
  console.log(selectedFiles, 'selected');
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
                      name='condition'
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
                      name='condition'
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
                    <label className={styles['label-radio']} htmlFor='blue'>
                      BLUE
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='djon'
                      name='colors'
                      defaultValue='djon'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='djon'>
                      DJON
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='red'
                      defaultValue='red'
                      name='colors'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='red'>
                      RED
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='green'
                      name='colors'
                      defaultValue='green'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='green'>
                      GREEN
                    </label>
                  </div>

                  <div className={styles['radio-item']}>
                    <input
                      type='radio'
                      id='blue'
                      name='colors'
                      className={styles['radio']}
                    />
                    <label className={styles['label-radio']} htmlFor='blue'>
                      BLUE
                    </label>
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
                <div className={styles['main-image']}>
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
                <button className={styles['btn-sell']}>Sell Product</button>
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
