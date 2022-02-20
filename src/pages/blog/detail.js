import BlogPost from "src/common/components/BlogPost";
import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import css from "src/common/styles/BlogPost.module.css";
import styles from "src/common/styles/ProductDetail.module.css";
import Image from "next/image";
import blogImg from "src/assets/b_CURTAIN-ZEITRAUM-4.png";
import nfPic from "src/assets/sofafour.png";
import userone from "src/assets/userone.png";
import usertwo from "src/assets/usertwo.png";
import userthree from "src/assets/userthree.png";
import BlogAside from "src/common/components/BlogAside";

function Blog(props) {
  return (
    <>
      <Header />
      <PageTitle
        title="Blog Post Detail"
        subTitle="See your notifications for the latest updates"
      />

      <section className={css.mainContent}>
        <div className="row">
          <div className={`${css.leftContent} col-3 col-md-3`}>
            <BlogAside />
          </div>
          <div className={`${css.rightContent} col-8 col-md-8`}>
            <div className={css.header}>
              <Image src={blogImg} />
            </div>
            <div className={`${css.timePost} d-flex align-items-center`}>
              <p>
                {" "}
                <span>
                  <i className="bi bi-clock"></i>
                </span>{" "}
                Time Publis
              </p>
              <p>
                <span>
                  <i className="bi bi-tags"></i>
                </span>{" "}
                Tags
              </p>
            </div>
            <div className={css.textContent}>
              <p>
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibuDonec non velit ut nisl ultrices lobortis eget
                et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales
                tortor, sed pulvinar ex eros vel orci. Sed tempor placerat
                tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc
                hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur
                aliquet, ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui. Phasellus ac
                sem eu mauris sodales tristique sed non ligula. Aenean in mauris
                ac libero condimentum vulputate quis ut sapien. Phasellus
                euismod mi eget interdum pellentesque. Maecenas molestie vitae
                risus vitae volutpat. Maecenas a velit rutrum, auctor quam et,
                commodo est. Cras leo sem, maximus non ex ac, porttitor egestas
                dolor. Fusce ut metus sodales, pellentesque diam sed, sodales
                massa. Nulla facilisi. Sed sed quam eget metus interdum
                condimentum non et odio. Nam magna tortor, vulputate in
                venenatis et, porta ac orci. Sed venenatis scelerisque
                scelerisque. Nullam ut neque sed libero feugiat fermentum et non
                odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt
                lorem.
              </p>
            </div>
            <div className="row my-5">
              <div className="col-5">
                <Image src={blogImg} />
              </div>
              <div className="col-7">
                <p className={css.contentTitle}>
                  <strong> Categories</strong>
                </p>
                <p className={css.textContent}>
                  Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu
                  efficitur aliquet, ante nisl mollis ex, eget venenatis magna
                  urna non ex. Suspendisse et orci viverra lacus consectetur
                  posuere. Curabitur bibendum nisi at sapien viverra ultricies.
                  Praesent commodo volutpat leo, ut accumsan ipsum egestas in.
                  Integer elementum ligula vel cursus bibendum. Nulla nibh ante,
                  iaculis at consequat id, euismod a sem. Fusce et sapien
                  cursus, placerat dui non, rhoncus diam. Praesent ac
                  consectetur dui. Phasellus ac sem eu mauris sodales tristique
                  sed non ligula. Aenean in mauris ac libero condimentum
                  vulputate quis ut sapien. Phasellus euismod mi eget interdum
                  pellentesque.{" "}
                </p>
              </div>
            </div>
            <div>
              <p className={css.textContent}>
                Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor,
                sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
                tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a
                diam vel ultricies. Morbi gravida, dui eu efficitur aliquet,
                ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui. Phasellus ac
                sem eu mauris sodales tristique sed non ligula. Aenean in mauris
                ac libero condimentum vulputate quis ut sapien. Phasellus
                euismod mi eget interdum pellentesque. Maecenas molestie vitae
                risus vitae volutpat. Maecenas a velit rutrum, auctor quam et,
                commodo est. Cras leo sem, maximus non ex ac, porttitor egestas
                dolor. Fusce ut metus sodales, pellentesque diam sed, sodales
                massa. Nulla facilisi. Sed sed quam eget metus interdum
                condimentum non et odio.
              </p>
            </div>
            <div className={css.quoteSection}>
              <q>“Luxury Is In Each Detail”</q>
              <p className={css.contentTitle}>description</p>
            </div>
            <div>
              <p className={css.textContent}>
                Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor,
                sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
                tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a
                diam vel ultricies. Morbi gravida, dui eu efficitur aliquet,
                ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui. Phasellus ac
                sem eu mauris sodales tristique sed non ligula. Aenean in mauris
                ac libero condimentum vulputate quis ut sapien. Phasellus
                euismod mi eget interdum pellentesque. Maecenas molestie vitae
                risus vitae volutpat. Maecenas a velit rutrum, auctor quam et,
                commodo est. Cras leo sem, maximus non ex ac, porttitor egestas
                dolor. Fusce ut metus sodales, pellentesque diam sed, sodales
                massa. Nulla facilisi. Sed sed quam eget metus interdum
                condimentum non et odio.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              {" "}
              <p>share with</p>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-dribbble"></i>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col d-flex">
              <div className={`${css.recentNews} d-flex align-items-center`}>
            <Image src={nfPic} width={75} height={75} />
            <div>
              <p className={css.recentNewsTitle}>How To Put Movies On Iphone</p>
              <p className={css.recentNewsTime}>24 Apr 2019, 45 mins ago</p>
            </div>
          </div>
              </div>
              <div className="col d-flex ">
              <div className={`${css.recentNews} d-flex align-items-center`}>
            <Image src={nfPic} width={75} height={75} />
            <div>
              <p className={css.recentNewsTitle}>How To Put Movies On Iphone</p>
              <p className={css.recentNewsTime}>24 Apr 2019, 45 mins ago</p>
            </div>
          </div>
              </div>
            </div>
          </div>
          {/* end of right section */}
        </div>
      </section>
      <Review />
      <Comment />
      <Footer />
      {/* <BlogPost /> */}
    </>
  );
}

