import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../data/slideImage.json";
import "./styles.css";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = images.map(image => {
    return (
      <div key={image.alt} className="cms-slide-image-container">
        <img src={image.url} alt={image.alt} />
      </div>
    );
  });

  return (
    <div className="cms-slide">
      <Carousel
        className="cms-slide-carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        showThumbs={false}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default Slide;
