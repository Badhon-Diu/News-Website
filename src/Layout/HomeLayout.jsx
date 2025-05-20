import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Leftside from "../Components/Leftside";
import Navbar from "../Components/Navabar";
import Rightside from "../Components/Rightside";

export default function HomeLayout() {
  return (
    <>
      <header>
        <Header></Header>
        <section className="w-11/12  mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12  mx-auto my-3">
          <Navbar></Navbar>
        </section>
      </header>

      <main className="w-11/12  mx-auto pt-5 grid md:grid-cols-12">
        <aside className="col-span-3">
          <Leftside></Leftside>
        </aside>
        <section className="col-span-6">Main</section>
        <aside className="col-span-3">
          <Rightside></Rightside>
        </aside>
      </main>
    </>
  );
}
