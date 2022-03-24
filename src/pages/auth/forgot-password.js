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

function Forgot(props) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [checkOtp, setCheckOtp] = useState(false);
  const [reset, setReset] = useState(false);
  const [body, setBody] = useState({});

  const submitHandlerGetOtp = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value
    };
    // console.log(body);
    getOtpApi(body)
      .then((res) => {
        // console.log(res);
        setBody({ ...body, email: body.email });
        setCheckOtp(true);

        return toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
        return toast.error(res.data.msg);
      });
  };

  const submitHandlerResetPassword = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      otp: e.target.otp.value,
      password: e.target.newpassword.value
    };
    console.log("BODY RESET PASSWORD", body);
    setBody(body);
    checkOtpAPi(body)
      .then((res) => {
        console.log(res.data.msg);
        if (res.data.status === 200) {
          setReset(true);
        }
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err.response);
        return toast.error(err.response.data.msg);
      });
  };
  useEffect(() => {
    if (reset) {
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
  }, [reset]);

  return (
    <>
      <Header />
      <PageTitle
        title="Forgot Password"
        subTitle="Forgot your password? Don't worry, we got your back."
      />

      {checkOtp ? (
        <main className={styles["main"]}>
          <form
            onSubmit={submitHandlerResetPassword}
            className={styles["form"]}>
            <input
              name="email"
              value={body.email}
              placeholder="Your email address *"
              className={styles["email"]}></input>

            <input
              name="otp"
              placeholder="Input your code OTP from email"
              className={styles["email"]}></input>

            <input
              name="newpassword"
              placeholder="Your new password"
              className={styles["email"]}></input>
            <button>Reset Password</button>
          </form>
        </main>
      ) : (
        <main className={styles["main"]}>
          <form onSubmit={submitHandlerGetOtp} className={styles["form"]}>
            <input
              name="email"
              placeholder="Your email address *"
              className={styles["email"]}></input>
            <button>Reset Password</button>
          </form>
        </main>
      )}

      <Footer />
    </>
  );
}

export default Forgot;
