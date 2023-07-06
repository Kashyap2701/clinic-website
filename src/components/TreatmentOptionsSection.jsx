import { FaHospital, FaStethoscope } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdLocalHospital } from "react-icons/md";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import {
  TreatmentOptionsContainer,
  TreatmentOption,
  TreatmentOptionDescription,
  TreatmentOptionIcon,
  TreatmentOptionTitle,
} from "../CSS/StyledComponents";

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
