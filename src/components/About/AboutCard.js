import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brian Jones </span>
            from <span className="purple"> Milano , Italy.</span>
            <br />I am Senior Full-stack developer have 7+ years experience in
            Software development.
            <br />
            I have worked as web and video streaming developer in several
            companies in US and have rich experience in these skills.
            <br />
            In web development I was mainly responsible back-end development and
            prefered Python and Node.JS. Also I have strong experience in
            front-end development using React.JS too.
            <br />
            And I am experted in video streaming using FFmpeg and GStreamer
            library and have involved a lot of C/C++ projects from small
            applications to huge platforms.
            <br />
            Working for “Save time & Top quality”
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Brian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
