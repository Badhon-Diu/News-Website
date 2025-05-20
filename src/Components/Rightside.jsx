import Ads from "./Ads";
import FindUs from "./FindUs";
import Sociallogin from "./Sociallogin";

export default function Rightside() {
  return (
    <>
      <div className="space-y-4">
        <Sociallogin></Sociallogin>
        <FindUs></FindUs>
        <Ads></Ads>
      </div>
    </>
  );
}
