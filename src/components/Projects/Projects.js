import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus recentes <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LeadInsights - Dashboard de Análise de Leads "
              description="Dashboard profissional de Business Intelligence para análise de leads de marketing, desenvolvido com Streamlit e Python.
              Funcionalidades:
- 7 gráficos interativos (funil de conversão, análise temporal, distribuição de qualidade)
- Integração robusta com Google Sheets API
- Sistema de cache otimizado (redução de 80% no tempo de resposta)
- Exportação para Excel e PDF
- Auto-refresh a cada 5 minutos
- Filtros avançados e KPIs em tempo real
Tecnologias:
Python • Streamlit • Plotly • Google Sheets API • Pandas • Render.com
Complexidade:
~3000 linhas de código organizadas em 15+ módulos
Qualidade equivalente a produtos enterprise ($50K-$100K)
Status: Em produção com monitoramento 24/7."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PagueFlow - Sistema de Gestão Financeira"
              description="Aplicação full-stack para controle financeiro pessoal e empresarial com arquitetura moderna e escalável.
Funcionalidades:
- Gestão de contas a pagar/receber
- Categorização inteligente de despesas
- Relatórios financeiros e análises
- Sistema de autenticação seguro
- Row-Level Security (RLS) para isolamento de dados
Stack Tecnológica:
Frontend: React • TypeScript • TailwindCSS
Backend: Supabase • Prisma ORM • PostgreSQL
Arquitetura: SPA com API REST
Segurança:
Autenticação via Supabase Auth
Políticas RLS no banco de dados
Validação de dados em múltiplas camadas
Status: Desenvolvimento ativo"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WhatsApp Assistant"
              description="Assistente virtual inteligente para WhatsApp com capacidades de IA conversacional e automação de tarefas.
Funcionalidades:
- Processamento de linguagem natural com Gemini AI
- Gerenciamento de agenda via Google Calendar
- Respostas contextuais e comandos personalizados
- Automação de workflows com n8n
- Arquitetura preparada para múltiplas integrações
Stack Tecnológica:
Backend: Python • FastAPI
IA: Google Gemini AI
Integrações: Evolution API • Google Calendar API
DevOps: Docker • Docker Compose
Diferenciais:
- Arquitetura containerizada para portabilidade total
- Ambiente-agnostic (Replit, Docker, VPS, Railway)
- Configuração flexível via variáveis de ambiente
- Documentação completa de deploy
Status: MVP funcional, expansão em andamento"
           
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
