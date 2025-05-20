import { Link } from "react-router-dom";
import User from "../assets/user.png"
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <div></div>
        <div className="nav space-x-5">
          <Link>Home</Link>
          <Link>Career</Link>
          <Link>About</Link>
        </div>
        <div className="login flex gap-3 items-center">
            <img src={User} alt="" srcset="" />
            <button className="bg-gray-900 px-6 py-2 text-white">Login</button>
        </div>
      </div>
    </>
  );
}
