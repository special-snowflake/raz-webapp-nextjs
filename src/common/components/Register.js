import React, { useState } from "react";
import styles from "../../common/styles/Auth.module.css";

export default function Register() {
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
      <p className={styles.title}>Create Account</p>
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

      <div className={styles.RegisChecker}>
      <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="customer"
          />
          <label className="form-check-label">I'm Customer</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="seller"
          />
          <label className="form-check-label">I'm Seller</label>
        </div>
      </div>

        <button type="submit" className="btn btn-dark">
          Register
        </button>
      </form>
    </section>
  );
}
