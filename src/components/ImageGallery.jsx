/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageGalleryContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const SmallScreenSlider = styled(Carousel)`
  width: 100%;
  margin-top: 1rem;

  .carousel .slide {
    background-color: transparent;
  }

  .carousel .control-dots {
    bottom: 0;
  }
`;

const SmallScreenImage = styled.img`
  width: 1500px;
  height: 900px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryContainer>
      <SmallScreenSlider showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <SmallScreenImage src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </SmallScreenSlider>
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
