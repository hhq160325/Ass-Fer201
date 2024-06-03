import React from "react";
import CardContent from "@mui/material/CardContent";
import { Container } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="container"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <Container
        className="Main-Container"
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div>
          <h1>Contact</h1>
        </div>
        <div className="details-card">
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31344.73133328466!2d106.8309823634277!3d10.880651338601574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1717383735449!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </CardContent>
          <div className="details-card-content">
            <p>
              Adress: vinhomes grand park,Quận 9, Thành phố Hồ Chí Minh, Việt
              Nam
            </p>
            <p>Phone Number: 0999947789</p>
            <p>Email: ntvl@fpt.edu.vn</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
