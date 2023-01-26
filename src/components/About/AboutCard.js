import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue"> Ingrid Rorez </span>
            i live in <span className="blue"> Yogyakarta, Indonesia </span>
            <br /> because i continue my study in Gadjah Mada University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(57, 147, 231, 0.959)" }}>
            "If you said that I'm cool. It's definitely right 😛"{" "}
          </p>
          <footer className="blockquote-footer">Rorez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
