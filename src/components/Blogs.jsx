import styled from "styled-components";
import BlogImage1 from "../assets/BlogImage1.jpg";
import BlogImage2 from "../assets/BlogImage2.jpg";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";

// Styled components
// const Section = styled.section`
//   padding: 40px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 20px;
// `;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #888888;
`;

// Example data
const blogPosts = [
  {
    id: 1,
    title: "Tips for Proper Posture",
    image: BlogImage1,
    description: "Learn how to maintain a good posture for a healthy body.",
  },
  {
    id: 2,
    title: "Exercises for Neck Pain",
    image: BlogImage2,
    description: "Discover effective exercises to alleviate neck pain.",
  },
  {
    id: 3,
    title: "Preventing Sports Injuries",
    image: BlogImage2,
    description:
      "Find out how to prevent common sports injuries during training.",
  },
];

const Blogs = () => {
  return (
    <Section backgroundColor="#001a79">
      <SectionContainer>
        <SectionTitle color="white">
          Physiotherapy Tips for Better Life
        </SectionTitle>
        <CardContainer>
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardImage src={post.image} alt={post.title} />
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </Card>
          ))}
        </CardContainer>
      </SectionContainer>
    </Section>
  );
};

export default Blogs;
