import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const { signin } = useContext(AuthContext);

  const [userlogindata, setuserlogindata] = useState({
    email: "",
    password: "",
  });

  function handleOnchage(e) {
    setuserlogindata({ ...userlogindata, [e.target.name]: e.target.value });
  }

  console.log(userlogindata);

  return (
    <>
      <div className="flex justify-center items-center my-16 ">
        <div className="bg-white px-8 py-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login your account
          </h2>
          <hr className="mb-6" />
          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email address</label>
              <input
                name="email"
                onChange={handleOnchage}
                value={userlogindata.email}
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Password */}
            <div className="mb-6">
              <label className="block font-semibold mb-1">Password</label>
              <input
                name="password"
                onChange={handleOnchage}
                value={userlogindata.password}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Login Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                signin(userlogindata.email, userlogindata.password);
              }}
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold mb-4"
            >
              Login
            </button>
            {/* Register Link */}
            <p className="text-center text-sm">
              Don’t Have An Account ?
              <Link to="/auth/signup" className="text-red-500 font-medium">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
