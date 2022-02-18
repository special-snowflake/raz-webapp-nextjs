import css from "src/common/styles/ProfileSeller.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import photoDefault from "public/userDefault.webp";

function ProfileSeller() {
  return (
    <main className={css.main}>
      <div className={css["wrapper-photo"]}>
        <div className={css["wrapper-image"]}>
          <Image
            src={photoDefault}
            alt="photo0user"
            width={120}
            height={120}
            className="photo-user"
          />
          <p className={css["edit-photo"]}>
            Edit
            <i
              className={`bi bi-pencil-fill ms-2 ${css["icon"]}`}
              style={{ marginLeft: 0 }}></i>
          </p>
        </div>
        <div className={css["wrapper-title"]}>
          <p className={css["title-name"]}>
            Syifa
            <i className={`bi bi-pencil-fill ms-2 ${css["icon"]}`}>
              <span className={css["tooltiptext"]}>Edit</span>
            </i>
          </p>
          <p className={css["title-role"]}>as Seller</p>
        </div>
      </div>
    </main>
  );
}

export default ProfileSeller;
