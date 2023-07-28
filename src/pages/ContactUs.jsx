// import React from "react";
import styled from "styled-components";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import { MdWatchLater } from "react-icons/md";
const ContactContainer = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: fit-content;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SectionDesription = styled.div`
  margin-top: 20px;
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 2rem;
  background-color: white;
  border-radius: 0.8rem;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #c1c1c1;
  border-radius: 5px;
  outline: none;
  font-weight: 500;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #c1c1c1;
  border-radius: 5px;
  outline: none;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:active {
    transform: scale(0.95);
  }
`;

const WorkingHours = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  svg {
    /* color: white; */
    font-size: 20px;
    margin-right: 10px;
  }
`;

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div>
      <Section>
        <ContactContainer>
          <ContactInfo>
            <SectionTitle>Get in Touch Witch Us</SectionTitle>
            <WorkingHours>
              <MdWatchLater />
              Monday - Friday, 9:00 AM - 5:00 PM
            </WorkingHours>
            <SectionDesription>
              For general questions, please send us a message and we’ll get
              right back to you. You can also call us directly to speak with a
              member of our service team or insurance expert.
            </SectionDesription>
          </ContactInfo>
          <Form onSubmit={handleSubmit}>
            <Input type="text" id="name" placeholder="Name" />
            <Input type="email" id="email" placeholder="Email" />
            <TextArea id="message" rows="5" placeholder="Message" />
            <Button type="submit">Submit</Button>
          </Form>
        </ContactContainer>
      </Section>
      <SectionContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.8388510196887!2d72.63401033903622!3d23.181960394765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf9f68f9a75%3A0x7ad1fbc1572ef282!2sThe%20Physio%20Therapeutic%20Clinic!5e0!3m2!1sen!2sin!4v1688458945407!5m2!1sen!2sin"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
      </SectionContainer>
    </div>
  );
};

export default ContactUs;
