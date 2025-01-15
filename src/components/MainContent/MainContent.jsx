import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <main>
      <Navigation />
      <section className={styles.outletContainer}>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
