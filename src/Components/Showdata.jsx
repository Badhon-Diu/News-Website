import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function Showdata() {
  const { data } = useLoaderData();

  console.log(data);
  return (
    <>
     <div className="space-y-5">
         <h1 className="text-2xl font-bold">Dragon News Home</h1>
      <div className="flex flex-col gap-4">
        {data.map((singleNews) => (
          <NewsCard singleNews={singleNews}></NewsCard>
        ))}
      </div>
     </div>
    </>
  );
}
