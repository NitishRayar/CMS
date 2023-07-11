import React from "react";
import "./about.css";
import patilImage from "../../assets/patil.jpg";

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
            ಎಂ. ಆರ್ . ಪಾಟೀಲ್ ಕೃಷಿ ಕುಟುಂಬದಲ್ಲಿ ರಾಯನಗೌಡ ಹಾಗೂ ಶಾರದಾಬಾಯಿ ದಂಪತಿಯ
            ಮಗನಾಗಿ ಜನಿಸಿದರು. ಎಂ. ಆರ್. ಪಾಟೀಲ್ ರಿಗೆ ಮೂವರು ಸಹೋದರರು, ಮೂವರು
            ಸಹೋದರಿಯರು. ಸ್ವಗ್ರಾಮ ಯರಗುಪ್ಪಿಯಲ್ಲೇ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ, ಹುಬ್ಬಳ್ಳಿಯಲ್ಲಿ
            ಹೈಸ್ಕೂಲ್ ಮತ್ತು ಕಾಲೇಜು ವಿದ್ಯಾಭ್ಯಾಸ ಮುಗಿಸಿದರು. ಬಿ.ಕಾಂ ಪದವೀಧರರಾಗಿರುವ
            ಎಂ. ಆರ್. ಪಾಟೀಲ್ ಮೊದಲು ಸ್ವಂತ ಉದ್ಯಮ ಶುರು ಮಾಡಿದರು. ನಂತರ ರಾಜಕೀಯದತ್ತ ಒಲವು
            ಬೆಳೆಸಿಕೊಂಡರು.
          </p>
          <p className="font-size">
            1995 ರಲ್ಲಿ ಎಂ. ಆರ್. ಪಾಟೀಲರು, ಬಿಜೆಪಿ ಪಕ್ಷದ ಸಕ್ರಿಯ ಕಾರ್ಯಕರ್ತನಾಗಿ ತಮ್ಮ
            ರಾಜಕೀಯ ಜೀವನ ಆರಂಭಿಸಿದರು. ಅಲ್ಲಿಂದ ವಿವಿಧ ಹಂತಗಳಲ್ಲಿ, ಸಂಕಷ್ಟದ ಸಮಯದಲ್ಲಿ
            ಪಕ್ಷವನ್ನು ಕೈ ಬಿಡದೇ, ಪಕ್ಷಕ್ಕಾಗಿ ದುಡಿದಿದ್ದಾರೆ. ಪಕ್ಷದ ವಿವಿಧ
            ಹುದ್ದೆಗಳನ್ನು ಅಲಂಕರಿಸಿ, ಜನಸಾಮಾನ್ಯರಿಗೆ ಬೇಕಾದ ಸಹಾಯ, ಸಹಕಾರ ಒದಗಸುತ್ತಾ
            ಬಂದಿದ್ದಾರೆ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
