import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="cms-footer-container">
      <div className="cms-footer-container-contact-details">
        <div className="cms-footer-container-contact-details-title">
          Contact:
        </div>
        <div className="cms-footer-container-contact-details-main">
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
