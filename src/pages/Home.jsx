/* eslint-disable no-unused-vars */
import React from "react";
import Blogs from "../components/Blogs";
import Experts from "../components/Experts";
import HeadingSection from "../components/HeadingSection";
import ReviewSection from "../components/ReviewSection";
import Services from "../components/Services";
import TreatmentOptionsSection from "../components/TreatmentOptionsSection";

const Home = () => {
  return (
    <>
      <HeadingSection />
      <TreatmentOptionsSection />
      <Services />
      <Experts />
      <ReviewSection />
      <Blogs />
    </>
  );
};

export default Home;
