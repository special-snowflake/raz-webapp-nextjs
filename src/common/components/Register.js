import React, { useState } from "react";
import styles from "../../common/styles/Auth.module.css";
import { useRouter } from "next/router";
import { registerAuth } from "src/modules/utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateSignup } from "src/modules/helper/validation";

export default function Register() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    setError(validateSignup(values));
    const validateBody = validateSignup(values);
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      roles: event.target.roles.value,
    };
    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
    }
    registerAuth(body)
      .then((response) => {
        const registerResponse = response.data.result;
        console.log(registerResponse);
        toast.info(
          "Account Created Successfully, Please Login" + response.data.msg
        );
        // setTimeout(() => {
        //   router.push("/");
        // }, 3000);
      })
      .catch((error) => {
        // console.log(error + err.response.data.msg);
        console.log("Error", error.message);
        toast.error(error.response.data.msg);
      });
  };

  return (
    <section className={styles.authWrapperSection}>
      <p className={styles.title}>Create Account</p>
      <form onSubmit={registerHandler} noValidate>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="email"
            name="email"
            placeholder="User name or email address *"
            className={"form-control"}
            value={values.email}
            onChange={handleChange}
          />
          {error.email && (
            <div className="text-danger error">{error.email}</div>
          )}
        </div>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="password"
            name="password"
            placeholder="password*"
            className={"form-control"}
            value={values.password}
            onChange={handleChange}
          />
          {error.password && (
            <div className="text-danger error">{error.password}</div>
          )}
        </div>
        <div className={styles.RegisChecker}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="2"
              name="roles"
            />
            <label className="form-check-label">I'm Customer</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="1"
              name="roles"
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
