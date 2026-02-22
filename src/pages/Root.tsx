import { Outlet } from "react-router";

const Root = () => {
  return (
    <main className="  min-h-full">
      <Outlet />
    </main>
  );
};

export default Root;
