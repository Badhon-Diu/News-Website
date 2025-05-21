// NewsCard.jsx
import { Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsCard({ singleNews }) {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden mx-2">
      <div className="bg-black/7 p-4 flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={singleNews.author.img}
          alt="Author"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {singleNews.author.name}
          </p>
          <p className="text-sm text-gray-500">
            2{singleNews.author.published_date}
          </p>
        </div>
        <p></p>
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-lg font-bold text-gray-800">{singleNews.title}</h2>

        <div className="mt-4">
          <img
            src={singleNews.thumbnail_url}
            alt="News"
            className="rounded-lg object-cover h-52 w-full"
          />
        </div>

        <p className="text-sm text-gray-600 mt-4">
          {singleNews.details.slice(0, 150)}...{" "}
          <Link className="text-blue-600 font-semibold">Read More</Link>
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" stroke="none" />
            ))}
            <span className="text-sm text-gray-700 ml-1">4.9</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Eye size={16} />
            <span className="text-sm">{singleNews.total_view || "200"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
