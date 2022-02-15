import styles from "src/common/styles/Navbar.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles["wrapper-header"]}>
      <Link href="/" passHref>
        <p className={styles.logo}>RAZ</p>
      </Link>
    </header>
  );
}

export default Header;
