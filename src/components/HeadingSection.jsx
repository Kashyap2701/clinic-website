import styled from "styled-components";
import { Button1, Section } from "../Util/CommonStyle";
import phyisotheraphy from "../assets/physiotheraphy.jpg";

const MainSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const MainSectionTextContainer = styled.div`
  flex: 1;
`;

const MainSectionTitle = styled.h1`
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 2rem;
  span {
    color: var(--secondary-color);
  }
`;

const MainSectionSubtitle = styled.h3`
  color: #777777;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;

const MainSectionImage = styled.img`
  height:100%
  width: 100%;
  max-width: 500px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

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
