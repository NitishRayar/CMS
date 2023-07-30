import React, { useState } from "react";
import IndividualPopup from "../../popups/IndividualPopup";
import "./report.css"; // Import the CSS file for styling
import General from "./forms/General/General";

const Report = props => {
  const [isButtonClicked, setIsButtonClicked] = useState(false),
    [showIndividualPopup, setShowIndividualPopup] = useState(false),
    [showGeneralForm, setShowGeneralForm] = useState(false);

  const openIndividualPopup = () => {
    setIsButtonClicked(true);
    setShowIndividualPopup(true);
  };

  const closeIndividualPopup = () => {
    setIsButtonClicked(false);
    setShowIndividualPopup(false);
  };

  const openGeneralForm = () => {
    setIsButtonClicked(true);
    setShowGeneralForm(true);
  };

  const closeGeneralForm = () => {
    setIsButtonClicked(false);
    setShowGeneralForm(false);
  };

  return (
    <div className="main-container">
      <div className="div-20">
        <div className="button-container">
          {!isButtonClicked && (
            <>
              <div className="button" onClick={openIndividualPopup}>
                Individual
              </div>
              <div className="button" onClick={openGeneralForm}>
                General
              </div>
            </>
          )}
          {isButtonClicked && showIndividualPopup && (
            <IndividualPopup onClose={closeIndividualPopup} />
          )}
          {isButtonClicked && showGeneralForm && (
            <General onClose={closeGeneralForm} />
          )}
        </div>
      </div>
      <div className="div-75">
        <div className="generate-container">
          <button className="generate-button">Generate</button>
        </div>
        <div className="content-container">
          <p className="report-name-p">Report</p>
          <span>
            1. ಸೋಲಾರ್
            <br />
            2. ಜಲ್ಲಿ/ಡಬ್ಲ್ಯೂಬಿಎಂ ರಸ್ತೆಗಳನ್ನು ಬಿಟಿ ಗುಣಮಟ್ಟಕ್ಕೆ
            ಮೇಲ್ದರ್ಜೆಗೇರಿಸುವುದು
            <br />
            3. ಕೆಟ್ಟದಾಗಿ ಸವೆದಿರುವ ಬಿಟಿ ರಸ್ತೆಗಳ ನವೀಕರಣ (ಅಗತ್ಯವಿದ್ದಲ್ಲಿ
            ಗುಂಡಿಗಳನ್ನು ತುಂಬುವುದರೊಂದಿಗೆ ಮಾತ್ರ ಬಿಟಿ ಪದರವನ್ನು ಹಾಕುವುದು)
            <br />
            4. ಸಿಮೆಂಟ್ ಕಾಂಕ್ರೀಟ್ ರಸ್ತೆಗಳನ್ನು ಹಾಕುವುದು
            <br />
            5. ಸರ್ಕಾರಿ ಮತ್ತು ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳ ಆಸ್ಪತ್ರೆಗಳು
            <br />
            6. ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು
            <br />
            7. ಸರ್ಕಾರಿ ಪಶುವೈದ್ಯಕೀಯ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಶಾಲೆಗಳು
            <br />
            8. ಪಂಚಾಯತ್ ಯೂನಿಯನ್ ಶಾಲೆಗಳು
            <br />
            9. ಆದಿ ದ್ರಾವಿಡ ಶಾಲೆಗಳು, ಕಲ್ಲಾರ್ ಸುಧಾರಣೆ ಶಾಲೆಗಳು
            <br />
            10. ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್‌ಗಳಿಗೆ ಕಟ್ಟಡಗಳು
            ಮತ್ತು/ಅಥವಾ ಕಾಂಪೌಂಡ್ ಗೋಡೆಗಳನ್ನು ಒದಗಿಸುವುದು
            <br />
            11. ವಿಕಲಚೇತನರು ಮತ್ತು ಸರ್ಕಾರಿ ಅನಾಥಾಶ್ರಮಗಳಿಗೆ ಸರ್ಕಾರಿ ವಿಶೇಷ ಶಾಲೆಗಳಿಗೆ
            ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು
            <br />
            12. ಸೇತುವೆಗಳ ನಿರ್ಮಾಣ
            <br />
            13. ಸ್ಮಶಾನ/ಸ್ಮಶಾನ ಸ್ಥಳಗಳಿಗೆ ಮೂಲಸೌಕರ್ಯ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು
            <br />
            14. ಅಗತ್ಯವಿದ್ದರೆ ಮಳೆನೀರಿನ ಚರಂಡಿಗಳೊಂದಿಗೆ ಕಾಂಕ್ರೀಟ್ ಪಾದಚಾರಿಗಳನ್ನು
            ಒದಗಿಸುವುದು
            <br />
            15. ಹೊಸ ಸಾರ್ವಜನಿಕ ಉದ್ಯಾನವನಗಳ ರಚನೆ
            <br />
            16. ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯಗಳ ನಿರ್ಮಾಣ
            <br />
            17. ಜೆಟ್ರೊಡ್ಡಿಂಗ್ ಯಂತ್ರಗಳು ಮತ್ತು ಹೈಡ್ರಾಲಿಕ್ ಚಾಲಿತ ಒಳಚರಂಡಿ ಯಂತ್ರಗಳ
            ಖರೀದಿ
            <br />
            18. ವಕ್ಫ್ ಬೋರ್ಡ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಲಾದ
            <br />
            19. ಸಾರ್ವಜನಿಕ ಸೇರಿದ ಸ್ಮಶಾನ ಭೂಮಿಯಲ್ಲಿ ಕಾಂಪೌಂಡ್ ಗೋಡೆ/ಬೇಲಿಯನ್ನು
            ಒದಗಿಸುವುದು
            <br />
            20. ವಕ್ಫ್ ಬೋರ್ಡ್ ಯಾವುದೇ ಇಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗವನ್ನು ಹೊಂದಿಲ್ಲದ ಕಾರಣ, ಈ
            ಕೆಲಸವನ್ನು ಸಂಬಂಧಪಟ್ಟ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳಿಗೆ ವಹಿಸಿಕೊಡಬಹುದು.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Report;
