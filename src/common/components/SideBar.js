import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {Range} from 'rc-slider';

import Router, {useRouter} from 'next/router';

import LoadingBar from 'src/common/components/LoadingBar';

import {getCategoryQty} from 'src/modules/utils/category';
import {getBrands} from 'src/modules/utils/brand';

import 'rc-slider/assets/index.css';
import styles from 'src/common/styles/SideBar.module.css';

function SideBar(data) {
  const [filterMin, setFilterMin] = useState(0);
  const [filterMax, setFilterMax] = useState(2000);

  const [categoryQuantity, setCategoryQuantity] = useState(null);
  const [brands, setBrands] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedColor, setCheckedColor] = useState([]);

  const router = useRouter();

  const getListCategoryQty = () => {
    const filter = '?sort=Quantity DESC';
    getCategoryQty(filter)
      .then((res) => {
        setCategoryQuantity(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showCategoryQty = () => {
    const elements = [];
    categoryQuantity.forEach((element) => {
      const data = (
        <React.Fragment key={` ${element.id}`}>
          <a
            className={styles['category-item']}
            onClick={() => {
              setSelectedCategory(element.id);
            }}>
            <p>{element.category}</p>
            <p>{element.totalProduct}</p>
          </a>
        </React.Fragment>
      );
      elements.push(data);
    });
    return elements;
  };

  const onChangeBrand = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedBrand([...checkedBrand, e.target.value]);
    } else {
      const index = checkedBrand.indexOf(e.target.value);
      const array = checkedBrand;
      array.splice(index);
      setCheckedBrand([...array]);
    }
  };

  const onChangeColor = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedColor([...checkedColor, e.target.value]);
    } else {
      const index = checkedColor.indexOf(e.target.value);
      const array = checkedColor;
      array.splice(index);
      setCheckedColor([...array]);
    }
  };

  const showBrands = () => {
    const elements = [];
    brands.forEach((element) => {
      const data = (
        <React.Fragment key={` ${element.id}`}>
          <div className={styles['brand-item']}>
            <input
              type='checkbox'
              id='band'
              name='brand'
              value={element.brand}
              onChange={onChangeBrand}
            />
            <label htmlFor='brand'>{element.brand}</label>
          </div>
        </React.Fragment>
      );
      elements.push(data);
    });
    return elements;
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

  useEffect(() => {
    getListCategoryQty();
    getListBrand();
  }, []);

  useEffect(() => {
    const priceMin = filterMin;
    const priceMax = filterMax;
    let idCategory = '';
    if (selectedCategory != null) {
      idCategory = selectedCategory;
    }
    let idBrand = [];
    if (checkedBrand != null) {
      idBrand = checkedBrand;
    }
    let color = [];
    if (checkedColor != null) {
      color = checkedColor;
    }
    const search = router.query.search || '';
    const sort = router.query.sort || 'Latest';
    Router.push({
      pathname: '/product',
      query: {
        page: '1',
        search,
        priceMin,
        priceMax,
        color,
        idCategory,
        idBrand,
        sort,
      },
    });
  }, [filterMin, filterMax, checkedColor, checkedBrand, selectedCategory]);

  const log = (value) => {
    setFilterMin(value[0]);
    setFilterMax(value[1]);
  };

  return (
    <aside className={styles['sidebar']}>
      <div className={styles['category-wrapper']}>
        <p className={styles['section-title']}>Category</p>
        <div className={styles['category-list']}>
          {categoryQuantity !== null ? (
            <>{showCategoryQty()}</>
          ) : (
            <LoadingBar />
          )}
        </div>
      </div>
      <div className={styles['price-wrapper']}>
        <p className={styles['section-title']}>Price</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className={styles['range-slider']}>
            <p
              className={
                styles['min-max']
              }>{`Min: $${filterMin} - Max: $${filterMax}`}</p>
            <Range
              allowCross={false}
              min={0}
              max={10000}
              defaultValue={[0, 2000]}
              onChange={log}
            />
          </div>
          <button type='submit' className={`${styles['filter-button']}`}>
            Filter
          </button>
        </form>
      </div>
      <div className={styles['brands-wrapper']}>
        <p className={styles['section-title']}>Brands</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          {brands !== null ? <>{showBrands()}</> : <LoadingBar />}
        </form>
      </div>
      <div className={styles['colors-wrapper']}>
        <p className={styles['section-title']}>Colors</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['blue']}
              name='blue'
              value='blue'
              onChange={onChangeColor}
            />
          </div>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['djon']}
              name='djon'
              value='djon'
              onChange={onChangeColor}
            />
          </div>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['red']}
              name='red'
              value='red'
              onChange={onChangeColor}
            />
          </div>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['green']}
              name='green'
              value='green'
              onChange={onChangeColor}
            />
          </div>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['black']}
              name='black'
              value='black'
              onChange={onChangeColor}
            />
          </div>
          <div className={styles['color-item-container']}>
            <input
              type='checkbox'
              id={styles['mustard']}
              name='mustard'
              value='mustard'
              onChange={onChangeColor}
            />
          </div>
        </form>
      </div>
    </aside>
  );
}

export default SideBar;
