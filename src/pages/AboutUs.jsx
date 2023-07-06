// import React from "react";
import styled from "styled-components";
import { SectionTitle, Underline } from "../Util/CommonStyle";
import image1 from "../assets/ClinicPhoto1.jpg";
import image2 from "../assets/ClinicPhoto2.jpg";
import image3 from "../assets/ClinicPhoto3.jpg";
import image4 from "../assets/ClinicPhoto4.jpg";
import image5 from "../assets/ClinicPhoto5.jpg";
import ImageGallery from "../components/ImageGallery";

const AboutUsSection = styled.section`
  padding: 3rem;
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ValueCard = styled.div`
  flex: 1;
  margin: 0 1rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ValueTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const AboutUs = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <AboutUsSection>
      <SectionTitle style={{ textAlign: "center" }}>
        About Our Clinic
      </SectionTitle>
      <Underline />
      <ValuesContainer>
        <ValueCard>
          <ValueTitle>Quality Care</ValueTitle>
          <ValueDescription>
            We are committed to providing high-quality care to our patients,
            ensuring their well-being and satisfaction.
          </ValueDescription>
        </ValueCard>
        <ValueCard>
          <ValueTitle>Experienced Staff</ValueTitle>
          <ValueDescription>
            Our clinic is staffed with experienced professionals who are
            dedicated to delivering exceptional healthcare services.
          </ValueDescription>
        </ValueCard>
        <ValueCard>
          <ValueTitle>Personalized Approach</ValueTitle>
          <ValueDescription>
            We believe in tailoring our treatments to meet the unique needs of
            each patient, providing personalized care and attention.
          </ValueDescription>
        </ValueCard>
      </ValuesContainer>
      <SectionTitle style={{ textAlign: "center" }}>Clinic Tour</SectionTitle>
      {/* <Underline /> */}
      <ImageGallery images={images} />
    </AboutUsSection>
  );
};

export default AboutUs;
