import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import {
  ServicesContainer,
  ServiceItem,
  ServiceTitle,
  ServiceIcon,
} from "../CSS/StyledComponents";
import physicaltherapy from "../assets/physical-therapy.png";
import jointPain from "../assets/broken-bone.png";
import neurology from "../assets/neurology.png";
import yoga from "../assets/yoga.png";
import parkinson from "../assets/parkinson.png";
import rehabilitation from "../assets/rehabilitation.png";
import arthritis from "../assets/arthritis.png";
import cerebral from "../assets/cerebral.png";

const Services = () => {
  // Example services data
  const services = [
    {
      id: 1,
      title: "Advance Physiotherapy",
      icon: physicaltherapy,
    },
    {
      id: 1,
      title: "Joint Pain",
      icon: jointPain,
    },
    {
      id: 2,
      title: "Yoga",
      icon: yoga,
    },
    {
      id: 3,
      title: "Neurological Pain",
      icon: neurology,
    },
    {
      id: 1,
      title: "Parkinson",
      icon: parkinson,
    },
    {
      id: 2,
      title: "After Surgury Treatment",
      icon: rehabilitation,
    },
    {
      id: 3,
      title: "Arthristis",
      icon: arthritis,
    },
    {
      id: 3,
      title: "Cerebral palsy",
      icon: cerebral,
    },
  ];

  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Services</SectionTitle>
        <ServicesContainer>
          {services.map((service) => (
            <ServiceItem key={service.id}>
              <ServiceIcon src={service.icon} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceItem>
          ))}
        </ServicesContainer>
      </SectionContainer>
    </Section>
  );
};

export default Services;
