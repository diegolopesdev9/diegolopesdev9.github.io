import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Eu sou <span className="purple">Diego Lopes</span>, 
            de <span className="purple">Sorocaba, São Paulo</span>.
            <br />
            Atualmente trabalho como{" "}
            <span className="purple">Desenvolvedor Full-Stack Freelancer</span>,
            criando soluções web profissionais com IA Generativa.
            <br />
            Tenho formação em{" "}
            <span className="purple">Análise de Sistemas</span> e{" "}
            <span className="purple">Engenharia Elétrica</span>.
            <br />
            <br />
            Faço a transição de projetista para desenvolvedor, trazendo 
            uma perspectiva única de resolução de problemas e atenção aos detalhes.
            <br />
            <br />
            Fora da programação, gosto de:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Explorar novas tecnologias de IA 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Contribuir com a comunidade tech 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Pedalar e manter bicicletas 🚴
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construindo o futuro com código, uma linha por vez!"{" "}
          </p>
          <footer className="blockquote-footer">Diego Lopes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;