import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import styles from "src/common/styles/AboutUs.module.css";
import Image from "next/image";
import sofa from "src/assets/b_rialto-riva.png";
import amanda from "src/assets/amanda.png";
import norman from "src/assets/norman.png";
import connor from "src/assets/connor.png";

function About() {
  return (
    <>
      <Header />
      <PageTitle title="About Us" subTitle="" />
      <section>
        <div className="d-flex align-items-center mx-auto w-75 row">
          <div
            className={`${styles.productDescriptionSection} col-10 col-sm-10 col-md-6 col-lg-6`}
          >
            <h2>RAZ- Modern Furniture</h2>
            <div className={styles.productDescriptionSectionP}>
              <p>
                Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                egestas magna molestie a. Proin ac ex maximus, ultrices justo
                eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                in vehicula lacus scelerisque. Vestibulum ut sem laoreet,
                feugiat tellus at, hendrerit arcu..
              </p>
            </div>
            <div>
              <ul>
                <li>
                  Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                  tincidunt semper
                </li>
                <li>
                  Aliquam est et tempus. Eaecenas libero ante, tincidunt vel
                </li>
              </ul>
            </div>
            <div className={styles.productDescriptionSectionP}>
              <p>
                Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                tincidunt semper. Phasellus accum
              </p>
            </div>
          </div>
          <div className="col-10 col-sm-10 col-md-5 col-lg-5">
            <Image src={sofa} alt="register" width={600} height={550} />
          </div>
        </div>
      </section>
      <section className={styles.quality}>
        <h2>Why Should Choose Us?</h2>
        <div className={`${styles.qualityWrapper} row`}>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            <div>
              <p className={styles.qualityTitle}>Unique Design</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            <div>
              <p className={styles.qualityTitle}>Good Wararanty Policy</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            {" "}
            <div>
              <p className={styles.qualityTitle}>Handcrafted Quality</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.qualityWrapper} row`}>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            <div>
              <p className={styles.qualityTitle}>Dedicated Support</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            <div>
              <p className={styles.qualityTitle}>Amazing Features</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 mx-auto">
            <div>
              <p className={styles.qualityTitle}>Easy Customized</p>
              <p className={styles.qualityText}>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className="row">
          <div className="col">
            <Image src={amanda} alt="user" />
            <p className={styles.teamName}>Amanda ainsley</p>
            <p className={styles.teamPosition}>CEO</p>
          </div>
          <div className="col">
            <Image src={norman} alt="user"/>
            <p className={styles.teamName}>Norman Kamaru</p>
            <p className={styles.teamPosition}>Design</p>
          </div>
          <div className="col">
            <Image src={connor} alt="user" />
            <p className={styles.teamName}>Connor McGregor</p>
            <p className={styles.teamPosition}>Product manager</p>
          </div>
        </div>
      </section>

      <section className={styles.reviewSection}>
        <p className={styles.aboutUsReview}>
        {`“Gave 5 stars for excellent customer service. I had a couple of
          questions which they replied quickly to answer. If I could give
          multiple reasons for my rating it would also be for the design quality
          and customization to go along with the great service. The theme is
          excellent, keep up the great work."`}
         </p>
        <Image src={connor} className={styles.reviewSectionImage} width="40" height="40"  alt="user"/>
        <p className={styles.reviewUser}>Trevor Reivera, California</p>
        {/* carousel */}
      </section>
      <Footer />
    </>
  );
}

export default About;
