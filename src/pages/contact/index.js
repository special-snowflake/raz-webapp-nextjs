import styles from "src/common/styles/ContactUs.module.css";
import PageTitle from "src/common/components/PageTitle";
import Header from "src/common/components/header";
import Footer from "src/common/components/footer";
import Image from "next/image";
import map from "src/assets/map.png";
import map2 from "src/assets/map2.png";
import map3 from "src/assets/map3.png";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({});
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      name: e.target.name.value,
      email: e.target.email.value,
      website: e.target.website.value,
      business: e.target.business.value,
      messages: e.target.messages.value
    });
  };

  const togleMap = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  console.log("show", isShow);
  return (
    <>
      <Header />
      <PageTitle title="Contact Us" />

      <div className="row">
        <div className="col-lg-6 p-0 position-relative">
          <div>
            <Image src={map3} alt="map" layout="responsive" />
          </div>
          <div className={styles["wrapper-circle"]} onClick={togleMap}>
            <i className="bi bi-geo-alt-fill "></i>
          </div>
          <div className={isShow ? styles["modal-show"] : styles["modal"]}>
            <div className="row d-flex align-content-around h-100">
              <div className="col-2 text-center">
                <i className="bi bi-geo-alt fs-5"></i>
              </div>
              <div className="col-10 ">
                <p className={styles["title"]}>
                  Jl. Setu Indah No.2, Tugu, Kec. Cimanggis, Kota Depok, Jawa
                  Barat 16951
                </p>
              </div>
              <div className="col-2 text-center">
                <i className="bi bi-telephone fs-5"></i>
              </div>
              <div className="col-10 ">
                <p className={styles["title"]}>+62 8121322210</p>
              </div>
              <div className="col-2 text-center">
                <i className="bi bi-envelope fs-5"></i>
              </div>
              <div className="col-10 ">
                <p className={styles["title"]}>raz-garlic@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0 d-flex justify-content-center">
          <form className={styles["wrapper-form"]} onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="text"
              id="website"
              placeholder="Your Website"
              className={styles.input}
            />
            <input
              type="text"
              id="business"
              placeholder="Business Plan"
              className={styles.input}
            />
            <textarea
              id="messages"
              cols="50"
              rows="5"
              placeholder="Messages"
              className={styles["input"]}></textarea>
            <button type="submit" className={styles["btn-send"]}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
