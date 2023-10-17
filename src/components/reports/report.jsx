import React, { useRef, useState } from "react";
import "./report.css"; // Import the CSS file for styling
import General from "./General";
import { useReactToPrint } from "react-to-print";
import Individual from "./Individual";

const Report = (props) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showIndividualPopup, setShowIndividualPopup] = useState(false);
  const [showGeneralForm, setShowGeneralForm] = useState(false);
  const [reportJson, setReportJson] = useState({});
  const contentRef = useRef();
  const generatePDF = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Report",
    onAfterPrint: () => alert("download success"),
  });

  const fetchGeneralReport = async (placeCode, wardCode) => {
    const reqData = await fetch(
      `http://localhost:8082/report/general?placeCode=${placeCode}&wardCode=${wardCode}`
    );
    const resData = await reqData.json();
    setReportJson(resData);
    console.log(resData);
  };
  const fetchIndividualReport = async (personId) => {
    const reqData = await fetch(
      `http://localhost:8082/report/person?personId=${personId}`
    );
    const resData = await reqData.json();
    setReportJson(resData);
    console.log(resData);
  };
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

  const renderPersonSection = (person) => {
    console.log(person);
    return (
      <>
        <p>
          <span>
            <b>Name: </b>
            {person?.personNameK}
          </span>
        </p>
        <p>
          <span>
            <b>Address: </b>
            {person?.address}
          </span>
        </p>
        <p>
          <span>
            <b>Contact Number: </b>
            {person?.contactNo}
          </span>
        </p>
        <p>
          <span>
            ಮಾನ್ಯರೆ, ಕಳೆದ ೫ ವರ್ಷಗಳಲ್ಲಿ ನಾನು ಕುಂದಗೋಳ ಕ್ಷೇತ್ರದ ಶಾಸಕನಾಗಿ ಸೇವೆ
            ಸಲ್ಲಿಸಿದ ವಿವರಗಳು ಕೆಳಗಿವೆ .
          </span>
        </p>

        {renderService(person?.services)}
      </>
    );
  };
  const renderWardSection = (ward) => {
    return (
      <>
        <span>
          <b>{ward?.wardNameK}</b>
        </span>
        {renderService(ward?.services)}
      </>
    );
  };
  const renderPlaceSection = (place) => {
    return (
      <>
        <span>
          <b>ನಗರ : {place?.placeNameK}</b>
        </span>
        {renderCategories(place?.categories)}
      </>
    );
  };
  const renderTalukSection = (taluk) => {
    return (
      <>
        <span>
          <b>{taluk?.name}</b>
        </span>
        {renderCategories(taluk?.categories)}
      </>
    );
  };
  const renderCategories = (categories) => {
    return (
      <ul>
        {categories?.map((categroy) => {
          return (
            <li>
              <b>{categroy?.categoryNameK} :</b>
              <ul>{renderService(categroy?.services)}</ul>
            </li>
          );
        })}
      </ul>
    );
  };
  const renderService = (services) => {
    return (
      <ul>
        {services?.map((service) => {
          return <li>{service?.message}</li>;
        })}
      </ul>
    );
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
            <Individual
              onClose={closeIndividualPopup}
              onSearch={fetchIndividualReport}
            />
          )}
          {isButtonClicked && showGeneralForm && (
            <General onClose={closeGeneralForm} onSearch={fetchGeneralReport} />
          )}
        </div>
      </div>
      <div className="div-75">
        <div className="generate-container">
          <button className="generate-button" onClick={generatePDF}>
            Generate
          </button>
        </div>
        <div  className="content-container">
          <div ref={contentRef}>
          {reportJson?.person && renderPersonSection(reportJson.person)}
          {reportJson?.ward && renderWardSection(reportJson.ward)}
          {reportJson?.place && renderPlaceSection(reportJson.place)}
          {reportJson?.taluk && renderTalukSection(reportJson.taluk)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
