import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "src/common/components/header";
import PageTitle from "src/common/components/PageTitle";
import Footer from "src/common/components/footer";
import Logout from "src/common/components/Logout";
import styles from "src/common/styles/ProfileSeller.module.css";
import modalsCss from "src/common/styles/Modals.module.css";
import LoadingBox from "src/common/components/LoadingBox";

import photoDefault from "public/default.jpg";
import {
  getDetailByID,
  updateImage,
  updateProfile
} from "src/modules/utils/user";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { changePassword } from "src/modules/utils/auth";
import Routing from "src/common/components/Routing";
import MenuBar from "src/common/components/MenuBar";

function Profile(props) {
  const inputFileRef = React.createRef();
  const currentPasswordRef = React.createRef();
  const newPasswordRef = React.createRef();
  const repeatNewPasswordRef = React.createRef();
  const user = useSelector((state) => state.auth.userData);
  const [userDetail, setUserDetail] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [image, setImage] = useState(photoDefault);

  const [onName, setOnName] = useState(false);
  const [onGender, setOnGender] = useState(false);
  const [onEmail, setOnEmail] = useState(false);
  const [onDescription, setOnDescription] = useState(false);
  const [onStoreName, setOnStoreName] = useState(false);

  const inputImage = () => {
    inputFileRef.current.click();
  };

  const onHandleSubmit = (key, value) => {
    const body = {
      [key]: value
    };
    const { token } = user;
    console.log(body);
    updateProfile(body, token)
      .then((res) => {
        console.log(res);
        if (key === "name") {
          setOnName(false);
        }
        if (key === "gender") {
          setOnGender(false);
        }
        if (key === "email") {
          setOnEmail(false);
        }
        if (key === "storeName") {
          setOnStoreName(false);
        }
        if (key === "description") {
          setOnDescription(false);
        }
        setUserDetail({
          ...userDetail,
          ...{ [key]: value }
        });
        return toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.msg);
      });
  };

  const handlerEditPhoto = (e) => {
    const body = new FormData();
    const { token } = user;
    body.append("image", e.target.files[0]);
    updateImage(body, token)
      .then((res) => {
        console.log(res.data);
        const url = process.env.NEXT_PUBLIC_API_URL + res.data.data.image;
        console.log(url);
        setImage(url);
        return toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.msg);
      });
  };

  const handleChanePassword = () => {
    const oldPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const repeatNewPassword = repeatNewPasswordRef.current.value;
    if (!oldPassword || !newPassword || !repeatNewPassword) {
      return toast.warning(`Please fill all the field`);
    }
    if (oldPassword === newPassword) {
      return toast.warning(`Curent password can't be the same as new password`);
    }
    if (newPassword !== repeatNewPassword) {
      return toast.warning(
        "Repeat password should be the same as new password"
      );
    }
    const body = {
      oldPassword,
      newPassword
    };
    const { token } = user;
    console.log(body, token);
    changePassword(body, token)
      .then((res) => {
        console.log("success", res);
        return toast.success(res.data.msg || "Change Password Success");
      })
      .catch((err) => {
        console.log("err ", err);
        console.log("err ", err.response);
        toast.error(err.response.data.msg || "Failed to change password");
      });
  };
  const callbackLogout = (isShow) => {
    setShowLogout(isShow);
  };

  const getDetailUser = () => {
    const { id, token } = user;
    getDetailByID(id, token)
      .then((res) => {
        console.log(res.data);
        if (res.data.data[0].image) {
          const url = process.env.NEXT_PUBLIC_API_URL + res.data.data[0].image;
          setImage(url);
        }
        return setUserDetail(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <>
      <Header />
      <Routing type="private" user="all" />
      <PageTitle
        title="Profile"
        subTitle="See your notifications for the latest updates"
      />
      {userDetail && userDetail.roles === "1" ? <MenuBar /> : ""}
      <div className={styles.main}>
        {userDetail !== null ? (
          <>
            <div className={styles["wrapper-photo"]}>
              <div className={styles["wrapper-image"]}>
                <Image
                  src={image}
                  alt="user"
                  layout="fill"
                  objectFit="cover"
                  className={styles.image2}
                  onError={() => {
                    setImage(photoDefault);
                  }}
                />
                <input
                  type="file"
                  name="photoUser"
                  hidden
                  ref={inputFileRef}
                  onChange={(e) => {
                    handlerEditPhoto(e);
                  }}
                />
                <button className={styles["edit-photo"]} onClick={inputImage}>
                  <i
                    className={`bi bi-pencil-fill ms-2 ${styles["icon"]}`}
                    style={{ marginLeft: 0 }}></i>
                </button>
              </div>

              <div className={styles["wrapper-title"]}>
                {onName ? (
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        console.log("submit", e.target);
                        onHandleSubmit("name", e.target.name.value);
                      }}>
                      <input
                        type="text"
                        placeholder="Please Enter Your Name"
                        name="name"
                        className={styles.inputField}
                        defaultValue={userDetail.name || ""}
                      />
                      <button className={styles.btnSave} type="submit">
                        <i className="bi bi-check-circle-fill"></i>
                      </button>
                      <button
                        className={styles.btnCancel}
                        onClick={(e) => {
                          e.preventDefault();
                          setOnName(false);
                        }}>
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    </form>
                  </div>
                ) : (
                  <p className={styles["title-name"]}>
                    {userDetail.name !== null ? userDetail.name : "-"}
                    <i
                      className={`bi bi-pencil-fill ms-2 ${styles["icon"]}`}
                      onClick={() => setOnName(true)}></i>
                  </p>
                )}

                <p className={styles["title-role"]}>
                  as {userDetail.roles === "1" ? "Seller" : "Customer"}
                </p>
              </div>
            </div>

            <div className={styles["wrapper"]}>
              <div className={styles["wrapper-form"]}>
                <div className={styles["wrapper-input"]}>
                  <p className={styles["title-gender"]}>Gender</p>
                  {onGender ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        console.log("submit", e.target);
                        onHandleSubmit("gender", e.target.gender.value);
                      }}>
                      <input
                        type="radio"
                        name="gender"
                        id="f"
                        defaultValue="f"
                      />
                      <label htmlFor="f" className={styles.inputLabel}>
                        Female
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        id="m"
                        defaultValue="m"
                      />
                      <label htmlFor="m" className={styles.inputLabel}>
                        Male
                      </label>
                      <button className={styles.btnSave} type="submit">
                        <i className="bi bi-check-circle-fill"></i>
                      </button>
                      <button
                        className={styles.btnCancel}
                        onClick={(e) => {
                          e.preventDefault();
                          setOnGender(false);
                        }}>
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    </form>
                  ) : (
                    <p className={styles.gender}>
                      {userDetail.gender === "f"
                        ? "Female"
                        : userDetail.gender === "m"
                        ? "Male"
                        : "-"}
                    </p>
                  )}
                </div>
                {!onGender && (
                  <p
                    className={styles.edit}
                    onClick={() => {
                      setOnGender(true);
                    }}>
                    Edit <i className="bi bi-pencil-fill ms-2"></i>
                  </p>
                )}
              </div>
            </div>

            <div className={styles["wrapper"]}>
              <div className={styles["wrapper-form"]}>
                <div className={styles["wrapper-input"]}>
                  <p className={styles["title-gender"]}>Your Email</p>
                  {onEmail ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        console.log("submit", e.target);
                        onHandleSubmit("name", e.target.name.value);
                      }}>
                      <input
                        type="text"
                        placeholder="Please Enter Your Email"
                        name="name"
                        defaultValue={userDetail.email}
                        className={styles.inputField}
                      />
                      <button className={styles.btnSave} type="submit">
                        <i className="bi bi-check-circle-fill"></i>
                      </button>
                      <button
                        className={styles.btnCancel}
                        onClick={(e) => {
                          e.preventDefault();
                          setOnEmail(false);
                        }}>
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    </form>
                  ) : (
                    <p className={styles.gender}>{userDetail.email}</p>
                  )}
                </div>
                {!onEmail && (
                  <p
                    className={styles.edit}
                    onClick={() => {
                      setOnEmail(true);
                    }}>
                    Edit <i className="bi bi-pencil-fill ms-2"></i>
                  </p>
                )}
              </div>
            </div>

            {userDetail.roles === "1" && (
              <>
                <div className={styles["wrapper"]}>
                  <div className={styles["wrapper-form"]}>
                    <div className={styles["wrapper-input"]}>
                      <p className={styles["title-gender"]}>Store Name</p>
                      {onStoreName ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            console.log("submit", e.target);
                            onHandleSubmit(
                              "storeName",
                              e.target.storeName.value
                            );
                          }}>
                          <input
                            type="text"
                            placeholder="Please Enter Your Store Name"
                            name="storeName"
                            defaultValue={userDetail.storeName || ""}
                            className={styles.inputField}
                          />
                          <button className={styles.btnSave} type="submit">
                            <i className="bi bi-check-circle-fill"></i>
                          </button>
                          <button
                            className={styles.btnCancel}
                            onClick={(e) => {
                              e.preventDefault();
                              setOnStoreName(false);
                            }}>
                            <i className="bi bi-x-circle-fill"></i>
                          </button>
                        </form>
                      ) : (
                        <p className={styles.gender}>
                          {userDetail.storeName || "-"}
                        </p>
                      )}
                    </div>
                    {!onStoreName && (
                      <p
                        className={styles.edit}
                        onClick={() => {
                          setOnStoreName(true);
                        }}>
                        Edit <i className="bi bi-pencil-fill ms-2"></i>
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles["wrapper"]}>
                  <div className={styles["wrapper-form"]}>
                    <div className={styles["wrapper-input"]}>
                      <p className={styles["title-gender"]}>
                        Store Description
                      </p>
                      {onDescription ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            console.log("submit", e.target);
                            onHandleSubmit(
                              "description",
                              e.target.description.value
                            );
                          }}>
                          <textarea
                            placeholder="Please Enter Your Store Description"
                            name="description"
                            defaultValue={userDetail.description || ""}
                            className={styles.inputTextArea}></textarea>
                          <button className={styles.btnSave} type="submit">
                            <i className="bi bi-check-circle-fill"></i>
                          </button>
                          <button
                            className={styles.btnCancel}
                            onClick={(e) => {
                              e.preventDefault();
                              setOnDescription(false);
                            }}>
                            <i className="bi bi-x-circle-fill"></i>
                          </button>
                        </form>
                      ) : (
                        <p className={styles.gender}>
                          {userDetail.description || "-"}
                        </p>
                      )}
                    </div>

                    {!onDescription && (
                      <p
                        className={styles.edit}
                        onClick={() => {
                          setOnDescription(true);
                        }}>
                        Edit <i className="bi bi-pencil-fill ms-2"></i>
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
            <div className="mb-2 h-auto">
              <button
                className={styles["btn-reset-password"]}
                onClick={(e) => {
                  e.preventDefault();
                  setShowResetPassword(true);
                }}>
                <i className="bi bi-lock"></i> Reset Password
              </button>
            </div>
            <button
              className={styles["btn-logout"]}
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked logout");
                setShowLogout(true);
              }}>
              <i className="bi bi-box-arrow-right"></i> LOGOUT
            </button>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <LoadingBox />
          </div>
        )}
      </div>
      <Modal show={showResetPassword}>
        <Modal.Header>
          <p className={modalsCss["header"]}>Reset Password</p>
          <button
            type="button"
            className={`${modalsCss["close-btn"]}`}
            data-bs-dismiss="modal"
            aria-label="close"
            onClick={() => {
              setShowResetPassword(false);
            }}>
            <i className="bi bi-x"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.passwordWrapper}>
            <i className="bi bi-shield-lock"></i>
            <input
              type="password"
              placeholder="Enter Your Current Password"
              ref={currentPasswordRef}
            />
            <i
              className={`bi bi-eye-slash right ${styles.passwordEye}`}
              onClick={() => {
                if (currentPasswordRef.current.type === "text") {
                  currentPasswordRef.current.type = "password";
                } else {
                  currentPasswordRef.current.type = "text";
                }
              }}></i>
          </div>
          <br />
          <div className={styles.passwordWrapper}>
            <i className="bi bi-shield-lock"></i>
            <input
              type="password"
              placeholder="Enter New Password"
              ref={newPasswordRef}
            />
            <i
              className={`bi bi-eye-slash right ${styles.passwordEye}`}
              onClick={() => {
                if (newPasswordRef.current.type === "text") {
                  newPasswordRef.current.type = "password";
                } else {
                  newPasswordRef.current.type = "text";
                }
              }}></i>
          </div>
          <br />
          <div className={styles.passwordWrapper}>
            <i className="bi bi-shield-lock"></i>
            <input
              type="password"
              placeholder="Repeat New Password"
              ref={repeatNewPasswordRef}
            />
            <i
              className={`bi bi-eye-slash right ${styles.passwordEye}`}
              onClick={() => {
                if (repeatNewPasswordRef.current.type === "text") {
                  repeatNewPasswordRef.current.type = "password";
                } else {
                  repeatNewPasswordRef.current.type = "text";
                }
              }}></i>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setShowResetPassword(false);
            }}
            className={`btn ${modalsCss["btn-gray"]}`}>
            Cancel
          </button>
          <button
            className={`btn ${modalsCss["btn-black"]} float-start`}
            onClick={handleChanePassword}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
      {/* <ProfileSeller /> */}
      <Logout isShow={showLogout} callbackShow={callbackLogout} />
      <Footer />
    </>
  );
}

export default Profile;
