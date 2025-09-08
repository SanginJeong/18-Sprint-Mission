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
      <main className="homepage-layout">
        <LandingTop />
        <SectionHotItem />
        <SectionSearch />
        <SectionRegister />
        <LandingBottom />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
