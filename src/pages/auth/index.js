import Login from "src/common/components/Login";
import Register from "src/common/components/Register";
import styles from "../../common/styles/Auth.module.css"

export default function auth() {
  return (
    <section className={styles.authWrapper}>
      <div className={styles.authTtitle}>
        <h1>My Account</h1>
        <p>Register and log in with your account to be able to shop at will</p>
      </div>
      <div className="row">
        <div className="col-10 col-sm-10 col-md-6 col-lg-6">
          <Login />
        </div>
        <div className="col-10 col-sm-10 col-md-6 col-lg-6">
          <Register />
        </div>
      </div>
    </section>
  );
}
