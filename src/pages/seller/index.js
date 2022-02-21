import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import MenuBar from 'src/common/components/MenuBar';
import ProfileSeller from 'src/common/components/ProfileSeller';
import React,{useState, useEffect} from 'react';
import styles from 'src/common/styles/ProfileSeller.module.css'
import photoDefault from "public/userDefault.webp";
import Image from "next/image";

function Profile() {
  const inputFileRef = React.createRef();
  const [edit, setEdit] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [name, setName] = useState('');

  const inputImage = () => {
    inputFileRef.current.click();
  };

  const handlerEditPhoto = (e) => {
    setUploadPhoto(e.target.files[0]);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('NAME >>> ', name);
  };
  return (
    <>
      <Header />
      <PageTitle
        title='Profile'
        subTitle='See your notifications for the latest updates'
      />
      <MenuBar />
      <main>
        {/* <ProfileSeller /> */}
        <div className={styles.main} onSubmit={handleSubmit}>
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
                Edit
                <i
                  className={`bi bi-pencil-fill ms-2 ${styles['icon']}`}
                  style={{marginLeft: 0}}></i>
              </button>
            </div>

            <div className={styles['wrapper-title']}>
              <p className={styles['title-name']}>
                Syifa{' '}
                <i
                  className={`bi bi-pencil-fill ms-2 ${styles['icon']}`}
                  onClick={() => setEdit(true)}>
                  <span className={styles['tooltiptext']}>Edit</span>
                </i>
              </p>

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
          <button className={styles['btn-logout']}>
            <i className='bi bi-box-arrow-right'></i> LOGOUT
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default Profile;
