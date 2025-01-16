import { useContext } from "react";
import { EmployeesContext } from "../MainContent/MainContent";

export const AboutUs = () => {
  const employees = useContext(EmployeesContext);

  return (
    <section>
      <h1>About us:</h1>
      {employees.map((person) => (
        <div>
          <h2>{person.name}</h2>
          <span>{person.position}</span>
          <p>{person.aboutText}</p>
        </div>
      ))}
    </section>
  );
};
