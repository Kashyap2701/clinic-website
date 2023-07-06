import "./App.css";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import HeadingSection from "./components/HeadingSection";
import Navbar from "./components/Navbar";
import ReviewSection from "./components/ReviewSection";
import Services from "./components/Services";
import TreatmentOptionsSection from "./components/TreatmentOptionsSection";

function App() {
  return (
    <>
      <Navbar />
      {/* <AboutUs /> */}
      <HeadingSection />
      <TreatmentOptionsSection />
      <Services />
      <Experts />
      <ReviewSection />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
