import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "src/common/styles/Auth.module.css";
import { loginAction } from "src/store/actions/auth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      rememberMe
    };
    props.loginDispatch(body);
    // console.log(body);
  };
  useEffect(() => {
    if (props.auth.isFulfilled) {
      router.push("/");
      return toast.success("success");
    }
    if (props.auth.isRejected) {
      toast.error("Wrong email/password!");
    }
  }, [props]);

  return (
    <section className={styles.authWrapperSection}>
      <p className={styles.title}>Login</p>
      <form onSubmit={submitHandler}>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="email"
            name="email"
            placeholder="User name or email address *"
            className={"form-control"}
            required
          />
        </div>
        <div className={`${styles.formAuth} form-group`}>
          <input
            type="password"
            name="password"
            placeholder="password*"
            className={"form-control"}
            required
          />
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
