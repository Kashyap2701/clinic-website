// import React from "react";

import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { Section, SectionContainer } from "../Util/CommonStyle";
import {
  FooterGrid,
  FooterColumn,
  FooterLink,
  FooterTitle,
  FooterLinks,
  ContactDetails,
  ContactIcon,
  ContactInfo,
  ContactText,
  SocialLink,
  SocialLinks,
  CopyrightContainer,
  LocationMapContainer,
} from "../CSS/Footer";
import { Link } from "react-router-dom";

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
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/blogs">Blogs & Articles</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about-us">About Us</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/contact-us">Contact Us</Link>
              </FooterLink>
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
          <SocialLink>
            <BiLogoFacebookCircle />
          </SocialLink>
          <SocialLink>
            <BiLogoInstagramAlt />
          </SocialLink>
          <SocialLink>
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
