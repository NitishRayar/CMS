import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../data/slideImage.json";
import classes from "./slide.module.css";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState();
  

  function handleChange(index) {
    setCurrentIndex(index);
  }
  const renderImage= (image)=>{
    return new URL(image,import.meta.url);
  }
  const renderSlides = images.map((image) => (
    <div key={image.alt} className={classes.image}>
      <img src={renderImage(image.url)} alt={image.alt} />
      <p className="legend">{image.label}</p>
    </div>
  ));
  return (
    <>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        showThumbs={false}
      >
        {renderSlides}
      </Carousel>
    </>
  );
};

export default Slide;