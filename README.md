# Portfólio · Diego Lopes

Site publicado em **https://diegolopesdev9.github.io**.

Vitrine para novos clientes: sites, sistemas e agentes de IA para empresas de qualquer setor.

## Stack

- Next.js 16 (App Router) com exportação estática (`output: "export"`)
- TypeScript, CSS próprio (tema escuro com destaque `#FF4A1C`)
- Animações de rolagem com GSAP (ScrollTrigger) e rolagem suave com Lenis
- SEO: metadata, Open Graph, JSON-LD `Person`, sitemap e robots
- Deploy automático no GitHub Pages via GitHub Actions a cada push na `main`

## Rodar localmente

```bash
npm install
npm run dev
```

## Onde mexer

- Textos e seções: `src/app/page.tsx`
- Animações: `src/components/Motion.tsx` (sem JS ou com "reduzir movimento", a página aparece completa e parada)
- Estilos: `src/app/globals.css`
- Prints dos projetos: `public/img/` (imagens altas rolam dentro da prévia)
- Marca {dl}: `public/brand/` e `src/app/icon.svg`
- SEO e contatos: `src/app/layout.tsx` e `src/data/perfil.ts`

## Contato

- WhatsApp: (15) 99611-8670
- E-mail: diegolopes.dev9@gmail.com
- LinkedIn: [diegolopesoliveira](https://www.linkedin.com/in/diegolopesoliveira)
