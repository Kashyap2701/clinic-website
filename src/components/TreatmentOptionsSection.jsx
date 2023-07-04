import styled from "styled-components";
import { FaHospital, FaStethoscope } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdLocalHospital } from "react-icons/md";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";

const TreatmentOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TreatmentOption = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
`;

const TreatmentOptionIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #001a79;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    font-size: x-large;
  }
`;

const TreatmentOptionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--secondary-color);
`;

const TreatmentOptionDescription = styled.p`
  font-size: 16px;
  color: #888888;
`;

const TreatmentOptionsSection = () => {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Treatment Options</SectionTitle>
        <TreatmentOptionsContainer>
          {/* Clinic Treatment */}
          <TreatmentOption>
            <TreatmentOptionIcon>
              <FaHospital />
            </TreatmentOptionIcon>
            <TreatmentOptionTitle>In-Clinic Treatment</TreatmentOptionTitle>
            <TreatmentOptionDescription>
              Receive professional treatment at our clinic.
            </TreatmentOptionDescription>
          </TreatmentOption>
          {/* Home Visist */}
          <TreatmentOption>
            <TreatmentOptionIcon>
              <IoHome />
            </TreatmentOptionIcon>
            <TreatmentOptionTitle>Home Visit</TreatmentOptionTitle>
            <TreatmentOptionDescription>
              Get personalized treatment in the comfort of your own home.
            </TreatmentOptionDescription>
          </TreatmentOption>
          {/* Hospital Visit */}
          <TreatmentOption>
            <TreatmentOptionIcon>
              <MdLocalHospital />
            </TreatmentOptionIcon>
            <TreatmentOptionTitle>Hospital Visit</TreatmentOptionTitle>
            <TreatmentOptionDescription>
              Receive treatment at a hospital or medical facility.
            </TreatmentOptionDescription>
          </TreatmentOption>
          {/* Consultation */}
          <TreatmentOption>
            <TreatmentOptionIcon>
              <FaStethoscope />
            </TreatmentOptionIcon>
            <TreatmentOptionTitle>Consultation</TreatmentOptionTitle>
            <TreatmentOptionDescription>
              Seek expert advice through consultation sessions.
            </TreatmentOptionDescription>
          </TreatmentOption>
        </TreatmentOptionsContainer>
      </SectionContainer>
    </Section>
  );
};

export default TreatmentOptionsSection;
