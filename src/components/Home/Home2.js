import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             DEIXE EU ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Sou um Desenvolvedor Full-Stack apaixonado por transformar ideias em
              produtos profissionais e escaláveis. Ao longo do tempo, explorei diversas
              tecnologias e encontrei minha paixão em construir dashboards de alto 
              desempenho e experiências intuitivas.
              <br />
              <br />
              Sou proficiente em
              <i>
                <b className="purple">
                  {" "}
                 Python, JavaScript, TypeScript, React e FastAPI{" "}
                 </b>
              </i>
              — e eu gosto de trabalhar tanto com o backend quanto com o frontend.
              <br />
              <br />
              Minhas principais áreas de interesse incluem desenvolvimento de
              <i>
               <b className="purple">
                 {" "}
                 Dashboards de Business Intelligence, Automação com IA{" "}
               </b>
              </i>
               e explorar novas formas de integrar Inteligência Artificial Generativa
               em aplicações web.
              <br />
              <br />
              Sempre que possível, construo projetos com
              <b className="purple"> Python (Streamlit, FastAPI) </b> e frameworks 
              modernos como{" "}
              <i>
                <b className="purple">React.js</b> e{" "}
                <b className="purple">TypeScript</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
