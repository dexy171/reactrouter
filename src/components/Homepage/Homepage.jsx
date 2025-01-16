import { useState } from "react";
import { ButtonWithMemo } from "../ButtonWithMemo/ButtonWithMemo";

export const Homepage = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h1>Homepage</h1>
      <p>This is homepage</p>
      <p>{count}</p>
      <ButtonWithMemo onButtonClick={handleClick} label="Increase" />
    </section>
  );
};
