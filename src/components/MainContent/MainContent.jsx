import { Outlet } from "react-router-dom";

export const MainContent = () => {
  return (
    <main>
      <div>Nav</div>
      <Outlet />
      <div>Footer</div>
    </main>
  );
};
