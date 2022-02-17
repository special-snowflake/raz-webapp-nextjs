import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import MenuBar from "src/common/components/MenuBar";

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
        <h1>BODY</h1>
      </main>

      <Footer />
    </>
  );
}
export default Profile;
