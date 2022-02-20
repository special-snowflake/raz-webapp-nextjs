import { useState } from "react";
import css from "src/common/styles/BlogPost.module.css";
import blogImg from "src/assets/b_CURTAIN-ZEITRAUM-4.png";
import Image from "next/image";


export default function BlogAside() {
    const [selects, setSelect] = useState("select month");
    return (
      <>
        <section>
          <p className={css.contentTitle}>
            <strong> Categories</strong>
          </p>
          <form>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="search"
              />
            </div>
          </form>
          <div className={css.blogAsideList}>
            <ul className="list-group">
              <li className="list-group-item">
                <p>Cras justo odio</p>
                <p>2</p>
              </li>
              <li className="list-group-item">
                <p>Cras justo odio</p>
                <p>2</p>
              </li>
              <li className="list-group-item">
                <p>Cras justo odio</p>
                <p>4</p>
              </li>
              <li className="list-group-item">
                <p>Cras justo odio</p>
                <p>1</p>
              </li>
              <li className="list-group-item">
                <p>Cras justo odio</p>
                <p>6</p>
              </li>
            </ul>
          </div>
        </section>
  
        {/*  */}
        <section>
          <p className={css.contentTitle}>
            <strong>Recent News</strong>
          </p>
          <div className={`${css.recentNews} d-flex align-items-center`}>
            <Image src={blogImg} width={75} height={75} />
            <div>
              <p className={css.recentNewsTitle}>How To Put Movies On Iphone</p>
              <p className={css.recentNewsTime}>24 Apr 2019, 45 mins ago</p>
            </div>
          </div>
        </section>
  
        {/* archives */}
        <section>
          <p className={css.contentTitle}>
            <strong>Archives</strong>
          </p>
          <div className="btn-group">
            <select
              className={css.checkoutBtnNmbr}
              value={selects}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="" disabled selected>
                Select Month
              </option>
              <option>January</option>
              <option>Select Month</option>
            </select>
          </div>
        </section>
        {/*  */}
        <section>
          <p className={css.contentTitle}>
            <strong>Tags</strong>
          </p>
          <div className={css.tagsWrapper}>
            <button className="btn btn-outline-secondary">one</button>
            <button className="btn btn-outline-secondary">Eleven</button>
            <button className="btn btn-outline-secondary">three</button>
            <button className="btn btn-outline-secondary">one</button>
            <button className="btn btn-outline-secondary">one</button>
            <button className="btn btn-outline-secondary">one</button>
            <button className="btn btn-outline-secondary">one</button>
          </div>
        </section>
  
        {/* advertisment */}
        <section>
          <div>
            <div className={css.ads}>
              <Image src={blogImg} width="350" height="350" />
            <div className={css.adsContact}>
              <p>Advertosment +08123112</p>
            </div>
            </div>
          </div>
        </section>
      </>
    );
  };