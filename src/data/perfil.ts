export const SITE_URL = "https://diegolopesdev9.github.io";

export const contato = {
  whatsapp: "https://wa.me/5515996118670?text=" +
    encodeURIComponent("Olá, Diego! Vi seu portfólio e quero conversar."),
  telefone: "(15) 99611-8670",
  email: "diegolopes.dev9@gmail.com",
  linkedin: "https://www.linkedin.com/in/diegolopesoliveira",
  github: "https://github.com/diegolopesdev9",
};

export type Projeto = {
  slug: string;
  nome: string;
  tipo: string;
  papel: string;
  resumo: string;
  destaques: string[];
  stack: string[];
  imagem?: string;
  link?: string;
  confidencial?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "tenet-ai",
    nome: "TENET AI",
    tipo: "SaaS multi-tenant · Agentes de IA",
    papel: "Lead Front-End Developer & UI/UX",
    resumo:
      "Plataforma de funcionários digitais: agentes autônomos de SDR, vendas, suporte e RH que atendem pelo WhatsApp e executam processos internos num painel único.",
    destaques: [
      "Design system dark tech e protótipos no Figma para dashboards de métricas, logs e atendimentos",
      "Multi-tenancy com agências isoladas, RAG configurável e tokens criptografados",
      "Integrações com WhatsApp e RD Station via webhooks em tempo real",
      "Landing page de alta conversão com SEO técnico e GEO",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Python", "Supabase", "Docker"],
    imagem: "/projetos/tenet.webp",
    link: "https://www.tenetai.com.br",
  },
  {
    slug: "a-garimpeira",
    nome: "A Garimpeira",
    tipo: "E-commerce · Brechó online",
    papel: "Desenvolvedor Front-End & UI/UX Designer",
    resumo:
      "Loja de moda circular com curadoria de peças únicas e packs para revenda, do protótipo no Figma ao checkout em produção.",
    destaques: [
      "Arquitetura de informação mobile-first com foco em conversão",
      "Checkout otimizado para reduzir fricção e abandono de carrinho",
      "Catálogo dinâmico com filtros e carregamento sob demanda; blog com editor próprio",
      "Pagamentos (Mercado Pago/Stripe), frete em tempo real e consentimento de cookies (LGPD)",
    ],
    stack: ["Next.js", "React", "Supabase", "Tiptap", "Mercado Pago", "Stripe", "Figma"],
    imagem: "/projetos/garimpeira.webp",
    link: "https://www.agarimpeirabr.com.br",
  },
  {
    slug: "breshop",
    nome: "Breshop",
    tipo: "Marketplace · Moda circular",
    papel: "Desenvolvimento full stack",
    resumo:
      "Marketplace que conecta brechós e pessoas que querem desapegar a quem busca peças de segunda mão, com pagamento, frete e repasse automatizados.",
    destaques: [
      "Pagamento via Pix e cartão com repasse para a carteira de cada lojinha (Asaas)",
      "Etiqueta de frete gerada pela plataforma e rastreio automático (Melhor Envio)",
      "Supabase com RLS, Auth, Storage e Edge Functions; painel admin em React 19",
      "Página de produto com Open Graph gerado no servidor para compartilhamento",
    ],
    stack: ["Vite", "JavaScript", "React 19", "Tailwind CSS", "Supabase", "Deno", "Asaas", "Vercel"],
    imagem: "/projetos/breshop.webp",
    link: "https://breshop-eta.vercel.app",
  },
  {
    slug: "sdr-copilot",
    nome: "SDR Copilot",
    tipo: "SaaS B2B · IA para vendas",
    papel: "Arquitetura e desenvolvimento full stack",
    resumo:
      "Inteligência comercial para agências: grava a call de vendas no Meet ou Teams, transcreve, cruza com o playbook da agência e gera o dossiê da oportunidade no CRM.",
    destaques: [
      "Extensão Chrome/Edge (Manifest V3) que grava com um clique e conecta sozinha à conta",
      "Worker que transcreve, gera o dossiê com Gemini e apaga o áudio depois (LGPD)",
      "Postgres com RLS multi-tenant e monorepo com tipos compartilhados",
    ],
    stack: ["Next.js", "TypeScript", "WXT", "Gemini", "Supabase", "pnpm monorepo"],
  },
  {
    slug: "aspx-data-room",
    nome: "ASPX Group · Data Room",
    tipo: "Site institucional · Data room digital",
    papel: "Desenvolvedor Front-End & Web Designer",
    resumo:
      "Site institucional e data room para apresentação executiva e análise de viabilidade de empreendimentos imobiliários de alto padrão na região da Faria Lima e do Itaim Bibi.",
    destaques: [
      "Autenticação e controle de acesso para documentos confidenciais",
      "Dashboards com métricas financeiras e dados geoespaciais de terrenos",
      "Foco em Core Web Vitals, segurança e navegação fluida",
    ],
    stack: ["React", "TypeScript", "Express", "Drizzle ORM", "Supabase Auth"],
    confidencial: true,
  },
  {
    slug: "tenetview",
    nome: "TenetView AI",
    tipo: "App desktop · Mercado financeiro",
    papel: "Desenvolvimento full stack",
    resumo:
      "Co-piloto de análise de mercado: screener que traduz setups escritos em linguagem natural para código e agente visual que lê gráficos na tela com IA multimodal.",
    destaques: [
      "Screener do top 100 de criptoativos com processamento local, sem rate limit",
      "HUD transparente que captura a área do gráfico sobre qualquer plataforma",
      "Atualização automática do app desktop",
    ],
    stack: ["Tauri", "React", "TypeScript", "Gemini", "Supabase"],
  },
];

