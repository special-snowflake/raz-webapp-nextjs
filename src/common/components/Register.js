import React, { useState } from "react";
import styles from "../../common/styles/Auth.module.css";
import { useRouter } from "next/router";
import { registerAuth } from "src/modules/utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const router = useRouter();

  const registerHandler = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
<<<<<<< HEAD
      roles: event.target.user.value,
      roles: event.target.seller.value,
=======
      roles: event.target.roles.value
>>>>>>> b6098b98c209862fe75888dd5f05148f793cb875
      // checkebox: event.target.checkebox.value,
    };
    registerAuth(body)
      .then((response) => {
        const registerResponse = response.data.result;
        console.log(registerResponse);
        toast.info("Account Created Successfully, Please Login");
        // setTimeout(() => {
        //   router.push("/");
        // }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Register aborted!");
      });
  };

  return (
    <section className={styles.authWrapperSection}>
      <p className={styles.title}>Create Account</p>
      <form onSubmit={registerHandler}>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="email"
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

<<<<<<< HEAD
      <div className={styles.RegisChecker}>
      <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="1"
            name="user"
          />
          <label className="form-check-label">I'm Customer</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="2"
            name="seller"
          />
          <label className="form-check-label">I'm Seller</label>
=======
        <div className={styles.RegisChecker}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="1"
              name="roles"
            />
            <label className="form-check-label">I'm Customer</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="2"
              name="roles"
            />
            <label className="form-check-label">I'm Seller</label>
          </div>
>>>>>>> b6098b98c209862fe75888dd5f05148f793cb875
        </div>

        <button type="submit" className="btn btn-dark">
          Register
        </button>
      </form>
    </section>
  );
}

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
