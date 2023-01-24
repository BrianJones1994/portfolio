import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shose from "../../Assets/Projects/shose.jpg";
import finance from "../../Assets/Projects/finance.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import typescript from "../../Assets/Projects/typescript.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/BrianJones1994/persion-chatfy"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/BrianJones1994/bits-code"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/BrianJones1994/code-editor"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shose}
              isBlog={false}
              title="Shose Shop"
              description="EverShop is an open-source project. We are committed to a fully transparent development process and appreciate highly any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as part of the EverShop community."
              ghLink="https://github.com/BrianJones1994/shoseshop"
              demoLink="https://demo.evershop.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typescript}
              isBlog={false}
              title="Ai For Social Good"
              description="Type-Shot is an ecommerce full stack web application with using react with typescript for frontend redux toolkit for state management including authentication with roles and full crud cms admin dashboard, node with typescript express js for backend and mongodb for database"
              ghLink="https://github.com/BrianJones1994/TypeShop"
              demoLink="https://type-shop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Reactive Trader® is a real-time FX trading platform designed to showcase reactive programming principles across the full application stack.
              Originally written in WPF and .Net, and now in React, React-RxJS, Node.js and running on Hydra, we continue to evolve the platform to use the latest technologies."
              ghLink="https://github.com/BrianJones1994/ReactiveTrader"
              demoLink="https://weareadaptive.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
