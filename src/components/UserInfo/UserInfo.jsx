import { useContext } from "react";
import { UserContext } from "../MainContent/MainContent";
import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  const user = useContext(UserContext);
  const name = user?.name;
  if (!name) {
    return <button className={styles.login}>Zaloguj</button>;
  }
  return <div className={styles.userContainer}>Hello, {name}</div>;
};
