import { Link } from "react-router-dom";
import { menuConfig } from "../../config/menu";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      {menuConfig.map((item) => (
        <Link to={item.url} key={item.url} className={styles.link}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
