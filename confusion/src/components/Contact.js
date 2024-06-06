import React from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const contactInfo = {
    address: "vinhomes grand park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam",
    phoneNumber: "0999947789",
    email: "ntvl@fpt.edu.vn",
  };

  return (
    <Container className="contact-container">
      <Box className="contact-header">
        <h1>Contact</h1>
      </Box>
      <Box className="contact-details">
        <p>
          <strong>Address:</strong> {contactInfo.address}
        </p>
        <p>
          <strong>Phone Number:</strong> {contactInfo.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {contactInfo.email}
        </p>
      </Box>
      <Box className="contact-footer">
        <Link to="/">
          <button className="home-button">Return Home</button>
        </Link>
      </Box>
    </Container>
  );
};

export default Contact;
