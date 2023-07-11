import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../data/slideImage.json";
import classes from "./slide.module.css";
import styles from "./custom.slide.module.css";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }
  
  const renderSlides = images.map((image) => {
    return (
      <div key={image.alt} className={classes.image}>
        <img
          src={image?.url}
          alt={image.alt}
          style={{ width: "100%", height: "60vh" }}
        />
        {/* <p className="legend">{image.label}</p> */}
      </div>
    );
  });

  return (
    <>
      <div>
        <Carousel
          className={styles.customCarousel}
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
    </>
  );
};

export default Slide;
