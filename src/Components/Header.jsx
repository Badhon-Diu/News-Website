import moment from "moment";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 py-2">
        <div className="logo">
          <img className="w-[300px]" src={Logo} alt="" />
        </div>
        <h1 className="text-gray-400">Jurnalism Without Fear and Favour</h1>
        <h1>{moment().format("dddd, MMMM Do YYYY")}</h1>
      </div>
    </>
  );
}
