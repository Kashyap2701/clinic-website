import { Section, SectionContainer, SectionTitle } from "../Util/CommonStyle";
import {
  ReviewContainer,
  ReviewCard,
  ReviewAuthor,
  ReviewAvatar,
  ReviewInfo,
  ReviewPosition,
  ReviewText,
  RatingStars,
  StarIcon,
} from "../CSS/StyledComponents";
import p1 from "../assets/P1.jpg";
import p2 from "../assets/P2.jpg";

const ReviewSection = () => {
  // Example reviews data
  const patientReviews = [
    {
      id: 1,
      text: "I received a miraculous treatment at the Physiotherapeutic Clinic for my 2-3 week-long neck pain. The skilled and knowledgeable physiotherapist provided excellent care, offering relaxation and relieving my pain. The clinic staff were professional, and the atmosphere was serene. I am incredibly grateful for their expertise and highly recommend their services",
      author: "Hiren Gevariya",
      position: "Student",
      rating: 5, // Rating out of 5
      avatar: p1, // Replace with the actual URL of the avatar image
    },
    {
      id: 2,
      text: "I was suffering from Bell's palsy, so i visit this clinic and within 10 day I am recover from it, doctor have a good skill and personality he was explaining all treatment's benifit, all over good experience, thank you Dr. Pradhyuman.",
      author: "Paresh Pathak",
      position: "Retd. Goverment Officer",
      rating: 5, // Rating out of 5
      avatar: p2, // Replace with the actual URL of the avatar image
    },
    {
      id: 1,
      text: "I received a miraculous treatment at the Physiotherapeutic Clinic for my 2-3 week-long neck pain. The skilled and knowledgeable physiotherapist provided excellent care, offering relaxation and relieving my pain. The clinic staff were professional, and the atmosphere was serene. I am incredibly grateful for their expertise and highly recommend their services",
      author: "Hiren Gevariya",
      position: "Student",
      rating: 5, // Rating out of 5
      avatar: p1, // Replace with the actual URL of the avatar image
    },
    {
      id: 2,
      text: "I was suffering from Bell's palsy, so i visit this clinic and within 10 day I am recover from it, doctor have a good skill and personality he was explaining all treatment's benifit, all over good experience, thank you Dr. Pradhyuman.",
      author: "Paresh Pathak",
      position: "Retd. Goverment Officer",
      rating: 5, // Rating out of 5
      avatar: p2, // Replace with the actual URL of the avatar image
    },
    // Other reviews...
  ];

  // Function for rating star
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
              <ReviewInfo>
                <ReviewAvatar src={review.avatar} alt={review.author} />
                <>
                  <ReviewAuthor>{review.author}</ReviewAuthor>
                  <ReviewPosition>{review.position}</ReviewPosition>
                </>
              </ReviewInfo>
              <RatingStars>{renderRatingStars(review.rating)}</RatingStars>
              <ReviewText>{review.text}</ReviewText>
            </ReviewCard>
          ))}
        </ReviewContainer>
      </SectionContainer>
    </Section>
  );
};

export default ReviewSection;
