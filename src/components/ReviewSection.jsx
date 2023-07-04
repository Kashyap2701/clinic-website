import styled from "styled-components";
import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ReviewCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  text-align: left;
  border-radius: 1rem;
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.h4`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReviewPosition = styled.p`
  font-size: 16px;
  color: #888888;
  margin-bottom: 10px;
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  color: ${({ filled }) => (filled ? "#fdd835" : "#ccc")};
`;

const ReviewAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ReviewSection = () => {
  // Example reviews data
  const patientReviews = [
    {
      id: 1,
      text: "Great experience! The treatment was effective and the staff was friendly.",
      author: "John Doe",
      position: "IT Manager",
      rating: 4, // Rating out of 5
      avatar: doctor1, // Replace with the actual URL of the avatar image
    },
    {
      id: 1,
      text: "Great experience! The treatment was effective and the staff was friendly.",
      author: "John Doe",
      position: "Teacher",
      rating: 2, // Rating out of 5
      avatar: doctor2, // Replace with the actual URL of the avatar image
    },
    // Other reviews...
  ];

  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <StarIcon key={`filled-star-${i}`} filled>
          &#9733;
        </StarIcon>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`empty-star-${i}`}>&#9733;</StarIcon>);
    }

    return stars;
  };

  return (
    <Section>
      <SectionContainer>
        <SectionTitle>What Patients Say</SectionTitle>
        <ReviewContainer>
          {patientReviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewText>{review.text}</ReviewText>
              <ReviewAuthor>
                <ReviewAvatar src={review.avatar} alt={review.author} />
                <RatingStars>{renderRatingStars(review.rating)}</RatingStars>
              </ReviewAuthor>
              <ReviewPosition>{review.position}</ReviewPosition>
            </ReviewCard>
          ))}
        </ReviewContainer>
      </SectionContainer>
    </Section>
  );
};

export default ReviewSection;
