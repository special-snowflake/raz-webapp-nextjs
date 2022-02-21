import styles from "src/common/styles/CardSellerProduct.module.css";
import Image from "next/image";
import pic from "src/assets/b_OKITO-PLY-DINING-Chair-3.png";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";

export default function CardProduct({ name, id, price, stock }) {
 
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  })

  const router = useRouter();
  const productId = router.query.productId;
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  console.log(id);
  return (
    <>
      <div className={styles.rowContent}>
        <div className={`${styles.card} row`} key={id}>
          <div className={`${styles.productpicture} col-6 col-md-6`}>
            <Image
              src={pic}
              width={170}
              height={170}
              layout="intrinsic"
              alt="pic"
            />
            <p>{name}</p>
          </div>
          <div className="col-4 col-md-3">
            <p>
              <i className="bi bi-check-circle"></i>
              {stock !== null ? stock : " - "}
              Stock
            </p>
            {/* className={styles.productStock} */}
          </div>
          <div className={`${styles.price} col-4 col-md-3`}>
            <p>{price !== null ? price : " - "}</p>
            <button
              type="button"
              className="btn btn-danger"
              key={id}
              value={id}
              onClick={handleClick}
            >
              Delete{id}
            </button>
            <button onClick={() => setShow(true)}>test modal</button>
          </div>
        </div>
      </div>
      <DeleteModal onClose={() => setShow(false)} show={show} />
    </>
  );
}

function DeleteModal() {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-secondary">cancel</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </>
  );
}
