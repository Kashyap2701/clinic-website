import "./App.css";
import Blogs from "./components/Blogs";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import HeadingSection from "./components/HeadingSection";
import ReviewSection from "./components/ReviewSection";
import Services from "./components/Services";
import TreatmentOptionsSection from "./components/TreatmentOptionsSection";

function App() {
  return (
    <>
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
