import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import styles from "src/common/styles/Faq.module.css";
import { useRouter } from "next/router";

function Faq() {
  const router = useRouter();
  return (
    <>
      <Header />
      <PageTitle title="FAQ" subTitle="" />
      <section className={styles.faqWrapper}>
        <div>
          <div className={styles.faqIcon}>
            <i className="bi bi-cart"></i>
          </div>
          <p className={styles.faqTitle}>Shopping Questions</p>
        </div>
        <div className="row mx-auto">
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqWrapper}>
        <div>
          <div className={styles.faqIcon}>
            <i className="bi bi-wallet2"></i>
          </div>
          <p className={styles.faqTitle}>Shopping Questions</p>
        </div>
        <div className="row mx-auto">
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqWrapper}>
        <div>
          <div className={styles.faqIcon}>
            <i className="bi bi-bookmark-check-fill"></i>
          </div>
          <p className={styles.faqTitle}>Shopping Questions</p>
        </div>
        <div className="row mx-auto">
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
          <div className={`${styles.questionWrapper} col-6`}>
            <p className={styles.questionTitle}>Do you ship worldwide?</p>
            <p className={styles.questionDesc}>
              {`This is the third article of a three-part series. I’m illustrating
              the marketing challenges of PrescottWeddings.com, a small
              business. If you don’t remember anything else about marketing,
              remember this: Frequency is king.`}
            </p>
          </div>
        </div>
      </section>
      <div className={styles.FaqFooter}>
        <p className={styles.contactUs}>You Still Need Help?</p>
        <button
          className={`${styles.contactUsBtn} btn btn-dark`}
          onClick={() => {
            router.push("/contact");
          }}>
          Contact Us
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
