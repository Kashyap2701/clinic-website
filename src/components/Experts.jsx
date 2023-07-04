import styled from "styled-components";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import doctor3 from "../assets/doctor3.png";

const StaffContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StaffCard = styled.div`
  width: 250px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
`;

const StaffAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  object-fit: cover;
  object-position: 0% 0%;
`;

const StaffName = styled.h3`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

const StaffPosition = styled.p`
  font-size: 16px;
  color: #888888;
`;

const Experts = () => {
  // Example staff data
  const staffMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Dentist",
      avatar: doctor1,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Physiotheraphy",
      avatar: doctor2,
    },
    {
      id: 3,
      name: "Dr. Pradhyuman J. Patel",
      position: "B.P.T GSCPT(GPC-14456)",
      avatar: doctor3,
    },
  ];

  return (
    <Section backgroundColor="#001a79">
      <SectionContainer>
        <SectionTitle color="white">Meet All Our Experts</SectionTitle>
        <StaffContainer>
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id}>
              <StaffAvatar src={staff.avatar} alt={staff.name} />
              <StaffName>{staff.name}</StaffName>
              <StaffPosition>{staff.position}</StaffPosition>
            </StaffCard>
          ))}
        </StaffContainer>
      </SectionContainer>
    </Section>
  );
};

export default Experts;