const Review = () => {
  return (
    <>
      {/* review components-- border bottom percomment */}
      <section className="w-50 mx-auto">
        {/* <h1>THIS IS SECTION REVIEW </h1> */}
        {/* multiple comment */}
        <div
          className={`${styles.cardReviewComment} w-75 mx-auto col-10 col-sm-10`}
        >
          {/* parent comment */}
          <div>
            <div className="d-flex align-items-center">
              <div className={styles.userReviewImage}>
                <Image
                  src={userone}
                  alt="user"
                  width={75}
                  height={75}
                  // layout="fill"
                  // objectFit="scale-down"
                  // objectPosition="static"
                />
              </div>
              <div>
                <p className={styles.commentQuote}>
                  {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                </p>
                <div className="d-flex align-items-center">
                  <p className={styles.commentTime}>
                    35 mins ago, 15 November 2019
                  </p>
                  <button className={`${styles.replyBtn} btn btn-light`}>
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* reply commenet card */}
          <div className="d-flex align-items-center">
            <div className="w-25"></div>

            <div>
              <div className="d-flex align-items-center">
                <i className="bi bi-align-end"></i>
                <div className={styles.userReviewImage}>
                  <Image
                    src={usertwo}
                    alt="user"
                    width={75}
                    height={75}
                    // layout="fill"
                    // objectFit="scale-down"
                    // objectPosition="static"
                  />
                </div>
                <div>
                  <p className={styles.commentQuote}>
                    {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                  </p>
                  <div className="d-flex align-items-center">
                    <p className={styles.commentTime}>
                      35 mins ago, 15 November 2019
                    </p>
                    <button className={`${styles.replyBtn} btn btn-light`}>
                      reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single comment */}
        <div
          className={`${styles.cardReviewComment} w-75 mx-auto col-10 col-sm-10`}
        >
          <div>
            <div className="d-flex align-items-center">
              <div className={styles.userReviewImage}>
                <Image
                  src={userthree}
                  alt="user"
                  width={75}
                  height={75}
                  // layout="fill"
                  // objectFit="scale-down"
                  // objectPosition="static"
                />
              </div>
              <div>
                <p className={styles.commentQuote}>
                  {`“Theme is very flexible and easy to use. Perfect for us.
                  Customer support has been excellent and answered every
                  question we've thrown at them with 12 hours.”`}
                </p>
                <div className="d-flex align-items-center">
                  <p className={styles.commentTime}>
                    35 mins ago, 15 November 2019
                  </p>
                  <button className={`${styles.replyBtn} btn btn-light`}>
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* leave comment section */}
    </>
  );
};
const Comment = () => {
  return (
    <section className="w-50 mx-auto my-5">
      <p className={styles.productTitle}>Leave A Comment</p>
      <p className={styles.productRate}>
        Your email address will not be published. Required fields are marked *
      </p>
      <form>
        <div className="row my-3">
          <div className="form-group col-sm-4">
            <input type="text" className="form-control" placeholder="Name*" />
          </div>
          <div className="form-group col-sm-4">
            <input type="email" className="form-control" placeholder="Email*" />
          </div>
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Website*"
            />
          </div>
        </div>
        <div className="form-group my-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Your Comment"
          ></textarea>
        </div>
        <button className={`${styles.productDescButton} btn btn-dark`}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Blog;
