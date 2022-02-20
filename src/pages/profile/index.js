import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Header from 'src/common/components/header';
import PageTitle from 'src/common/components/PageTitle';
import Footer from 'src/common/components/footer';
import Logout from 'src/common/components/Logout';
import styles from 'src/common/styles/ProfileSeller.module.css';

import photoDefault from 'public/userDefault.webp';
import {
  getDetailByID,
  updateImage,
  updateProfile,
} from 'src/modules/utils/user';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';

function Profile(props) {
  const inputFileRef = React.createRef();
  const [userDetail, setUserDetail] = useState(null);
  const [showLogout, setShowLogout] = useState(false);

  const user = useSelector((state) => state.auth.userData);

  const [onName, setOnName] = useState(false);
  const [onGender, setOnGender] = useState(false);
  const [onEmail, setOnEmail] = useState(false);
  const [onDescription, setOnDescription] = useState(false);

  const inputImage = () => {
    inputFileRef.current.click();
  };

  const onHandleSubmit = (key, value) => {
    const body = {
      [key]: value,
    };
    const {token} = user;
    console.log(body);
    updateProfile(body, token)
      .then((res) => {
        console.log(res);
        if (key === 'name') {
          setOnName(false);
        }
        if (key === 'gender') {
          setOnGender(false);
        }
        if (key === 'email') {
          setOnEmail(false);
        }
        if (key === 'description') {
          setOnDescription(false);
        }
        return toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.msg);
      });
  };

  const handlerEditPhoto = (e) => {
    const body = new FormData();
    const {token} = user;
    body.append('image', e.target.files[0]);
    updateImage(body, token)
      .then((res) => {
        return toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.msg);
      });
  };

  const callbackLogout = (isShow) => {
    setShowLogout(isShow);
  };

  const getDetailUser = () => {
    const {id, token} = user;
    getDetailByID(id, token)
      .then((res) => {
        // return toast.success(res.data.msg);
        console.log(res.data);
        return setUserDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
        // toast.error(err.response.data.msg);
      });
  };
  useEffect(() => {
    getDetailUser();
  }, []);
  return (
    <>
      <Header />
      <PageTitle
        title='Profile'
        subTitle='See your notifications for the latest updates'
      />
      <div className={styles.main}>
        <div className={styles['wrapper-photo']}>
          <div className={styles['wrapper-image']}>
            <Image
              src={photoDefault}
              alt='photo0user'
              width={120}
              height={120}
              className={styles.image2}
            />
            <input
              type='file'
              name='photoUser'
              hidden
              ref={inputFileRef}
              onChange={(e) => {
                handlerEditPhoto(e);
              }}
            />
            <button className={styles['edit-photo']} onClick={inputImage}>
              <i
                className={`bi bi-pencil-fill ms-2 ${styles['icon']}`}
                style={{marginLeft: 0}}></i>
            </button>
          </div>

          <div className={styles['wrapper-title']}>
            {onName ? (
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('submit', e.target);
                    onHandleSubmit('name', e.target.name.value);
                  }}>
                  <input
                    type='text'
                    placeholder='Please Enter Your Name'
                    name='name'
                    className={styles.inputField}
                  />
                  <button className={styles.btnSave} type='submit'>
                    <i className='bi bi-check-circle-fill'></i>
                  </button>
                  <button
                    className={styles.btnCancel}
                    onClick={(e) => {
                      e.preventDefault();
                      setOnName(false);
                    }}>
                    <i className='bi bi-x-circle-fill'></i>
                  </button>
                </form>
              </div>
            ) : (
              <p className={styles['title-name']}>
                Syifa
                <i
                  className={`bi bi-pencil-fill ms-2 ${styles['icon']}`}
                  onClick={() => setOnName(true)}>
                  <span className={styles['tooltiptext']}>Edit</span>
                </i>
              </p>
            )}

            <p className={styles['title-role']}>as Seller</p>
          </div>
        </div>

        <div className={styles['wrapper']}>
          <div className={styles['wrapper-form']}>
            <div className={styles['wrapper-input']}>
              <p className={styles['title-gender']}>Gender</p>
              <p className={styles.gender}>Female</p>
            </div>

            <p className={styles.edit}>
              Edit <i className='bi bi-pencil-fill ms-2'></i>
            </p>
          </div>
        </div>

        <div className={styles['wrapper']}>
          <div className={styles['wrapper-form']}>
            <div className={styles['wrapper-input']}>
              <p className={styles['title-gender']}>Your Email</p>
              <p className={styles.gender}>syifa@gamil.com</p>
            </div>

            <p className={styles.edit}>
              Edit <i className='bi bi-pencil-fill ms-2'></i>
            </p>
          </div>
        </div>

        <div className={styles['wrapper']}>
          <div className={styles['wrapper-form']}>
            <div className={styles['wrapper-input']}>
              <p className={styles['title-gender']}>Store Name</p>
              <p className={styles.gender}>Apple Store</p>
            </div>

            <p className={styles.edit}>
              Edit <i className='bi bi-pencil-fill ms-2'></i>
            </p>
          </div>
        </div>

        <div className={styles['wrapper']}>
          <div className={styles['wrapper-form']}>
            <div className={styles['wrapper-input']}>
              <p className={styles['title-gender']}>Store Description</p>
              <p className={styles.gender}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <p className={styles.edit}>
              Edit <i className='bi bi-pencil-fill ms-2'></i>
            </p>
          </div>
        </div>
        <button
          className={styles['btn-logout']}
          onClick={(e) => {
            e.preventDefault();
            console.log('clicked logout');
            setShowLogout(true);
          }}>
          <i className='bi bi-box-arrow-right'></i> LOGOUT
        </button>
      </div>
      {/* <ProfileSeller /> */}
      <Logout isShow={showLogout} callbackShow={callbackLogout} />
      <Footer />
    </>
  );
}

export default Profile;
