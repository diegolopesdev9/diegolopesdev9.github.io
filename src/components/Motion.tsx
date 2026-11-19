"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const ACCENT = "#FF4A1C";
const FG = "#EFEBE3";

function q<T extends Element = HTMLElement>(sel: string, root: ParentNode = document) {
  return root.querySelector<T>(sel);
}
function qa<T extends Element = HTMLElement>(sel: string, root: ParentNode = document) {
  return Array.from(root.querySelectorAll<T>(sel));
}

/** Todas as animações de rolagem da página. Sem JS ou com movimento reduzido, a página aparece completa e estática. */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const root = document.documentElement;
    root.classList.add("js-motion");

    // rolagem suave
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    qa<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute("href") ?? "";
        const el = id.length > 1 ? q(id) : null;
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: 0 });
      };
      a.addEventListener("click", handler);
      anchorHandlers.push([a, handler]);
    });

    const ctx = gsap.context(() => {
      // ---------- 1. mergulho na lente ----------
      const word = q(".lens-word")!;
      const mask = q(".lens-mask")!;
      const text = word.textContent ?? "";
      word.textContent = "";
      text.split("").forEach((ch, i) => {
        const s = document.createElement("span");
        s.textContent = ch;
        if (i === 0) s.className = "lens-o"; // a câmera mergulha na haste do "N"
        word.appendChild(s);
      });
      const fitAndOrigin = () => {
        gsap.set(word, { scale: 1 });
        word.style.fontSize = "100px";
        const size = Math.min((100 * mask.clientWidth * 0.9) / word.scrollWidth, mask.clientHeight * 0.46);
        word.style.fontSize = size + "px";
        const w = word.getBoundingClientRect();
        const l = q(".lens-o", word)!.getBoundingClientRect();
        word.style.transformOrigin = `${l.left - w.left + l.width * 0.18}px ${l.top - w.top + l.height * 0.55}px`;
      };
      fitAndOrigin();
      document.fonts?.ready.then(() => {
        fitAndOrigin();
        ScrollTrigger.refresh();
      });
      const lensTl = gsap.timeline({ defaults: { ease: "none" } });
      lensTl
        .to(".lens-ui", { autoAlpha: 0, y: -24, duration: 0.12 }, 0)
        .fromTo(word, { scale: 1 }, { scale: 16, duration: 0.8, ease: "power2.in", force3D: true }, 0)
        .fromTo(mask, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.2 }, 0.6)
        .fromTo(".lens-img img", { scale: 1.2 }, { scale: 1, duration: 0.8, ease: "power1.out", force3D: true }, 0)
        .fromTo(".lens-cap", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.8)
        .to({}, { duration: 0.2 });
      ScrollTrigger.create({ trigger: ".lens", start: "top top", end: "+=150%", pin: true, scrub: 0.4, animation: lensTl, onRefreshInit: fitAndOrigin });

      // ---------- 2. manifesto palavra por palavra ----------
      const splitWords = (node: Node) => {
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            const hot = node instanceof Element && node.classList.contains("hot");
            (n.textContent ?? "").split(/(\s+)/).forEach((t) => {
              if (!t) return;
              if (/^\s+$/.test(t)) {
                frag.appendChild(document.createTextNode(t));
                return;
              }
              const s = document.createElement("span");
              s.className = "w" + (hot ? " hot" : "");
              s.textContent = t;
              frag.appendChild(s);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === Node.ELEMENT_NODE) splitWords(n);
        });
      };
      splitWords(q(".split-words")!);
      gsap.to(qa(".manifesto .w"), {
        color: (_i: number, el: Element) => (el.classList.contains("hot") ? ACCENT : FG),
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: ".manifesto p", start: "top 75%", end: "bottom 45%", scrub: 0.4 },
      });

      // ---------- 3. projetos com prévia fixa ----------
      const rows = qa(".row");
      const imgs = qa<HTMLImageElement>(".pv-frame img");
      const pvName = q(".pv-name")!;
      const pvCount = q(".pv-count b")!;
      const frame = q(".pv-frame")!;
      let active = 0;
      const activate = (i: number) => {
        if (i === active) return;
        const down = i > active;
        imgs.forEach((im, k) => {
          if (k === i) {
            gsap.fromTo(im, { clipPath: down ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)", zIndex: 2 }, { clipPath: "inset(0% 0 0% 0)", duration: 0.8, ease: "expo.out" });
          } else gsap.set(im, { zIndex: k === active ? 1 : 0 });
        });
        rows.forEach((r, k) => r.classList.toggle("on", k === i));
        active = i;
        pvName.textContent = rows[i].dataset.name ?? "";
        pvCount.textContent = String(i + 1).padStart(2, "0");
      };

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1000px)", () => {
        rows[0].classList.add("on");
        const enter: Array<[HTMLElement, () => void]> = [];
        rows.forEach((r, i) => {
          const last = i === rows.length - 1;
          ScrollTrigger.create({ trigger: r, start: "top 55%", end: last ? "max" : "bottom 55%", onToggle: (s) => s.isActive && activate(i) });
          const im = imgs[i];
          if (im?.classList.contains("tall")) {
            // percorre a página inteira do projeto, devagar: a linha é alta para dar distância
            gsap.fromTo(im, { y: 0 }, {
              y: () => -(im.offsetHeight - frame.clientHeight),
              ease: "none",
              scrollTrigger: { trigger: r, start: "top 60%", end: "bottom 40%", scrub: 1, invalidateOnRefresh: true },
            });
          }
          const h = () => activate(i);
          r.addEventListener("mouseenter", h);
          enter.push([r, h]);
        });
        gsap.from(".preview", { opacity: 0, y: 40, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".idx-grid", start: "top 75%" } });

        // agente: a conversa acontece com a seção travada
        const ag = q(".agent")!;
        ag.classList.add("pinned");
        ScrollTrigger.create({ trigger: ag, start: "top top", end: "+=170%", pin: true, scrub: 0.6, animation: agentTimeline() });

        // processo travado na horizontal
        const proc = q(".proc")!;
        proc.classList.add("pinned");
        const steps = qa(".step");
        const pt = gsap.timeline({ defaults: { ease: "none" } }).to(".proc-line i", { scaleX: 1, duration: 1 });
        ScrollTrigger.create({
          trigger: proc, start: "top top", end: "+=130%", pin: true, scrub: 0.5, animation: pt,
          onUpdate: (s) => steps.forEach((st, k) => st.classList.toggle("on", s.progress >= k / 4 + 0.02)),
        });

        closeBraces(1.7, 48);

        return () => {
          enter.forEach(([r, h]) => r.removeEventListener("mouseenter", h));
          ag.classList.remove("pinned");
          proc.classList.remove("pinned");
        };
      });
      mm.add("(max-width: 999px)", () => {
        // projetos: o aparelho fica preso na tela e a página do cliente rola dentro dele
        rows.forEach((r) => {
          const stage = q(".m-stage", r);
          const shot = q<HTMLImageElement>(".m-shot", r);
          const screen = q(".device-screen", r);
          const device = q(".device", r);
          if (!stage || !shot || !screen || !device) return;
          gsap.fromTo(device, { scale: 0.86, rotate: -2, opacity: 0.5 }, {
            scale: 1, rotate: 0, opacity: 1, ease: "none",
            scrollTrigger: { trigger: stage, start: "top bottom", end: "top 30%", scrub: 0.5 },
          });
          gsap.fromTo(shot, { y: 0 }, {
            y: () => -(shot.offsetHeight - screen.clientHeight), ease: "none",
            scrollTrigger: { trigger: stage, start: "top 70px", endTrigger: r, end: "bottom bottom", scrub: 0.8, invalidateOnRefresh: true },
          });
        });

        // agente: o aparelho trava e a conversa acontece
        ScrollTrigger.create({ trigger: ".agent-stage", start: "center center", end: "+=160%", pin: true, scrub: 0.6, animation: agentTimeline() });

        // processo: os passos passam de lado com a seção travada
        const proc = q(".proc")!;
        proc.classList.add("pinned-m");
        const track = q(".proc-track")!;
        const steps = qa(".step");
        const dist = () => track.scrollWidth - steps[0].offsetWidth;
        const tl = gsap.timeline({ defaults: { ease: "none" } })
          .to(track, { x: () => -dist(), duration: 1 })
          .to(".proc-bar i", { scaleX: 1, duration: 1 }, 0);
        ScrollTrigger.create({
          trigger: proc, start: "top top", end: () => "+=" + dist() * 1.3, pin: true, scrub: 0.5, animation: tl, invalidateOnRefresh: true,
          // ao soltar o dedo, encaixa sempre num passo inteiro
          snap: { snapTo: 1 / (steps.length - 1), duration: { min: 0.2, max: 0.5 }, delay: 0.08, ease: "power1.inOut" },
          onUpdate: (s) => steps.forEach((st, k) => st.classList.toggle("on", s.progress >= k / (steps.length - 1) - 0.08)),
        });
        steps[0].classList.add("on");

        closeBraces(1.35, 10);

        return () => {
          proc.classList.remove("pinned-m");
          gsap.set(track, { x: 0 });
        };
      });

      // fechamento: o símbolo {dl} abre e as chaves emolduram o convite
      function closeBraces(scaleTo: number, margin: number) {
        const bl = q(".close-stage .bl")!;
        const br = q(".close-stage .br")!;
        const dl = q(".close-stage .dl-mid")!;
        const edge = (el: Element, dir: -1 | 1) => {
          gsap.set(el, { x: 0, scale: 1 });
          const r = el.getBoundingClientRect();
          const half = (r.width * scaleTo) / 2;
          const target = dir < 0 ? margin + half : window.innerWidth - margin - half;
          return target - (r.left + r.width / 2);
        };
        const ct = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        ct.fromTo(dl, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0.6, duration: 0.3 }, 0.05)
          .fromTo(bl, { x: 0, scale: 1 }, { x: () => edge(bl, -1), scale: scaleTo, duration: 0.6 }, 0.15)
          .fromTo(br, { x: 0, scale: 1 }, { x: () => edge(br, 1), scale: scaleTo, duration: 0.6 }, 0.15)
          .fromTo(".close-in", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.6)
          .to({}, { duration: 0.2 });
        ScrollTrigger.create({ trigger: ".close", start: "top top", end: "+=130%", pin: true, scrub: 0.6, animation: ct, invalidateOnRefresh: true });
      }

      function agentTimeline() {
        const msgs = qa(".a-body .a-msg");
        const typing = q(".a-typing")!;
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.set(msgs, { autoAlpha: 0, y: 14, display: "none" }, 0);
        msgs.forEach((m, i) => {
          if (i === msgs.length - 1) tl.set(typing, { display: "flex" }).to({}, { duration: 0.6 }).set(typing, { display: "none" });
          tl.set(m, { display: "block" }).to(m, { autoAlpha: 1, y: 0, duration: 0.4 }).to({}, { duration: 0.25 });
        });
        tl.fromTo(".a-crm", { autoAlpha: 0, y: 30, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" });
        tl.to({}, { duration: 0.4 });
        return tl;
      }
      gsap.fromTo(".agent-bg", { scale: 0.85, opacity: 0.4 }, { scale: 1.1, opacity: 1, ease: "none", scrollTrigger: { trigger: ".agent", start: "top bottom", end: "bottom top", scrub: true } });

      // ---------- 4. letreiro que reage à velocidade da rolagem ----------
      const tweens = qa(".mq-inner").map((el, i) =>
        i % 2 === 0
          ? gsap.fromTo(el, { xPercent: 0 }, { xPercent: -50, duration: 28, ease: "none", repeat: -1 })
          : gsap.fromTo(el, { xPercent: -50 }, { xPercent: 0, duration: 32, ease: "none", repeat: -1 }),
      );
      const skewTo = gsap.quickTo(".mq", "skewX", { duration: 0.5, ease: "power3" });
      let skewTimer: ReturnType<typeof setTimeout> | undefined;
      ScrollTrigger.create({
        trigger: ".svc-sec", start: "top bottom", end: "bottom top",
        onUpdate: (s) => {
          const v = s.getVelocity();
          const boost = 1 + Math.min(Math.abs(v) / 350, 5);
          tweens.forEach((t) => {
            gsap.to(t, { timeScale: s.direction * boost, duration: 0.25, overwrite: true });
            gsap.to(t, { timeScale: s.direction, duration: 1.2, delay: 0.25 });
          });
          skewTo(gsap.utils.clamp(-8, 8, v / -250));
          clearTimeout(skewTimer);
          skewTimer = setTimeout(() => skewTo(0), 160);
        },
      });
      gsap.from(".svc-list li", { y: 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".svc-list", start: "top 80%" } });

      // ---------- marca {dl}: nome recolhe e indicador de rolagem ----------
      gsap.to(".brand .wm", { autoAlpha: 0, x: -30, ease: "none", scrollTrigger: { start: 40, end: 260, scrub: true } });
      gsap.fromTo(".prog", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, ease: "none", scrollTrigger: { start: 160, end: 360, scrub: true } });
      gsap.to(".prog-m i", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } });
      // WhatsApp fixo no celular: aparece depois da abertura e sai quando o convite final entra
      const wa = q(".wa-float");
      if (wa) {
        ScrollTrigger.create({
          start: () => window.innerHeight * 1.2,
          endTrigger: ".close", end: "top 60%",
          onToggle: (s) => gsap.to(wa, { autoAlpha: s.isActive ? 1 : 0, y: s.isActive ? 0 : 16, duration: 0.35, ease: "power2.out", overwrite: true }),
        });
      }
      const progN = q(".prog-n")!;
      gsap.to(".prog-bar i", {
        scaleX: 1, ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true, onUpdate: (st) => { progN.textContent = String(Math.round(st.progress * 99)).padStart(2, "0"); } },
      });
    });

    // as seções travadas foram criadas fora da ordem da página: reordena antes de calcular as posições
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    const onLoad = () => { ScrollTrigger.sort(); ScrollTrigger.refresh(); };
    window.addEventListener("load", onLoad);
    const pending = qa<HTMLImageElement>("img").filter((im) => !im.complete);
    const onImg = () => ScrollTrigger.refresh();
    pending.forEach((im) => im.addEventListener("load", onImg, { once: true }));

    return () => {
      window.removeEventListener("load", onLoad);
      pending.forEach((im) => im.removeEventListener("load", onImg));
      anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h));
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      root.classList.remove("js-motion");
    };
  }, []);

  return null;
}
