import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navlist}>
      <ul>
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
      </ul>
    </nav>
  );
};
