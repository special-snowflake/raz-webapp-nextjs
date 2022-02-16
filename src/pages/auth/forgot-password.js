import styles from "src/common/styles/Forgot.module.css";

import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";

function Forgot(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
    };
    console.log(body);
  };

  return (
    <>
      <PageTitle
        title="Forgot Password"
        subTitle="Forgot your password? Don't worry, we got your back."
      />
      <main className={styles["main"]}>
        <form onSubmit={submitHandler} className={styles["form"]}>
          <input
            name="email"
            placeholder="Your email address *"
            className={styles["email"]}
          ></input>
          <button>Reset Password</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Forgot;
