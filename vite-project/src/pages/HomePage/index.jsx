import "./HomePage.style.css";
import Footer from "./components/Footer";
import LandingBottom from "./components/LandingBottom";
import LandingTop from "./components/LandingTop";
import Section from "./components/Section";

const HomePage = () => {
  return (
    <>
      <main className="homepage-layout">
        <LandingTop />
        <Section />
        <LandingBottom />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
