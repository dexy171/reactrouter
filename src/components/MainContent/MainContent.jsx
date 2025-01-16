import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import styles from "./MainContent.module.css";
import { createContext } from "react";

export const UserContext = createContext();
export const EmployeesContext = createContext();

export const MainContent = () => {
  const user = { name: "Wojtek" };
  const employees = [
    {
      name: "Szymon",
      position: "CEO",
      aboutText:
        "This is some dummy text about Szymon. It's purely for the react context purposes.",
    },
    {
      name: "Marcin",
      position: "UX Designer",
      aboutText:
        "This is some dummy text about Marcin. It's purely for the react context purposes.",
    },
    {
      name: "Andrzej",
      position: "UI Designer",
      aboutText:
        "This is some dummy text about Andrzej. It's purely for the react context purposes.",
    },
  ];
  return (
    <main>
      <UserContext.Provider value={user}>
        <Navigation />
        <section className={styles.outletContainer}>
          <EmployeesContext value={employees}>
            <Outlet />
          </EmployeesContext>
        </section>
        <Footer />
      </UserContext.Provider>
    </main>
  );
};
