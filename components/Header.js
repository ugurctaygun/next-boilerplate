import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/product-list">
          <a>Products</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
