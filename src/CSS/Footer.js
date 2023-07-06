import styled from "styled-components" 

export const FooterGrid = styled.div`
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

export const FooterColumn = styled.div`
  width: 400px;
  margin: 1rem;
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: #888888;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #001a79;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FooterTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #001a79;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.span`
  display: flex;
  color: #001a79;
  font-size: 1.5em;
  margin-right: 1rem;
`;

export const ContactText = styled.p`
  font-size: 16px;
  color: #888888;
  margin: 0;
  text-align: initial;
`;

export const LocationMapContainer = styled.div`
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

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  color: #888888;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #001a79;
  }
`;

export const CopyrightContainer = styled.p`
  text-align: center;
  color: #888888;
  font-size: 14px;
`;