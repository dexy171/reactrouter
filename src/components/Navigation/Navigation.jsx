import { Link } from "react-router-dom";
import { navConfig } from "../../config/navigation";
import styles from "./Navigation.module.css";
import { UserInfo } from "../UserInfo/UserInfo";

export const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      {navConfig.map((item) => (
        <Link to={item.url} key={item.url} className={styles.link}>
          {item.label}
        </Link>
      ))}
      <UserInfo />
    </nav>
  );
};
