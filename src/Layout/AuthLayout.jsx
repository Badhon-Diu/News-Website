import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navabar";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-[#f4f4f4] py-4">
        <header className="w-11/12 mx-auto mt-9 bg-[#f4f4f4]">
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </>
  );
}
