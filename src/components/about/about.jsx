import React from "react";
import "./styles.css";
import politicianImage from "../../assets/patil.jpg";

const About = () => {
  return (
    <div className="cms-about-container">
      <div className="row">
        <div className="col-md-3 cms-about-me-left">
          <div className="cms-about-container-main-image">
            <img src={politicianImage} alt="Patil" />
          </div>
        </div>
        <div className="col-md-9 cms-about-me-right">
          <h2 className="cms-about-me-left-heading">About</h2>
          <p className="cms-about-me-left-details">
            Shri M R Patil was born in Hubli on November 14, 1963. He received
            his early education at home under private tutors. At the age of
            fifteen, he went to England and after two years at Harrow, joined
            Cambridge University where he took his tripos in Natural Sciences.
            He was later called to the Bar from Inner Temple. He returned to
            India in 1912 and plunged straight into politics. Even as a student,
            he had been interested in the struggle of all nations who suffered
            under foreign domination. He took keen interest in the Sinn Fein
            Movement in Ireland. In India, he was inevitably drawn into the
            struggle for independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
