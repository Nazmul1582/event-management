import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
