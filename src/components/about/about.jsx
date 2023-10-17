import React from "react";
import "./about.css";
import patilImage from "../../assets/politician.jpeg";

const About = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-3 about-me-left">
          <div className="main-image">
            <img src={patilImage} alt="Patil" />
          </div>
        </div>
        <div className="col-md-9 about-me-right">
          <h1>About</h1>
          <p className="font-size">
            Shri Mohan sastri was born in Mumbai on November 14, 1889. He
            received his early education at home under private tutors. At the
            age of fifteen, he went to England and after two years at Harrow,
            joined Cambridge University where he took his tripos in Natural
            Sciences. He was later called to the Bar from Inner Temple. He
            returned to India in 1912 and plunged straight into politics. Even
            as a student, he had been interested in the struggle of all nations
            who suffered under foreign domination. He took keen interest in the
            Sinn Fein Movement in Ireland. In India, he was inevitably drawn
            into the struggle for independence.
          </p>
          <p className="font-size"></p>
        </div>
      </div>
    </div>
  );
};

export default About;
