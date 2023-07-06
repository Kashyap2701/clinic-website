import { Button1, Section } from "../Util/CommonStyle";
import phyisotheraphy from "../assets/physiotheraphy.jpg";
import {
  MainSectionContainer,
  MainSectionTitle,
  MainSectionTextContainer,
  MainSectionSubtitle,
  MainSectionImage,
} from "../CSS/StyledComponents";

const HeadingSection = () => {
  return (
    <Section>
      <MainSectionContainer>
        <MainSectionTextContainer>
          <MainSectionTitle>
            Welcome to <span>The Physiotheraputic Clinic</span>
          </MainSectionTitle>
          <MainSectionSubtitle>
            we will help you to feel better and enjoy every single day.
          </MainSectionSubtitle>
          <Button1>Contact us</Button1>
        </MainSectionTextContainer>
        <MainSectionImage src={phyisotheraphy} alt="Physiotherapy" />
      </MainSectionContainer>
    </Section>
  );
};

export default HeadingSection;
