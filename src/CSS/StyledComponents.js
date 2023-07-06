import styled from "styled-components" 

// ---------------- Heading Section ------------------

export const MainSectionContainer = styled.div`
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

export const MainSectionTextContainer = styled.div`
  flex: 1;
`;

export const MainSectionTitle = styled.h1`
  color: var(--primary-color);
  font-size: 3em;
  margin-bottom: 2rem;
  span {
    color: var(--secondary-color);
  }
  @media screen and (max-width: 450px) {
    font-size: 2em;
  }
`;

export const MainSectionSubtitle = styled.h3`
  color: #777777;
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1em;
  }
`;

export const MainSectionImage = styled.img`
  height:100%
  width: 100%;
  max-width: 500px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    max-width: 300px;
  }
`;

// ---------------- TreatmentOption Section ------------------

export const TreatmentOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TreatmentOption = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
`;

export const TreatmentOptionIcon = styled.div`
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

export const TreatmentOptionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--secondary-color);
`;

export const TreatmentOptionDescription = styled.p`
  font-size: 16px;
  color: #888888;
`;

// ---------------- Service Section ------------------

export const ServicesContainer = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  justify-content: center;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  -webkit-user-drag: none;
`;

export const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: light;
`;

// ---------------- Experts Section ------------------

export const StaffContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StaffCard = styled.div`
  width: 250px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
`;

export const StaffAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  object-fit: cover;
  object-position: 0% 0%;
`;

export const StaffName = styled.h3`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

export const StaffPosition = styled.p`
  font-size: 16px;
  color: #888888;
`;

// ---------------- Patient Review Section ------------------

export const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ReviewCard = styled.div`
  width: 450px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  text-align: left;
  border-radius: 1rem;
`;

export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const ReviewAuthor = styled.h4`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-right: 1rem;
`;

export const ReviewPosition = styled.p`
  font-size: 16px;
  color: #888888;
`;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
  font-size: large;
`;

export const StarIcon = styled.span`
  color: ${({ filled }) => (filled ? "#fdd835" : "#ccc")};
`;

export const ReviewAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

// ---------------- Blog Section ------------------

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #888888;
`;