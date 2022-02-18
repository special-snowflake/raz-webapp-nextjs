import Image from "next/image";
import styles from "src/common/styles/Cart.module.css";
import icon from "src/assets/empty cart.svg";

export default function EmptyCart() {
  return (
    //   title your cart is empty
    <>
      <div className="container-fluid w-50 my-5 p-5">
          <div className={styles.emptyImg}>
          <Image src={icon} width={300} height={300}/>
          </div>
        <h1 className={styles.EmptyCartTitle}>Your Cart is Empty</h1>
        <p className={styles.EmptyCartDescription}>
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque
          a nunc vel diam auctor commodo. urabitur blandit ultri
        </p>
      </div>
    </>
  );
}
