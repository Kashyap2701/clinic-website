// import React from "react";
import styled from "styled-components";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { Section, SectionContainer } from "../Util/CommonStyle";

const FooterGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  width: 400px;
  margin: 1rem;
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-items: start; */
`;

const FooterLink = styled.a`
  color: #888888;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #001a79;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FooterTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #001a79;
`;

const ContactInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactIcon = styled.span`
  display: flex;
  color: #001a79;
  font-size: 1.5em;
  margin-right: 1rem;
`;

const ContactText = styled.p`
  font-size: 16px;
  color: #888888;
  margin: 0;
  text-align: initial;
`;

const LocationMapContainer = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  iframe {
    border: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #888888;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #001a79;
  }
`;

const CopyrightContainer = styled.p`
  text-align: center;
  color: #888888;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Section>
      <SectionContainer>
        <FooterGrid>
          {/* -----------------Contact Details---------------- */}
          <FooterColumn>
            <ContactDetails>
              <FooterTitle>Contact Details</FooterTitle>
              <ContactInfo>
                <ContactIcon>
                  <IoIosMail />
                </ContactIcon>
                <ContactText>thephysiotheraputicclinic@gmail.com</ContactText>
              </ContactInfo>
              <ContactInfo>
                <ContactIcon>
                  <IoCall />
                </ContactIcon>
                <ContactText> +91 9727162550</ContactText>
              </ContactInfo>
              <ContactInfo>
                <ContactIcon>
                  <IoLocationSharp />
                </ContactIcon>
                <ContactText>
                  106, Keshav Aaradhyam, opp. Bank Of India, nr. Sardar Chowk
                  Road, Kudasan, Gandhinagar, Gujarat 382421
                </ContactText>
              </ContactInfo>
            </ContactDetails>
          </FooterColumn>
          {/* ------------------Pages---------------------- */}
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blogs">Blogs & Articals</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterLinks>
          </FooterColumn>
          {/* ---------------Location Map--------------- */}
          <FooterColumn>
            <LocationMapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.8388510196887!2d72.63401033903622!3d23.181960394765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf9f68f9a75%3A0x7ad1fbc1572ef282!2sThe%20Physio%20Therapeutic%20Clinic!5e0!3m2!1sen!2sin!4v1688458945407!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
              ></iframe>
            </LocationMapContainer>
          </FooterColumn>
        </FooterGrid>
        {/* -----------------Social Links--------------- */}
        <SocialLinks>
          <SocialLink href="#">
            <BiLogoFacebookCircle />
          </SocialLink>
          <SocialLink href="#">
            <BiLogoInstagramAlt />
          </SocialLink>
          <SocialLink href="#">
            <BiLogoWhatsapp />
          </SocialLink>
        </SocialLinks>
        <CopyrightContainer>
          &copy; 2023 Your Company. All rights reserved.
        </CopyrightContainer>
      </SectionContainer>
    </Section>
  );
};

export default Footer;
