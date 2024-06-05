import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const contactInfo = {
    address: "vinhomes grand park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam",
    phoneNumber: "0999947789",
    email: "ntvl@fpt.edu.vn",
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-details">
        <p>
          <strong>Address:</strong> {contactInfo.address}
        </p>
        <p>
          <strong>Phone Number:</strong> {contactInfo.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {contactInfo.email}
        </p>
      </div>
    </div>
  );
};

export default Contact;
