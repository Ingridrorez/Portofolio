import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import suicide from "../../Assets/Projects/suicide.png";
import Hyyruby from "../../Assets/Projects/Hyyruby.png";
import Weepy from "../../Assets/Projects/Weepy.png";
import Senyumin from "../../Assets/Projects/Senyumin.png";
import KerjaApaSaja from "../../Assets/Projects/KerjaApaSaja.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weepy}
              isBlog={false}
              title="Weepy"
              description="Weepy is a learning platform that can help every student prepare to take the state university entrance examination. Weepy is here as a form of learning innovation in the industrial era 4.0 which can be accessed anywhere and anytime. All content on Weepy can be accessed and used for free."
              ghLink="https://github.com/Ingridrorez/Weepy"
              demoLink="https://weepy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Senyumin}
              isBlog={false}
              title="Senyumin"
              description="Teledentistry is a website used to assist children in carrying out physical and dental examinations. Children can carry out examinations with the help of parents who will be assessed directly for their physical examination through the system and have their teeth checked by dentists connected to this system, so that on this website there are several types of users, namely admins, doctors, parents and children."
              ghLink="https://github.com/Ingridrorez/Senyumin"
              demoLink="https://senyumin.technow.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hyyruby}
              isBlog={false}
              title="Hyyruby"
              description="Hyyruby is a website for keeping notes online. This website can also be used as a social media between connected friends."
              ghLink="https://github.com/Ingridrorez/HyyRuby/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KerjaApaSaja}
              isBlog={false}
              title="KerjaApaSaja"
              description="KerjaApaSaja is a platform to find or provide jobs. This website has a network connection,that can later be used to find the job or worker needed."
              ghLink="https://gitlab.com/qatros-development/KerjaApaSaja"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
