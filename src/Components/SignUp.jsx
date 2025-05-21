import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function SignUp() {
  const { createUser } = useContext(AuthContext);

  const [userdata, setuserdata] = useState({
    name: "",
    photourl: "",
    email: "",
    password: "",
  });

  function handleOnchange(e) {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className=" flex justify-center my-12">
        <div className="bg-white px-8 py-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Register your account
          </h2>

          <form>
            {/* Name */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                value={userdata.name}
                onChange={handleOnchange}
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Photo URL</label>
              <input
                onChange={handleOnchange}
                type="text"
                value={userdata.photourl}
                name="photourl"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                onChange={handleOnchange}
                value={userdata.email}
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Password</label>
              <input
                onChange={handleOnchange}
                value={userdata.password}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
              />
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center mb-6">
              <input id="terms" type="checkbox" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                Accept{" "}
                <span className="font-semibold">Term &amp; Conditions</span>
              </label>
            </div>
            {/* Register Button */}
            <button
              onClick={(e) =>
                createUser(
                  e,
                  userdata.name,
                  userdata.photourl,
                  userdata.email,
                  userdata.password
                )
              }
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
