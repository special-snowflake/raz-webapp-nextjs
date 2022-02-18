import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";
import ProfileSeller from "src/common/components/ProfileSeller";

function Profile() {
  return (
    <>
      <Header />
      <PageTitle
        title="Profile"
        subTitle="See your notifications for the latest updates"
      />
      <MenuBar />
      <main>
        <ProfileSeller />
      </main>

      <Footer />
    </>
  );
}
export default Profile;
