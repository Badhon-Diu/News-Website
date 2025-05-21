import { useContext } from "react";
import { Link } from "react-router-dom";
import User from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
export default function Navbar() {
  const { userdata, signout } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-between items-center my-3">
        <div></div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>
          <Link>Career</Link>
          <Link>About</Link>
        </div>
        <div className="login flex gap-3 items-center">
          <img src={User} alt="" />
          <button className="bg-gray-900 px-6 py-2 text-white">
            {" "}
            {userdata ? (
              <Link onClick={signout} to="/auth/login">
                Log Out
              </Link>
            ) : (
              <Link to="/auth/login">LogIn</Link>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
