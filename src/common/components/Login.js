import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "src/common/styles/Auth.module.css";
import { loginAction } from "src/store/actions/auth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateLogin } from "src/modules/helper/validation";

function Login(props) {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
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

  const submitHandler = (event) => {
    event.preventDefault();
    setError(validateLogin(values));
    const validateBody = validateLogin(values);
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      rememberMe
    };
    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
      dispatch(loginAction(body));
    }
    props.loginDispatch(body);
    // console.log(body);
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("isSubmit", isSubmit);
    }

    if (props.auth.isFulfilled === true) {
      router.push("/");
      return toast.success("success");
    }
    if (props.auth.isRejected === true) {
      toast.error("Wrong email/password!");
    }
    // if (error.response === 401) {
    //   Promise.reject(error.response || error.message);
    //   console.error("Error Message:", error.message);
    // }
  }, [props]);

  return (
    <section className={styles.authWrapperSection}>
      <p className={styles.title}>Login</p>
      <form onSubmit={submitHandler} noValidate>
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
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        <div className="d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              name="rememberMe"
              onChange={(e) => {
                if (e.target.checked) {
                  setRememberMe(true);
                } else {
                  setRememberMe(false);
                }
              }}
            />
            <label
              className="form-check-label remember"
              htmlFor="flexCheckChecked">
              Remember me
            </label>
          </div>
          <Link href={"/auth/forgot-password"} passHref>
            <p className={styles.forgotPassword}>Foget your password</p>
          </Link>
        </div>
      </form>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body));
      console.log("login body :" + body);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
