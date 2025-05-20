import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

export default function FindUs() {
  return (
    <>
      <div className="my-5">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
        <button className="w-full bg-blue-600 cursor-pointer text-white p-2 rounded mb-2 flex items-center justify-center">
          <FaFacebook className="mr-2" /> Facebook
        </button>
        <button className="w-full bg-blue-400 cursor-pointer text-white p-2 rounded mb-2 flex items-center justify-center">
          <FaSquareXTwitter className="mr-2" /> Twitter
        </button>
        <button className="w-full bg-pink-600 cursor-pointer text-white p-2 rounded flex items-center justify-center">
          <SiInstagram className="mr-2" /> Instagram
        </button>
      </div>
    </>
  );
}
