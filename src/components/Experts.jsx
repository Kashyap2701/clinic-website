import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import {
  StaffCard,
  StaffContainer,
  StaffPosition,
  StaffAvatar,
  StaffName,
} from "../CSS/StyledComponents";
import doctor3 from "../assets/doctor3.png";

const Experts = () => {
  // Example staff data
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Pradhyuman Patel",
      position: "Physiotherapist",
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