export const servicos = [
  { titulo: "Sites e landing pages", texto: "Rápidos, bonitos e prontos para aparecer no Google e nas buscas com IA." },
  { titulo: "Lojas virtuais", texto: "Do catálogo ao checkout, com pagamento, frete e painel de gestão." },
  { titulo: "Sistemas e SaaS sob medida", texto: "Painéis, multi-tenant, autenticação, integrações e APIs." },
  { titulo: "Agentes de IA e automações", texto: "Atendimento no WhatsApp, CRM e tarefas internas no automático." },
  { titulo: "UI/UX e design system", texto: "Pesquisa, arquitetura de informação e protótipos no Figma." },
  { titulo: "Diagnóstico de site", texto: "SEO técnico, performance e conversão: descubro por que o site não vende." },
];

export const experiencias = [
  {
    empresa: "A Garimpeira",
    cargo: "Desenvolvedor Front-End & UI/UX Designer",
    periodo: "jul 2026 – atual",
    local: "Itapetininga, SP",
  },
  {
    empresa: "ASPX Group",
    cargo: "Desenvolvedor Front-End & Web Designer",
    periodo: "abr 2026 – jun 2026",
    local: "São Paulo, SP",
  },
  {
    empresa: "TENET AI",
    cargo: "Lead Front-End Developer & UI/UX",
    periodo: "jan 2025 – ago 2026",
    local: "Sorocaba, SP",
  },
];

export const formacao = [
  { curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas", instituicao: "Universidade Cruzeiro do Sul", ano: "2025" },
  { curso: "Engenharia Elétrica e Eletrônica", instituicao: "FACENS · Faculdade de Engenharia de Sorocaba", ano: "2010 – 2015" },
];

export const stack = [
  { grupo: "Front-End", itens: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Styled Components"] },
  { grupo: "UI/UX", itens: ["Figma", "Design Systems", "Prototipagem", "Arquitetura de Informação", "Mobile-First"] },
  { grupo: "Back-End & IA", itens: ["Python", "FastAPI", "Node.js", "Supabase", "Postgres", "Agentes de IA", "RAG"] },
  { grupo: "Performance & SEO", itens: ["Core Web Vitals", "SEO Técnico", "GEO", "Dados estruturados"] },
  { grupo: "Integrações", itens: ["APIs REST", "Webhooks", "WhatsApp", "Gateways de pagamento", "Frete"] },
];
