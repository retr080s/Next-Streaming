import NavbarTop from "./components/NavbarTop";
import NavbarLeft from "./components/NavbarLeft";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import Recgames from "./components/Recgames";
import Recgta from "./components/Recgta";
import Recvalorant from "./components/Recvalorant";
import Recfortnite from "./components/Recfortnite";

export default function Home() {
  return (
    <>
      <NavbarTop />
      <NavbarLeft />
      <Featured />
      <Categories />
      <Recgames />
      <Recgta />
      <Recvalorant />
      <Recfortnite />
      <Footer />
    </>
  );
}
