import React, { useState } from "react";
import Link from "next/link";
import styles from "../../common/styles/Auth.module.css";

export default function Login() {
  //   const [inputs, setInputs] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [submitted, setSubmitted] = useState(false);
  //   const { email, password } = inputs;

  //   function handleChange(e) {
  //     const { name, value } = e.target;
  //     setInputs((inputs) => ({ ...inputs, [name]: value }));
  //   }
  return (
    <section className={styles.authWrapperSection}>
      <p className={styles.title}>Login</p>
      <form>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="text"
            name="email"
            placeholder="User name or email address *"
            // value={email}
            // onChange={handleChange}
            className={"form-control"}
            required
          />
          {/* {submitted && !email && (
            <div className="invalid-feedback">email is required</div>
          )} */}
        </div>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="password"
            name="password"
            placeholder="password*"
            // value={password}
            // onChange={handleChange}
            className={"form-control"}
            required
          />
          {/* {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )} */}
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        <div className="d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              // checked
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <Link href={'/'} passHref>
            <p className={styles.forgotPassword}>Foget your password</p>
          </Link>
        </div>
      </form>
    </section>
  );
}
