import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
