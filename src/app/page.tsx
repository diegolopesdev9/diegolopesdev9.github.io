import Image from "next/image";
import { contato, experiencias, formacao, projetos, servicos, stack, type Projeto } from "@/data/perfil";

const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

function Seta() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Titulo({ kicker, titulo, id }: { kicker: string; titulo: string; id: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{kicker}</p>
      <h2 id={id} className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {titulo}
      </h2>
    </div>
  );
}

function CapaSemImagem({ p }: { p: Projeto }) {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-surface-2">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-16 left-1/2 size-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative text-center">
        <p className="text-2xl font-semibold text-white">{p.nome}</p>
        <p className="mt-1 font-mono text-xs text-muted">
          {p.confidencial ? "Projeto sob confidencialidade · sem prints públicos" : "Prints sob demanda"}
        </p>
      </div>
    </div>
  );
}

function CardProjeto({ p, destaque }: { p: Projeto; destaque: boolean }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/40 ${
        destaque ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className={`overflow-hidden border-b border-line ${destaque ? "lg:border-r lg:border-b-0" : ""}`}>
        {p.imagem ? (
          <Image
            src={p.imagem}
            alt={`Página inicial do projeto ${p.nome}`}
            width={1200}
            height={675}
            className={`aspect-video h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] ${
              destaque ? "lg:aspect-auto lg:h-full" : ""
            }`}
          />
        ) : (
          <CapaSemImagem p={p} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-accent">{p.tipo}</p>
        <h3 className="mt-1 text-xl font-semibold text-white">{p.nome}</h3>
        <p className="mt-1 text-sm text-muted">{p.papel}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{p.resumo}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {p.destaques.map((d) => (
            <li key={d} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {d}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {p.stack.map((s) => (
            <li key={s} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-ink/80">
              {s}
            </li>
          ))}
        </ul>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:text-white"
          >
            Ver no ar <Seta />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2 font-semibold text-white">
            <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-sm text-bg">DL</span>
            Diego Lopes
          </a>
          <nav aria-label="Principal" className="hidden gap-7 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-bg hover:bg-white"
          >
            Falar comigo
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="size-2 rounded-full bg-emerald-400" />
              Disponível para CLT, PJ e freelance
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Interfaces rápidas e produtos digitais que <span className="text-accent">convertem</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Sou o Diego, desenvolvedor Front-End &amp; Full Stack com UI/UX. Levo ideias do Figma à produção com React,
              Next.js e TypeScript, e integro agentes de IA a WhatsApp, CRM e processos de negócio.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projetos" className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:bg-white">
                Ver projetos
              </a>
              <a
                href={contato.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line bg-surface px-5 py-3 font-semibold text-white hover:border-accent/50"
              >
                LinkedIn
              </a>
              <a
                href={contato.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line bg-surface px-5 py-3 font-semibold text-white hover:border-accent/50"
              >
                GitHub
              </a>
            </div>
            <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-6 text-sm sm:grid-cols-3">
              {[
                ["Front-End", "React · Next.js · TypeScript"],
                ["Back-End & IA", "Python · FastAPI · Supabase"],
                ["Entrega", "Core Web Vitals · SEO · GEO"],
              ].map(([t, d]) => (
                <div key={t} className="border-l border-accent/40 pl-4">
                  <dt className="font-mono text-xs text-accent uppercase">{t}</dt>
                  <dd className="mt-1 text-ink/90">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Projetos */}
        <section aria-labelledby="t-projetos" id="projetos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Titulo id="t-projetos" kicker="Projetos" titulo="Produtos em produção" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projetos.map((p, i) => (
              <CardProjeto key={p.slug} p={p} destaque={i === 0} />
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section aria-labelledby="t-servicos" id="servicos" className="border-y border-line bg-surface/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Titulo id="t-servicos" kicker="Serviços" titulo="Como posso ajudar o seu negócio" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((s, i) => (
                <div key={s.titulo} className="rounded-2xl border border-line bg-surface p-6">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência e stack */}
        <section aria-labelledby="t-experiencia" id="experiencia" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Titulo id="t-experiencia" kicker="Experiência" titulo="Trajetória e tecnologias" />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ol className="relative space-y-8 border-l border-line pl-6">
                {experiencias.map((e) => (
                  <li key={e.empresa} className="relative">
                    <span aria-hidden className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-accent ring-4 ring-bg" />
                    <p className="font-mono text-xs text-muted">{e.periodo} · {e.local}</p>
                    <h3 className="mt-1 font-semibold text-white">{e.empresa}</h3>
                    <p className="text-sm text-ink/80">{e.cargo}</p>
                  </li>
                ))}
              </ol>
              <h3 className="mt-12 font-mono text-xs tracking-[0.2em] text-accent uppercase">Formação</h3>
              <ul className="mt-4 space-y-4">
                {formacao.map((f) => (
                  <li key={f.curso}>
                    <p className="font-semibold text-white">{f.curso}</p>
                    <p className="text-sm text-muted">{f.instituicao} · {f.ano}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {stack.map((g) => (
                <div key={g.grupo}>
                  <h3 className="text-sm font-semibold text-white">{g.grupo}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {g.itens.map((it) => (
                      <li key={it} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink/85">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section aria-labelledby="t-contato" id="contato" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-8 sm:p-12">
            <div className="absolute -right-20 -bottom-20 size-72 rounded-full bg-accent/10 blur-3xl" />
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Contato</p>
            <h2 id="t-contato" className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tem um projeto ou uma vaga? Vamos conversar.
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Respondo rápido pelo WhatsApp. Também estou no e-mail e no LinkedIn.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:bg-white"
              >
                WhatsApp · {contato.telefone}
              </a>
              <a
                href={`mailto:${contato.email}`}
                className="rounded-lg border border-line bg-bg px-5 py-3 font-semibold text-white hover:border-accent/50"
              >
                {contato.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Diego Lopes · Sorocaba, SP</p>
          <p className="flex gap-4">
            <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={contato.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          </p>
        </div>
      </footer>
    </>
  );
}
