import { useEffect, useState } from "react";

export default function Leftside() {
  const [catagories, setcatagories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setcatagories(data));
  }, []);
  console.log(catagories)
  return (
    <>
      <div>
        {" "}
        <h2 className="font-semibold mb-4">All Category </h2>
        <ul>
          {catagories.map((singlecatagory) => (
            <li className=" font-semibold  cursor-pointer p-4 mt-1  hover:bg-black/10">
             {singlecatagory.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
