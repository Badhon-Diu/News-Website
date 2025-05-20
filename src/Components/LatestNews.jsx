import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function LatestNews() {
  return (
    <>
      <div className="flex h-14  bg-base-300 rounded-lg justify-center gap-3 items-center   ">
        <p className="bg-red-500 text-xs m-4 px-2 py-1 rounded-lg text-white">
          Latest News
        </p>

        <Marquee speed={80} pauseOnHover={true} className="space-x-10">
          <Link to=" /update">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            soluta deserunt quis?
          </Link>
          <Link to=" /update">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a
            sequi suscipit.{" "}
          </Link>
          <Link to=" /update">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
            voluptatum impedit? Quaerat deleniti nemo nisi similique eos eveniet
            dolorum voluptatum veniam? Et, cum.
          </Link>
          <Link to=" /update">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.
          </Link>
        </Marquee>
      </div>
    </>
  );
}
