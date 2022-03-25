import React, { useState, useEffect } from "react";
import styles from "src/common/styles/Forgot.module.css";
import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import {
  getOtpApi,
  checkOtpAPi,
  resetPasswordApi
} from "src/modules/utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Forgot = (props) => {
  const [getOtp, setGetOtp] = useState(false);
  const [email, setEMail] = useState("");

  const submitGetOtp = (e) => {
    e.preventDefault();
    setEMail(e.target.email.value);
    const body = {
      email: email
    };
    if (email !== "" && email.length !== 0) {
      getOtpApi(body)
        .then((res) => {
          console.log("RESPONSE", res.data);
          console.log("MESSAGE", res.data.msg);
          if (res.data.status === 200) {
            setGetOtp(true);
            return toast.success(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err.response);
          return toast.error("Email is not registered");
        });
    } else {
      return toast.error("Email cannot be empty");
    }
  };

  return (
    <>
      <Header />
      <PageTitle
        title="Forgot Password"
        subTitle="Forgot your password? Don't worry, we got your back."
      />
      {getOtp ? (
        <CheckOtp email={email} />
      ) : (
        <main className={styles["main"]}>
          <form onSubmit={submitGetOtp} className={styles["form"]}>
            <input
              name="email"
              placeholder="Input your email"
              className={styles["email"]}></input>

            <button>Reset Password</button>
          </form>
        </main>
      )}
      <Footer />
    </>
  );
};

const CheckOtp = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [checkOtp, setCheckOtp] = useState(false);
  const [body, setBody] = useState({});

  const submitCheckOtp = (e) => {
    e.preventDefault();
    setOtp(e.target.otp.value);
    const body = {
      email: email,
      otp: otp
    };
    setBody(body);
    console.log("BODY", body);
    checkOtpAPi(body)
      .then((res) => {
        console.log(res.data.msg);
        if (res.data.status === 200) {
          setCheckOtp(true);
          return toast.success(res.data.msg);
        }
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
        return toast.error(err.response.data.msg);
      });
  };

  // console.log("PROPS CHECK OTP", data);
  return (
    <>
      {checkOtp ? (
        <ChangePassword body={body} />
      ) : (
        <main className={styles["main"]}>
          <form onSubmit={submitCheckOtp} className={styles["form"]}>
            <input
              name="otp"
              placeholder="Input your code OTP from email"
              className={styles["email"]}></input>

            <button>Check OTP</button>
          </form>
        </main>
      )}
    </>
  );
};

const ChangePassword = (props) => {
  const router = useRouter();
  const submitResetPassword = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (password !== password2) {
      return toast.error("your password doesn't match");
    }

    console.log(props);
    const body = {
      email: props.body.email,
      otp: props.body.otp,
      password: password
    };
    if (Object.values(body).length !== 0) {
      resetPasswordApi(body)
        .then((res) => {
          console.log("RESPONSE RESET", res.data.msg);
          toast.success(res.data.msg);
          setTimeout(() => {
            return router.push("/auth");
          }, 2000);
        })
        .catch((err) => {
          console.log("RESPONSE RESET", err.response);
          return toast.error(err.response.data.msg);
        });
    }
  };
  return (
    <main className={styles["main"]}>
      <form onSubmit={submitResetPassword} className={styles["form"]}>
        <input
          name="password"
          placeholder="Enter your new password"
          className={styles["email"]}></input>

        <input
          name="password2"
          placeholder="re-enter your password"
          className={styles["email"]}></input>

        <button>Reset Password</button>
      </form>
    </main>
  );
};

export default Forgot;
