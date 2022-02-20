import styles from 'src/common/styles/Notification.module.css';
import Header from 'src/common/components/header';
import PageTitle from 'src/common/components/PageTitle';
import Footer from 'src/common/components/footer';
import Logout from 'src/common/components/Logout';
import ProfileSeller from 'src/common/components/ProfileSeller';
import {useState} from 'react';

function Profile(props) {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <>
      <Header />
      <PageTitle
        title='Profile'
        subTitle='See your notifications for the latest updates'
      />
      <main className={styles['main']}></main>
      <ProfileSeller />
      <Logout isShow={showLogout} />
      <Footer />
    </>
  );
}

export default Profile;
