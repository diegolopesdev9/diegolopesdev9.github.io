import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Full-Stack",
          "Especialista em Python & React",
          "Engenheiro de IA Generativa",
          "Criador de Dashboards Profissionais",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;