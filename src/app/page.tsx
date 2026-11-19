import Motion from "@/components/Motion";

// A página é estática (export para o GitHub Pages). Todo o movimento fica em <Motion />,
// que só roda no navegador e respeita "reduzir movimento".
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="prog" aria-hidden="true"><svg viewBox="26 17 44 94"><path fill="#FF4A1C" d="M69.416015625 100.958984375V110.28515625H62.091796875Q49.93359375 110.28515625 45.8076171875 106.671875Q41.681640625 103.05859375 41.681640625 92.267578125V81.76953125Q41.681640625 74.396484375 39.0693359375 71.5888671875Q36.45703125 68.78125 29.62109375 68.78125H26.59375V59.455078125H29.62109375Q36.45703125 59.455078125 39.0693359375 56.671875Q41.681640625 53.888671875 41.681640625 46.466796875V35.96875Q41.681640625 25.177734375 45.8076171875 21.5888671875Q49.93359375 18.0 62.091796875 18.0H69.416015625V27.27734375H63.41015625Q58.33203125 27.27734375 56.623046875 29.328125Q54.9140625 31.37890625 54.9140625 38.361328125V48.56640625Q54.9140625 56.623046875 52.521484375 59.89453125Q50.12890625 63.166015625 43.9765625 64.09375Q50.12890625 65.119140625 52.521484375 68.439453125Q54.9140625 71.759765625 54.9140625 79.767578125V89.77734375Q54.9140625 96.80859375 56.623046875 98.8837890625Q58.33203125 100.958984375 63.41015625 100.958984375Z"/></svg><span className="prog-bar"><i></i></span><span className="prog-n mono">00</span><svg viewBox="195 17 44 94"><path fill="#FF4A1C" d="M195.404296875 100.958984375H201.3125Q206.390625 100.958984375 208.1484375 98.859375Q209.90625 96.759765625 209.90625 89.77734375V79.767578125Q209.90625 71.759765625 212.298828125 68.439453125Q214.69140625 65.119140625 220.794921875 64.09375Q214.642578125 63.166015625 212.2744140625 59.89453125Q209.90625 56.623046875 209.90625 48.56640625V38.361328125Q209.90625 31.4765625 208.1728515625 29.376953125Q206.439453125 27.27734375 201.3125 27.27734375H195.404296875V18.0H202.728515625Q214.837890625 18.0 218.9150390625 21.5888671875Q222.9921875 25.177734375 222.9921875 35.96875V46.466796875Q222.9921875 53.83984375 225.6533203125 56.6474609375Q228.314453125 59.455078125 235.19921875 59.455078125H238.2265625V68.78125H235.19921875Q228.314453125 68.78125 225.6533203125 71.61328125Q222.9921875 74.4453125 222.9921875 81.76953125V92.267578125Q222.9921875 103.05859375 218.9150390625 106.671875Q214.837890625 110.28515625 202.728515625 110.28515625H195.404296875Z"/></svg></div>
      <div className="prog-m" aria-hidden="true"><i /></div>
      <a className="wa-float" href="https://wa.me/5515996118670?text=Ol%C3%A1%2C%20Diego!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar." target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp"><span className="wb">{"{"}</span>WhatsApp<span className="wb">{"}"}</span></a>
      <header className="hdr">
        <div className="wrap">
          <a className="brand" href="#topo"><svg className="logo" viewBox="20 10 805 115" role="img" aria-label="Diego Lopes"><g className="sym"><path fill="#FF4A1C" d="M69.416015625 100.958984375V110.28515625H62.091796875Q49.93359375 110.28515625 45.8076171875 106.671875Q41.681640625 103.05859375 41.681640625 92.267578125V81.76953125Q41.681640625 74.396484375 39.0693359375 71.5888671875Q36.45703125 68.78125 29.62109375 68.78125H26.59375V59.455078125H29.62109375Q36.45703125 59.455078125 39.0693359375 56.671875Q41.681640625 53.888671875 41.681640625 46.466796875V35.96875Q41.681640625 25.177734375 45.8076171875 21.5888671875Q49.93359375 18.0 62.091796875 18.0H69.416015625V27.27734375H63.41015625Q58.33203125 27.27734375 56.623046875 29.328125Q54.9140625 31.37890625 54.9140625 38.361328125V48.56640625Q54.9140625 56.623046875 52.521484375 59.89453125Q50.12890625 63.166015625 43.9765625 64.09375Q50.12890625 65.119140625 52.521484375 68.439453125Q54.9140625 71.759765625 54.9140625 79.767578125V89.77734375Q54.9140625 96.80859375 56.623046875 98.8837890625Q58.33203125 100.958984375 63.41015625 100.958984375Z"/><path fill="#EFEBE3" d="M112.828125 47.052734375V18.0H127.0859375V93.9765625H112.828125V85.87109375Q110.533203125 90.607421875 106.8955078125 93.0Q103.2578125 95.392578125 98.326171875 95.392578125Q88.951171875 95.392578125 83.775390625 87.873046875Q78.599609375 80.353515625 78.599609375 66.681640625Q78.599609375 52.814453125 83.8486328125 45.392578125Q89.09765625 37.970703125 98.814453125 37.970703125Q103.208984375 37.970703125 106.7001953125 40.2412109375Q110.19140625 42.51171875 112.828125 47.052734375ZM92.90625 66.779296875Q92.90625 74.689453125 95.54296875 79.181640625Q98.1796875 83.673828125 102.818359375 83.673828125Q107.45703125 83.673828125 110.142578125 79.181640625Q112.828125 74.689453125 112.828125 66.779296875Q112.828125 58.869140625 110.142578125 54.376953125Q107.45703125 49.884765625 102.818359375 49.884765625Q98.1796875 49.884765625 95.54296875 54.376953125Q92.90625 58.869140625 92.90625 66.779296875Z"/><path fill="#EFEBE3" d="M149.306640625 71.173828125V28.986328125H134.8046875V18.0H163.61328125V71.173828125Q163.61328125 77.619140625 165.615234375 80.3046875Q167.6171875 82.990234375 172.40234375 82.990234375H183.828125V93.9765625H168.3984375Q158.193359375 93.9765625 153.75 88.703125Q149.306640625 83.4296875 149.306640625 71.173828125Z"/><path fill="#FF4A1C" d="M195.404296875 100.958984375H201.3125Q206.390625 100.958984375 208.1484375 98.859375Q209.90625 96.759765625 209.90625 89.77734375V79.767578125Q209.90625 71.759765625 212.298828125 68.439453125Q214.69140625 65.119140625 220.794921875 64.09375Q214.642578125 63.166015625 212.2744140625 59.89453125Q209.90625 56.623046875 209.90625 48.56640625V38.361328125Q209.90625 31.4765625 208.1728515625 29.376953125Q206.439453125 27.27734375 201.3125 27.27734375H195.404296875V18.0H202.728515625Q214.837890625 18.0 218.9150390625 21.5888671875Q222.9921875 25.177734375 222.9921875 35.96875V46.466796875Q222.9921875 53.83984375 225.6533203125 56.6474609375Q228.314453125 59.455078125 235.19921875 59.455078125H238.2265625V68.78125H235.19921875Q228.314453125 68.78125 225.6533203125 71.61328125Q222.9921875 74.4453125 222.9921875 81.76953125V92.267578125Q222.9921875 103.05859375 218.9150390625 106.671875Q214.837890625 110.28515625 202.728515625 110.28515625H195.404296875Z"/></g><g className="wm"><path fill="#EFEBE3" d="M311.435546875 100.51953125C333.701171875 100.51953125 347.03125 86.5546875 347.03125 64.044921875C347.03125 41.681640625 333.603515625 27.765625 311.97265625 27.765625H286.875V100.51953125ZM299.765625 89.484375V38.80078125H311.142578125C326.474609375 38.80078125 333.994140625 48.029296875 333.994140625 64.044921875C333.994140625 80.20703125 326.572265625 89.484375 310.751953125 89.484375Z"/><path fill="#EFEBE3" d="M354.015625 100.51953125H366.3203125V48.95703125H354.015625ZM360.16796875 41.291015625C364.3671875 41.291015625 367.541015625 38.263671875 367.541015625 34.259765625C367.541015625 30.3046875 364.3671875 27.27734375 360.16796875 27.27734375C355.96875 27.27734375 352.794921875 30.3046875 352.794921875 34.259765625C352.794921875 38.263671875 355.96875 41.291015625 360.16796875 41.291015625Z"/><path fill="#EFEBE3" d="M398.01171875 101.69140625C410.072265625 101.69140625 419.642578125 94.708984375 421.595703125 84.6015625H410.072265625C408.65625 88.99609375 404.505859375 91.974609375 398.3046875 91.974609375C390.00390625 91.974609375 385.21875 86.359375 384.92578125 77.9609375H422.23046875V74.591796875C422.23046875 58.771484375 412.3671875 47.78515625 397.5234375 47.78515625C383.0703125 47.78515625 372.865234375 59.11328125 372.865234375 74.787109375C372.865234375 90.412109375 382.533203125 101.69140625 398.01171875 101.69140625ZM385.0234375 69.46484375C385.853515625 62.091796875 390.58984375 57.55078125 397.71875 57.55078125C404.84765625 57.55078125 409.6328125 62.091796875 410.4140625 69.46484375Z"/><path fill="#EFEBE3" d="M451.96875 121.61328125C465.93359375 121.61328125 476.333984375 115.16796875 476.333984375 99.201171875V48.95703125H464.17578125V56.623046875H464.126953125C460.708984375 50.71484375 455.09375 47.931640625 448.404296875 47.931640625C435.171875 47.931640625 426.1875 58.8203125 426.1875 74.494140625C426.1875 90.021484375 435.025390625 100.861328125 448.501953125 100.861328125C455.2890625 100.861328125 460.7578125 98.126953125 464.078125 92.072265625H464.126953125V99.93359375C464.126953125 107.84375 459.68359375 112.091796875 451.96875 112.091796875C446.20703125 112.091796875 441.958984375 109.748046875 440.787109375 105.3046875H428.7265625C430.09375 115.314453125 438.345703125 121.61328125 451.96875 121.61328125ZM451.3828125 90.705078125C443.765625 90.705078125 438.638671875 84.89453125 438.638671875 74.34765625C438.638671875 63.849609375 443.765625 57.990234375 451.3828125 57.990234375C459.439453125 57.990234375 464.712890625 64.435546875 464.712890625 74.34765625C464.712890625 84.259765625 459.439453125 90.705078125 451.3828125 90.705078125Z"/><path fill="#EFEBE3" d="M508.318359375 101.69140625C523.50390625 101.69140625 533.7578125 90.802734375 533.7578125 74.787109375C533.7578125 58.771484375 523.50390625 47.78515625 508.318359375 47.78515625C493.1328125 47.78515625 482.87890625 58.771484375 482.87890625 74.787109375C482.87890625 90.802734375 493.1328125 101.69140625 508.318359375 101.69140625ZM508.318359375 91.388671875C500.359375 91.388671875 495.330078125 85.08984375 495.330078125 74.787109375C495.330078125 64.435546875 500.408203125 58.087890625 508.318359375 58.087890625C516.1796875 58.087890625 521.2578125 64.484375 521.2578125 74.787109375C521.2578125 85.041015625 516.228515625 91.388671875 508.318359375 91.388671875Z"/><path fill="#EFEBE3" d="M561.447265625 100.51953125H608.078125V89.337890625H574.337890625V27.765625H561.447265625Z"/><path fill="#EFEBE3" d="M636.888671875 101.69140625C652.07421875 101.69140625 662.328125 90.802734375 662.328125 74.787109375C662.328125 58.771484375 652.07421875 47.78515625 636.888671875 47.78515625C621.703125 47.78515625 611.44921875 58.771484375 611.44921875 74.787109375C611.44921875 90.802734375 621.703125 101.69140625 636.888671875 101.69140625ZM636.888671875 91.388671875C628.9296875 91.388671875 623.900390625 85.08984375 623.900390625 74.787109375C623.900390625 64.435546875 628.978515625 58.087890625 636.888671875 58.087890625C644.75 58.087890625 649.828125 64.484375 649.828125 74.787109375C649.828125 85.041015625 644.798828125 91.388671875 636.888671875 91.388671875Z"/><path fill="#EFEBE3" d="M668.82421875 120.9296875H681.12890625V92.755859375H681.275390625C684.498046875 98.615234375 689.91796875 101.544921875 696.65625 101.544921875C710.1328125 101.544921875 718.970703125 90.75390625 718.970703125 74.689453125C718.970703125 58.8203125 709.986328125 47.931640625 696.705078125 47.931640625C690.015625 47.931640625 684.302734375 50.666015625 681.080078125 56.134765625H680.93359375V48.95703125H668.82421875ZM693.775390625 91.2421875C685.71875 91.2421875 680.4453125 84.748046875 680.4453125 74.689453125C680.4453125 64.6796875 685.71875 58.13671875 693.775390625 58.13671875C701.392578125 58.13671875 706.51953125 64.044921875 706.51953125 74.689453125C706.51953125 85.3828125 701.392578125 91.2421875 693.775390625 91.2421875Z"/><path fill="#EFEBE3" d="M748.26953125 101.69140625C760.330078125 101.69140625 769.900390625 94.708984375 771.853515625 84.6015625H760.330078125C758.9140625 88.99609375 754.763671875 91.974609375 748.5625 91.974609375C740.26171875 91.974609375 735.4765625 86.359375 735.18359375 77.9609375H772.48828125V74.591796875C772.48828125 58.771484375 762.625 47.78515625 747.78125 47.78515625C733.328125 47.78515625 723.123046875 59.11328125 723.123046875 74.787109375C723.123046875 90.412109375 732.791015625 101.69140625 748.26953125 101.69140625ZM735.28125 69.46484375C736.111328125 62.091796875 740.84765625 57.55078125 747.9765625 57.55078125C755.10546875 57.55078125 759.890625 62.091796875 760.671875 69.46484375Z"/><path fill="#EFEBE3" d="M799.052734375 101.740234375C811.796875 101.740234375 820.927734375 95.392578125 820.927734375 85.333984375C820.927734375 77.765625 816.19140625 73.2734375 805.986328125 71.125L796.708984375 69.220703125C792.412109375 68.29296875 789.873046875 66.388671875 789.873046875 63.3125C789.873046875 59.796875 793.193359375 57.0625 798.61328125 57.0625C804.228515625 57.0625 807.98828125 60.431640625 808.0859375 65.021484375H819.658203125C819.365234375 54.42578125 810.8203125 47.833984375 798.3203125 47.833984375C785.72265625 47.833984375 777.568359375 54.23046875 777.568359375 63.703125C777.568359375 71.515625 782.744140625 76.544921875 792.607421875 78.595703125L801.396484375 80.40234375C805.7421875 81.330078125 808.427734375 83.13671875 808.427734375 86.26171875C808.427734375 89.923828125 804.814453125 92.51171875 798.857421875 92.51171875C792.705078125 92.51171875 789.091796875 89.630859375 788.5546875 84.6015625H776.396484375C777.177734375 95.685546875 786.50390625 101.740234375 799.052734375 101.740234375Z"/></g></svg></a>
          <nav aria-label="Principal"><a href="#projetos">Projetos</a><a href="#servicos">Serviços</a><a href="#agente">Agentes de IA</a><a href="#processo">Como funciona</a></nav>
          <a className="pill" href="https://wa.me/5515996118670?text=Ol%C3%A1%2C%20Diego!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar." target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
        </div>
      </header>

      <main id="topo">

        <section className="lens" aria-labelledby="t-lens">
          <div className="lens-img"><img src="/img/garimpeira-hero.jpg" alt="Página inicial da loja virtual A Garimpeirabr, feita por Diego Lopes" width="1280" height="730" /></div>
          <div className="lens-mask" aria-hidden="true"><span className="lens-word">No ar</span></div>
          <div className="lens-ui">
            <div className="wrap lens-top mono"><span>Sites · sistemas · agentes de IA</span>
            </div>
            <div className="wrap">
              <h1 id="t-lens" className="lens-sub">Sites, sistemas e agentes de IA para empresas que querem <b>crescer na internet</b>. Do design ao ar, você fala direto com quem faz.</h1>
              <a className="cta-main" href="https://wa.me/5515996118670?text=Ol%C3%A1%2C%20Diego!%20Quero%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">Pedir orçamento ↗</a>
              <span className="scroll-cue mono"><i aria-hidden="true"></i>Role para entrar</span>
            </div>
          </div>
          <div className="lens-cap">
            <div className="wrap">
              <div><span className="mono acc">Projeto em destaque</span><h2>A Garimpeirabr</h2><p>Loja de moda circular feita de ponta a ponta: o site, o painel de gestão e o atendimento com IA no WhatsApp.</p></div>
              <a className="pill" href="https://www.agarimpeirabr.com.br" target="_blank" rel="noopener noreferrer">Ver a loja ↗</a>
            </div>
          </div>
        </section>


        <section className="manifesto" aria-label="Quem faz">
          <div className="wrap">
            <p className="split-words">Eu desenho, programo e coloco no ar sites institucionais, plataformas, lojas virtuais e agentes de IA para empresas de <span className="hot">qualquer setor</span>. Sem agência no meio: você fala com quem faz, do primeiro rascunho ao <span className="hot">sistema rodando</span>.</p>
            <div className="manifesto-meta mono"><span>Design no Figma</span><span>Código sob medida</span><span>Publicação e suporte</span></div>
          </div>
        </section>


        <section className="idx" id="projetos" aria-labelledby="t-idx">
          <div className="wrap">
            <div className="sec-label mono"><span id="t-idx">Projetos no ar</span><span>04 em destaque</span></div>
            <div className="idx-grid">
              <ol className="idx-list">
                <li className="row long" data-i="0" data-name="A Garimpeirabr">
                  <div className="row-in">
                  <h3>A Garimpeirabr<span className="dot">.</span></h3>
                  <div className="meta mono"><span>E-commerce completo</span><span>Front-end e back-end</span><span>Moda circular</span></div>
                  <p>Loja, pagamento com Mercado Pago, frete calculado e um painel com pedidos e clientes. Uma assistente de IA atende no WhatsApp e avisa a cliente a cada etapa do pedido. Ainda tem blog com colunistas e posts e Reels do Instagram gerados pelo próprio painel.</p>
                  <a href="https://www.agarimpeirabr.com.br" target="_blank" rel="noopener noreferrer">Ver no ar ↗</a>
                  </div>
                <div className="m-stage" aria-hidden="true"><div className="m-head"><span className="m-n">01 / 04</span><span className="m-name">A Garimpeirabr</span></div><div className="device phone"><div className="device-notch" /><div className="device-screen"><img className="m-shot" src="/img/garimpeira-mobile.jpg" alt="" loading="lazy" /></div></div></div>
                <div className="m-space" aria-hidden="true" />
                </li>
                <li className="row long" data-i="1" data-name="TENET AI">
                  <div className="row-in">
                  <h3>TENET AI<span className="dot">.</span></h3>
                  <div className="meta mono"><span>Plataforma</span><span>Agentes de IA no WhatsApp</span></div>
                  <p>Funcionários digitais que fazem pré-venda, vendas, suporte e RH pelo WhatsApp, acompanhados num painel único.</p>
                  <a href="https://www.tenetai.com.br" target="_blank" rel="noopener noreferrer">Ver o site ↗</a>
                  </div>
                <div className="m-stage" aria-hidden="true"><div className="m-head"><span className="m-n">02 / 04</span><span className="m-name">TENET AI</span></div><div className="device phone"><div className="device-notch" /><div className="device-screen"><img className="m-shot" src="/img/tenet-mobile.jpg" alt="" loading="lazy" /></div></div></div>
                <div className="m-space" aria-hidden="true" />
                </li>
                <li className="row long" data-i="2" data-name="Brechorama">
                  <div className="row-in">
                  <h3>Brechorama<span className="dot">.</span></h3>
                  <div className="meta mono"><span>Loja virtual</span><span>Brechó retrô</span><span>2026</span></div>
                  <p>Pix e cartão, frete pelos Correios e Jadlog, e-mails de pedido com a marca da loja e um painel com o lucro de cada peça.</p>
                  <a href="https://www.brechorama.com.br" target="_blank" rel="noopener noreferrer">Ver no ar ↗</a>
                  </div>
                <div className="m-stage" aria-hidden="true"><div className="m-head"><span className="m-n">03 / 04</span><span className="m-name">Brechorama</span></div><div className="device phone"><div className="device-notch" /><div className="device-screen"><img className="m-shot" src="/img/brechorama-mobile.jpg" alt="" loading="lazy" /></div></div></div>
                <div className="m-space" aria-hidden="true" />
                </li>
                <li className="row long" data-i="3" data-name="OunceTrade">
                  <div className="row-in">
                  <h3>OunceTrade<span className="dot">.</span></h3>
                  <div className="meta mono"><span>Plataforma</span><span>Robôs de cripto</span><span>Em teste</span></div>
                  <p>Cada usuário monta o seu robô com estratégias prontas, conecta a corretora e acompanha a banca em tempo real. Tem modo simulado para testar sem risco, alertas no Telegram e um painel de administração com convites e uso do servidor.</p>
                  <span className="mono" style={{ color: "var(--muted)" }}>Acesso por convite</span>
                  </div>
                <div className="m-stage" aria-hidden="true"><div className="m-head"><span className="m-n">04 / 04</span><span className="m-name">OunceTrade</span></div><div className="device browser"><div className="device-bar"><i /><i /><i /><span>ouncetrade.vercel.app</span></div><div className="device-screen"><img className="m-shot" src="/img/ouncetrade-full.jpg" alt="" loading="lazy" /></div></div></div>
                <div className="m-space" aria-hidden="true" />
                </li>
              </ol>
              <div className="preview" aria-hidden="true">
                <div className="pv-frame">
                  <img className="tall on" src="/img/garimpeira-full.jpg" alt="" />
                  <img className="tall" src="/img/tenet-full.jpg" alt="" />
                  <img className="tall" src="/img/brechorama-full.jpg" alt="" />
                  <img className="tall" src="/img/ouncetrade-full.jpg" alt="" />
                </div>
                <div className="pv-meta mono"><span className="pv-name">A Garimpeirabr</span><span className="pv-count"><b>01</b> / 04</span></div>
              </div>
            </div>
            <div className="also mono"><span>Também: <b>SDR Copilot</b> (IA para reuniões de venda) · <b>TenetView AI</b> (app de análise de mercado) · <b>ASPX Group</b> (confidencial)</span></div>
          </div>
        </section>


        <section className="svc-sec" id="servicos" aria-labelledby="t-svc">
          <div className="mq" aria-hidden="true">
            <div className="mq-row out"><div className="mq-inner"><span>Sites · Sistemas · Agentes de IA ·</span><span>Sites · Sistemas · Agentes de IA ·</span></div></div>
            <div className="mq-row fill"><div className="mq-inner"><span>Plataformas <i>✦</i> Lojas virtuais <i>✦</i> Diagnóstico <i>✦</i></span><span>Plataformas <i>✦</i> Lojas virtuais <i>✦</i> Diagnóstico <i>✦</i></span></div></div>
          </div>
          <div className="wrap">
            <div className="sec-label mono"><span id="t-svc">O que eu faço</span><span>Você não precisa entender de tecnologia</span></div>
            <ul className="svc-list">
              <li><h3>Sites institucionais</h3><p>Um site que passa confiança, aparece no Google e transforma visita em contato com o seu comercial.</p><span className="tags mono">Design · SEO · Velocidade</span></li>
              <li><h3>Sistemas e plataformas</h3><p>Painéis, área do cliente, SaaS e integrações com o ERP ou o CRM que a sua empresa já usa.</p><span className="tags mono">Login · ERP · Integrações</span></li>
              <li><h3>Agentes de IA</h3><p>Atendimento no WhatsApp que responde a qualquer hora com os dados da sua empresa e registra cada contato.</p><span className="tags mono">WhatsApp · CRM</span></li>
              <li><h3>Lojas virtuais</h3><p>Catálogo, carrinho, Pix e cartão, frete calculado na hora e um painel para acompanhar as vendas.</p><span className="tags mono">Pagamento · Frete · Painel</span></li>
              <li><h3>Diagnóstico</h3><p>Já tem site e ele não traz clientes? Analiso velocidade, Google e os pontos onde o visitante desiste.</p><span className="tags mono">Velocidade · Conversão</span></li>
            </ul>
          </div>
        </section>


        <section className="agent" id="agente" aria-labelledby="t-agent">
          <div className="wrap agent-grid">
            <div className="agent-copy">
              <span className="mono acc">Agentes de IA</span>
              <h2 id="t-agent">Atendimento que <span className="acc">não dorme</span></h2>
              <p>Um agente responde no WhatsApp com os dados reais da sua empresa: serviços, horários, preços e dúvidas frequentes. Quando o cliente fecha, o agendamento ou o pedido já aparece no seu painel.</p>
              <ul className="agent-ticks mono">
                <li><span>Responde em segundos</span><span>24h</span></li>
                <li><span>Chama você quando precisa de uma pessoa</span><span>↗</span></li>
                <li><span>Registra cada contato no CRM</span><span>✓</span></li>
              </ul>
            </div>
            <div className="agent-stage">
              <span className="agent-bg" aria-hidden="true">24H</span>
              <span className="a-sim mono">Simulação de conversa</span>
              <div className="agent-row">
                <div className="a-phone">
                  <div className="a-screen">
                    <div className="a-top"><span className="a-ava" aria-hidden="true">C</span><div><b>Clínica · atendimento</b><small>agente de IA · online</small></div></div>
                    <div className="a-body">
                      <div className="a-msg in">Oi! Tem horário para avaliação essa semana?<time>23:12</time></div>
                      <div className="a-msg out">Oi! Tenho quinta às 14h ou sexta às 9h30. Qual fica melhor?<time>23:12</time></div>
                      <div className="a-msg in">Sexta às 9h30<time>23:13</time></div>
                      <div className="a-msg out">Combinado! Me passa seu nome para eu confirmar?<time>23:13</time></div>
                      <div className="a-msg in">Carla<time>23:14</time></div>
                      <div className="a-typing" aria-hidden="true"><i></i><i></i><i></i></div>
                      <div className="a-msg out">Pronto, Carla! Avaliação confirmada para sexta, 9h30.<span className="ok">Lembrete agendado ✓</span><time>23:14</time></div>
                    </div>
                  </div>
                </div>
                <div className="a-crm">
                  <span className="mono">Novo no painel</span>
                  <b>Avaliação · sexta, 9h30</b>
                  <span>Carla · origem WhatsApp</span>
                  <span className="st">● confirmado às 23:14</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="proc" id="processo" aria-labelledby="t-proc">
          <div className="wrap">
            <div className="sec-label mono"><span>Como funciona</span><span>Sem surpresa no caminho</span></div>
            <h2 id="t-proc">Do primeiro oi ao <span className="acc">projeto no ar</span></h2>
            <div className="proc-bar" aria-hidden="true"><i /></div>
            <ol className="proc-track" style={{ listStyle: "none", marginBottom: 0 }}>
              <li className="proc-line" aria-hidden="true"><i></i></li>
              <li className="step"><span className="num">1</span><h3>Conversa</h3><p>Você me conta do negócio pelo WhatsApp. Sem compromisso.</p></li>
              <li className="step"><span className="num">2</span><h3>Proposta</h3><p>Escopo, prazo e valor fechados por escrito antes de começar.</p></li>
              <li className="step"><span className="num">3</span><h3>Design</h3><p>Você aprova o visual antes da primeira linha de código.</p></li>
              <li className="step"><span className="num">4</span><h3>No ar</h3><p>Publico no seu domínio, ensino a usar e fico 30 dias de suporte.</p></li>
            </ol>
          </div>
        </section>


        <section className="close" id="contato" aria-labelledby="t-close">
          <div className="close-stage" aria-hidden="true"><svg className="brace bl" viewBox="26 17 44 94" aria-hidden="true"><path fill="#FF4A1C" d="M69.416015625 100.958984375V110.28515625H62.091796875Q49.93359375 110.28515625 45.8076171875 106.671875Q41.681640625 103.05859375 41.681640625 92.267578125V81.76953125Q41.681640625 74.396484375 39.0693359375 71.5888671875Q36.45703125 68.78125 29.62109375 68.78125H26.59375V59.455078125H29.62109375Q36.45703125 59.455078125 39.0693359375 56.671875Q41.681640625 53.888671875 41.681640625 46.466796875V35.96875Q41.681640625 25.177734375 45.8076171875 21.5888671875Q49.93359375 18.0 62.091796875 18.0H69.416015625V27.27734375H63.41015625Q58.33203125 27.27734375 56.623046875 29.328125Q54.9140625 31.37890625 54.9140625 38.361328125V48.56640625Q54.9140625 56.623046875 52.521484375 59.89453125Q50.12890625 63.166015625 43.9765625 64.09375Q50.12890625 65.119140625 52.521484375 68.439453125Q54.9140625 71.759765625 54.9140625 79.767578125V89.77734375Q54.9140625 96.80859375 56.623046875 98.8837890625Q58.33203125 100.958984375 63.41015625 100.958984375Z"/></svg><svg className="dl-mid" viewBox="77 17 108 79" aria-hidden="true"><path fill="#EFEBE3" d="M112.828125 47.052734375V18.0H127.0859375V93.9765625H112.828125V85.87109375Q110.533203125 90.607421875 106.8955078125 93.0Q103.2578125 95.392578125 98.326171875 95.392578125Q88.951171875 95.392578125 83.775390625 87.873046875Q78.599609375 80.353515625 78.599609375 66.681640625Q78.599609375 52.814453125 83.8486328125 45.392578125Q89.09765625 37.970703125 98.814453125 37.970703125Q103.208984375 37.970703125 106.7001953125 40.2412109375Q110.19140625 42.51171875 112.828125 47.052734375ZM92.90625 66.779296875Q92.90625 74.689453125 95.54296875 79.181640625Q98.1796875 83.673828125 102.818359375 83.673828125Q107.45703125 83.673828125 110.142578125 79.181640625Q112.828125 74.689453125 112.828125 66.779296875Q112.828125 58.869140625 110.142578125 54.376953125Q107.45703125 49.884765625 102.818359375 49.884765625Q98.1796875 49.884765625 95.54296875 54.376953125Q92.90625 58.869140625 92.90625 66.779296875Z"/><path fill="#EFEBE3" d="M149.306640625 71.173828125V28.986328125H134.8046875V18.0H163.61328125V71.173828125Q163.61328125 77.619140625 165.615234375 80.3046875Q167.6171875 82.990234375 172.40234375 82.990234375H183.828125V93.9765625H168.3984375Q158.193359375 93.9765625 153.75 88.703125Q149.306640625 83.4296875 149.306640625 71.173828125Z"/></svg><svg className="brace br" viewBox="195 17 44 94" aria-hidden="true"><path fill="#FF4A1C" d="M195.404296875 100.958984375H201.3125Q206.390625 100.958984375 208.1484375 98.859375Q209.90625 96.759765625 209.90625 89.77734375V79.767578125Q209.90625 71.759765625 212.298828125 68.439453125Q214.69140625 65.119140625 220.794921875 64.09375Q214.642578125 63.166015625 212.2744140625 59.89453125Q209.90625 56.623046875 209.90625 48.56640625V38.361328125Q209.90625 31.4765625 208.1728515625 29.376953125Q206.439453125 27.27734375 201.3125 27.27734375H195.404296875V18.0H202.728515625Q214.837890625 18.0 218.9150390625 21.5888671875Q222.9921875 25.177734375 222.9921875 35.96875V46.466796875Q222.9921875 53.83984375 225.6533203125 56.6474609375Q228.314453125 59.455078125 235.19921875 59.455078125H238.2265625V68.78125H235.19921875Q228.314453125 68.78125 225.6533203125 71.61328125Q222.9921875 74.4453125 222.9921875 81.76953125V92.267578125Q222.9921875 103.05859375 218.9150390625 106.671875Q214.837890625 110.28515625 202.728515625 110.28515625H195.404296875Z"/></svg></div>
          <div className="wrap close-in">
            <span className="mono acc">Próximo projeto</span>
            <h2 id="t-close">O próximo projeto no ar pode ser o seu.</h2>
            <div className="close-row">
              <a className="btn-acc" href="https://wa.me/5515996118670?text=Ol%C3%A1%2C%20Diego!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar." target="_blank" rel="noopener noreferrer">Chamar no WhatsApp ↗</a>
              <div className="contact"><span>(15) 99611-8670</span><span>diegolopes.dev9@gmail.com</span></div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap mono"><a className="sig" href="#topo"><span className="dl" aria-hidden="true"><span className="bl">{"{"}</span>dl<span className="br">{"}"}</span></span>Diego Lopes</a><a href="https://www.linkedin.com/in/diegolopesoliveira" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><span>© 2026</span></div>
      </footer>
      <Motion />
    </>
  );
}
