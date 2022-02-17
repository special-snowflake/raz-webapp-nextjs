import Head from "next/head";
import styles from "src/common/styles/PageTitle.module.css";

function PageTitle({ title, subTitle }) {
  return (
    <>
      <Head>
        <title>{title} | RAZ Furniture</title>
        <meta
          name="description"
          content={`${title} page of RAZ Furniture, a modern furniture shop.`}
        />
      </Head>
      <main className={styles["main"]}>
        <section className={styles["header"]}>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </section>
      </main>
    </>
  );
}

export default PageTitle;
