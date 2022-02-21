import React, { useEffect } from "react";
import Link from "next/link";
import styles from "src/common/styles/Auth.module.css";
import { loginAction } from "src/store/actions/auth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    props.loginDispatch(body);
  };
  useEffect(() => {
    if (props.auth.isFulfilled) {
      return toast.success("success");
      router.push("/");
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
              // value=""
              id="flexCheckChecked"
              // checked
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <Link href={"/"} passHref>
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
