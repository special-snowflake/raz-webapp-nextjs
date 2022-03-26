import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {useSelector} from 'react-redux';

import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import MenuBar from 'src/common/components/MenuBar';
import LoadingBox from 'src/common/components/LoadingBox';
import ImageBoxProduct from 'src/common/components/ImageBoxProduct';

import {geProductId} from 'src/modules/utils/product';
import {getCategory} from 'src/modules/utils/category';
import {getBrands} from 'src/modules/utils/brand';

import styles from 'src/common/styles/SellerAddProduct.module.css';
import {toast} from 'react-toastify';
import addImage from 'src/assets/addMoreImage.png';
import {addProduct} from 'src/modules/utils/product';
import {useRouter} from 'next/router';
import Routing from 'src/common/components/Routing';

function EditProduct() {
  const inputFileRef = React.createRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [category, setCategory] = useState(null);
  const [brands, setBrands] = useState(null);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [dataItem, setDataItem] = useState(null);
  const [productCondition, setProductCondition] = useState(null);
  const router = useRouter();

  console.log('router', router);
  useEffect(() => {}, [router]);

  const user = useSelector((state) => state.auth.userData);

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
    console.log('FILE-UPLOAD', e.target.files);
  };

  const getListCategory = () => {
    getCategory()
      .then((res) => {
        setCategory(res.data.data);
        // getDetailData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSelectedIdCategory = (arrCategory) => {
    console.log('get selected id category', arrCategory);
    arrCategory.forEach((element, idx) => {
      category.forEach((el, idx) => {
        // console.log('inclueds:', arrCategory.includes(el.category), arrCategory);
        console.log('elements', element, el, el.category === element);
        if (el.category === element) {
          const arr = categoryChecked;
          if (!category.includes(el.id)) {
            // const arr = [...categoryChecked, el.id];
            arr.push(el.id);
            setCategoryChecked(arr);
          }
        }
      });
    });
  };

  const getDetailData = () => {
    // console.log('router query', router.query);
    if (!dataItem && router.query.id) {
      const productId = router.query.id;
      // console.log('get detail', productId);
      // console.log('')
      geProductId(productId)
        .then((res) => {
          // console.log('hasil get detail', res);
          setDataItem(res.data.data);
          getSelectedIdCategory(res.data.data.category);
          setProductCondition(res.data.data.productCondition);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
              defaultChecked={dataItem.brand === element.brand}
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
            defaultChecked={dataItem.category.includes(element.category)}
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
  }, [router]);

  useEffect(() => {
    if (category && !dataItem) {
      getDetailData();
    }
  }, [category, dataItem]);

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
    const stock = e.target.stock.value;
    const price = e.target.price.value;
    const color = e.target.color.value;
    const brand = e.target.idBrand.value;
    const categories = categoryChecked;

    if (
      !name ||
      !description ||
      !productCondition ||
      !color ||
      !brand ||
      !stock ||
      !price ||
      categories.length < 1 ||
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
    body.append('price', price);
    body.append('stock', stock);
    body.append('idBrand', brand);
    let categoryArray = '[';
    for (let i = 0; i < categories.length; i++) {
      if (i === categories.length - 1) {
        categoryArray += categories[i];
      } else {
        categoryArray += categories[i] + ',';
      }
    }
    categoryArray += ']';
    body.append('category', categoryArray);
    selectedImages.forEach((element) => {
      body.append('images', element, element.name);
    });
    console.log(categoryArray);
    const {token} = user;
    addProduct(body, token)
      .then((res) => {
        console.log(res.data);
        toast.success('New product successfully added.');
        const path = '/product/' + res.data.data.id;
        router.push(path);
      })
      .catch((err) => {
        const msg = err.response.data.msg || 'Failed to Add Product.';
        toast.error(msg);
        console.log(err.response);
      });
  };
  return (
    <>
      <Routing type='private' user='seller' />
      <Header />
      <PageTitle
        title='Selling Product'
        subTitle='See your notifications for the latest updates'
      />
      <MenuBar />
      {dataItem ? (
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
                    defaultValue={dataItem.name}
                    placeholder='Name of goods *'
                    className={styles['inputSmall']}
                  />
                  <textarea
                    name='description'
                    id='description'
                    defaultValue={dataItem.description}
                    cols='30'
                    rows='10'
                    maxLength={255}
                    placeholder='Description Product'
                    className={`${styles.textDescription} mb-5`}></textarea>
                  <p className={styles.title}>Item Details</p>
                  <input
                    type='number'
                    name='price'
                    defaultValue={dataItem.price}
                    placeholder='Unit price *'
                    className={styles['inputSmall']}
                  />
                  <input
                    type='number'
                    name='stock'
                    defaultValue={dataItem.stock}
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
                        defaultChecked={dataItem.productCondition === 'new'}
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
                        defaultChecked={dataItem.productCondition === 'used'}
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
                        defaultChecked={dataItem.color === 'blue'}
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
                        defaultChecked={dataItem.color === 'djon'}
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
                        defaultChecked={dataItem.color === 'red'}
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
                        defaultChecked={dataItem.color === 'green'}
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
                        defaultChecked={dataItem.color === 'black'}
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
                          defaultChecked={dataItem.color === 'mustard'}
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
                  <div className={styles['wrapper-check']}>
                    {showCategory()}
                  </div>

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
      ) : (
        <main className={styles.container}>
          <LoadingBox />
        </main>
      )}

      <Footer />
    </>
  );
}

export default EditProduct;
