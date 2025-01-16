import React from "react";

export const ButtonWithMemo = React.memo(({ label, onButtonClick }) => {
  console.log("refreshed");

  return <button onClick={onButtonClick}>{label}</button>;
});
