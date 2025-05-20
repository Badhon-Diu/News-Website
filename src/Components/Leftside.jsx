import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Leftside() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data.data.news_category));
  }, []);
  console.log(categories);
  return (
    <>
      <div>
        {" "}
        <h2 className="font-semibold mb-4">All Category </h2>
        <div className="flex flex-col">
          {categories.map((singlecategory) => (
            <NavLink
              key={singlecategory.category_id}
              to={`/category/${singlecategory.category_id}`}
              className=" font-semibold  cursor-pointer p-4 mt-1  hover:bg-black/10"
            >
              {singlecategory.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
