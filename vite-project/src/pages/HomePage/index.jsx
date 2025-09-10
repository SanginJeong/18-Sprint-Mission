import MainNavbar from "../../common/MainNavbar";
import "./HomePage.style.css";
import Footer from "./components/Footer";
import { LandingTop, LandingBottom } from "./components/Landing";
import {
  SectionSearch,
  SectionHotItem,
  SectionRegister,
} from "./components/Section";

const HomePage = () => {
  return (
    <>
      <MainNavbar />
      <LandingTop />
      <div className="wrap">
        <div className="container">
          <main>
            <SectionHotItem />
            <SectionSearch />
            <SectionRegister />
          </main>
        </div>
      </div>
      <LandingBottom />
      <Footer />
    </>
  );
};

export default HomePage;
