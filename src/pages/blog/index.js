import BlogPost from "src/common/components/BlogPost";
import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import css from "src/common/styles/BlogPost.module.css";
import Image from "next/image";
import blogImg from "src/assets/b_CURTAIN-ZEITRAUM-4.png";
import Link from "next/link";
import BlogAside from "src/common/components/BlogAside";

function Blog(props) {
  return (
    <>
      <Header />
      <PageTitle
        title="Blog Post"
        subTitle="See your notifications for the latest updates"
      />
      <section className={css.mainContent}>
        <div className="row">
          <div className={`${css.leftContent} col-3 col-md-3`}>
            <BlogAside />
          </div>
          <div className={`${css.rightContent} col-8 col-md-8`}>
            <Content />
            <Content />
            <Content />
            <Content />
          </div>
        </div>
      </section>
      <p>Pagination</p>
      <Footer />

      {/* <BlogPost /> */}
    </>
  );
}

const Content = () => {
  return (
    <section className={css.BlogContentWrapper}>
      <div className={css.header}>
        <Image height={300} layout="responsive" src={blogImg} />
      </div>
      <p className={css.contentTitle}>Scandinavian Style 2019</p>
      <div className={`${css.timePost} d-flex align-items-center`}>
        <p>
          <span>
            <i className="bi bi-clock"></i>
          </span>
          Time Publis
        </p>
        <p className="mx-5">
          <span>
            <i className="bi bi-tags"></i>
          </span>{" "}
          Tags
        </p>
      </div>
      <div className={css.textContent}>
        <p>
          Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo
          cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat
          tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies
          felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec
          non velit ut nisl ultrices lobortis eget et odio.
        </p>
      </div>
      <div className="d-flex align-items-center">
        <Link href="/blog/detail">
          <button className={`${css.btnReadMore} btn btn-light`}>
            Read More
          </button>
        </Link>
        <hr style={{ height: "2px solid black", width: "85%" }} />
      </div>
      {/* end of right section */}
    </section>
  );
};

export default Blog;
