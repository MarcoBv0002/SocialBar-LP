// Landing.jsx — Social Bar full landing page
const { useState, useEffect, useRef } = React;

// ── NAV ──────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '12px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto',
      background: scrolled ? 'rgba(8,8,14,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
      <LogoMark />
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Producto', 'Módulos', 'Planes', 'Contacto'].map(l => (
          <a key={l} href="#" style={{ color: C.fg3, fontSize: 14, fontWeight: 500,
            textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = C.fg3}>{l}</a>
        ))}
        <BtnPrimary size="sm">Solicita Demo</BtnPrimary>
      </div>
    </nav>
  );
}

function LogoMark({ size = 1 }) {
  const s = size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * s, flexShrink: 0, whiteSpace: 'nowrap' }}>
      <img src="./assets/logo-icon.png" width={36 * s} height={36 * s}
        style={{ objectFit: 'contain', flexShrink: 0 }} alt="Social Bar icon" />
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 20 * s,
        letterSpacing: 1, color: '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
        Social Bar
      </span>
    </div>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      {/* background glow */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '80vw', height: '60vw', maxWidth: 900, maxHeight: 600,
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.2) 0%, transparent 65%)',
        pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '10%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
        pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 820 }}>
        <div style={{ marginBottom: 24 }}>
          <Badge color="purple">
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: C.green, boxShadow: `0 0 6px ${C.green}`, marginRight: 6,
              animation: 'pulse 1.5s ease-in-out infinite' }} />
            Disponible en Perú y LATAM
          </Badge>
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400,
          fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1,
          letterSpacing: '0.02em', marginBottom: 24, color: '#fff' }}>
          Tu bar,{' '}
          <GradientText>digitalizado.</GradientText>
          <br />Tus ventas,{' '}
          <span style={{ color: C.fg2 }}>multiplicadas.</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: C.fg3, lineHeight: 1.65,
          maxWidth: 580, margin: '0 auto 40px', fontWeight: 400 }}>
          La primera plataforma SaaS que convierte cada mesa en una experiencia interactiva — desde el celular del cliente, sin hardware extra.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <BtnPrimary size="lg">
            Empieza Gratis · 3 Meses <ModuleIcon icon="arrow" color="#fff" />
          </BtnPrimary>
          <BtnOutline size="lg">Ver cómo funciona</BtnOutline>
        </div>
        <div style={{ marginTop: 48, display: 'flex', gap: 32, justifyContent: 'center',
          flexWrap: 'wrap' }}>
          {[['100%', 'Mobile-first'], ['Sin', 'hardware extra'], ['Sesiones', 'persistentes'], ['+7', 'módulos']].map(([val, lab]) => (
            <div key={lab} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 18,
                background: sharedStyles.gradCTA, WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</div>
              <div style={{ fontSize: 12, color: C.fg4, fontWeight: 500, marginTop: 2 }}>{lab}</div>
            </div>
          ))}
        </div>
      </div>
      {/* mock phone preview */}
      <div style={{ marginTop: 72, position: 'relative' }}>
        <PhoneMockHero />
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} } @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
    </section>
  );
}

function PhoneMockHero() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* glow under phone */}
      <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)',
        width: 280, height: 80,
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.45) 0%, transparent 70%)',
        filter: 'blur(20px)' }} />
      {/* phone shell */}
      <div style={{ width: 240, height: 420, background: '#111118',
        borderRadius: 36, border: '2px solid rgba(168,85,247,0.4)',
        boxShadow: '0 0 60px rgba(168,85,247,0.3), 0 40px 80px rgba(0,0,0,0.8)',
        overflow: 'hidden', position: 'relative', animation: 'float 3s ease-in-out infinite' }}>
        {/* status bar */}
        <div style={{ background: '#0A0A14', padding: '12px 20px 8px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: C.fg3, fontWeight: 600 }}>9:41</span>
          <div style={{ width: 60, height: 16, background: '#0A0A14',
            borderRadius: 10, border: '1px solid #222' }} />
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
              {[6,9,12].map(h => <div key={h} style={{ width: 3, height: h, background: C.fg3, borderRadius: 1 }} />)}
            </div>
            <div style={{ width: 14, height: 8, border: `1.5px solid ${C.fg3}`, borderRadius: 2, position: 'relative' }}>
              <div style={{ position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)', width: 2, height: 4, background: C.fg3, borderRadius: 1 }} />
              <div style={{ width: '70%', height: '100%', background: C.green, borderRadius: 1 }} />
            </div>
          </div>
        </div>
        {/* app header */}
        <div style={{ padding: '10px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 9, color: C.fg4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mesa 7 · Bar La Noche</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 14,
              background: sharedStyles.gradCTA, WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Social Bar</div>
          </div>
          <div style={{ width: 28, height: 14, borderRadius: 7,
            background: 'linear-gradient(135deg,#F97316,#EC4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 2px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
        {/* flash offer banner */}
        <div style={{ margin: '0 12px 8px', borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(245,158,11,0.1))',
          border: '1px solid rgba(244,63,94,0.4)',
          padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14 }}>⚡</span>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#F43F5E', letterSpacing: '0.05em' }}>OFERTA RELÁMPAGO</div>
            <div style={{ fontSize: 9, color: C.fg2 }}>Mojito 2x1 · Quedan 12 min</div>
          </div>
        </div>
        {/* module grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 12px' }}>
          {[
            { icon: 'games', label: 'Juegos', sub: '+18', color: C.orange, bg: 'rgba(168,85,247,0.12)' },
            { icon: 'chat', label: 'Chat', sub: 'en vivo', color: C.cyan, bg: 'rgba(34,211,238,0.1)' },
            { icon: 'music', label: 'Música', sub: 'vota ahora', color: C.pink, bg: 'rgba(236,72,153,0.12)' },
            { icon: 'mic', label: 'Karaoke', sub: 'mi turno', color: C.amber, bg: 'rgba(245,158,11,0.12)' },
          ].map(m => (
            <div key={m.label} style={{ background: m.bg, border: `1px solid ${m.color}30`,
              borderRadius: 12, padding: '10px 10px 8px', cursor: 'pointer' }}>
              <ModuleIcon icon={m.icon} color={m.color} />
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 12, color: '#fff', marginTop: 4 }}>{m.label}</div>
              <div style={{ fontSize: 9, color: C.fg3 }}>{m.sub}</div>
            </div>
          ))}
        </div>
        {/* bottom nav */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(10,10,20,0.95)', borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '8px 12px 16px', display: 'flex', justifyContent: 'space-around' }}>
          {[{ icon: 'bell', active: false }, { icon: 'star', active: false }, { icon: 'games', active: true }, { icon: 'audio', active: false }].map((i, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <div style={{ color: i.active ? C.orange : C.fg4 }}><ModuleIcon icon={i.icon} color={i.active ? C.orange : C.fg4} /></div>
              {i.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.orange }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── PROBLEM ──────────────────────────────────────────────────
function Problem() {
  const problems = [
    { icon: '📉', text: 'Pierdes ventas por productos que no rotan' },
    { icon: '📋', text: 'Dependes de papel, voz e improvisación' },
    { icon: '😶', text: 'Sin interacción real con tus clientes' },
    { icon: '🏳️', text: 'Sin diferenciación frente a la competencia' },
    { icon: '🔇', text: 'No tienes datos de qué quiere cada mesa' },
  ];
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <SectionLabel color="pink">El problema</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
          fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Los bares de hoy están<br />
          <GradientText style={{ background: 'linear-gradient(135deg,#EC4899,#F43F5E)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            dejando dinero sobre la mesa.
          </GradientText>
        </h2>
        <p style={{ color: C.fg3, fontSize: 16, marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
          Sin herramientas digitales, cada noche es una oportunidad perdida.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {problems.map((p, i) => (
          <div key={i} style={{ background: C.bgSurface, border: '1px solid rgba(244,63,94,0.15)',
            borderRadius: 16, padding: '20px 18px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ background: 'rgba(244,63,94,0.1)', borderRadius: 8, padding: 8, fontSize: 18, flexShrink: 0 }}>{p.icon}</div>
            <p style={{ fontSize: 14, color: C.fg2, lineHeight: 1.5, margin: 0, fontWeight: 400 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── SOLUTION ─────────────────────────────────────────────────
function Solution() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel color="cyan">La solución</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
        fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
        Una plataforma que vive en el<br /><GradientText>celular de tu cliente.</GradientText>
      </h2>
      <p style={{ color: C.fg3, fontSize: 17, maxWidth: 580, margin: '0 auto 56px', lineHeight: 1.65 }}>
        Sin tablets, sin hardware, sin instalaciones. Solo un QR y el smartphone de tus clientes — que ya lo tienen.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, textAlign: 'left' }}>
        {[
          { icon: 'qr', color: C.orange, title: 'Escanea el QR', desc: 'Cada mesa tiene su código. El cliente escanea y accede en segundos.' },
          { icon: 'games', color: C.pink, title: 'Interactúa', desc: 'Juega, vota música, pide atención, participa — todo desde la pantalla.' },
          { icon: 'zap', color: C.amber, title: 'Consume más', desc: 'La experiencia gamificada aumenta el tiempo en el local y el ticket promedio.' },
        ].map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, color, title, desc, accent }) {
  const [hover, setHover] = useState(false);
  const glowMap = { '#F97316': 'rgba(249,115,22,0.25)', '#EC4899': 'rgba(236,72,153,0.25)', '#22D3EE': 'rgba(34,211,238,0.25)', '#F59E0B': 'rgba(245,158,11,0.25)', '#10F38E': 'rgba(16,243,142,0.25)' };
  const glow = glowMap[color] || 'rgba(249,115,22,0.2)';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: C.bgSurface, border: `1px solid ${hover ? color + '55' : C.border}`,
        borderRadius: 20, padding: '24px', cursor: 'default',
        boxShadow: hover ? `0 0 32px ${glow}` : 'none',
        transition: 'all 0.25s ease', transform: hover ? 'translateY(-3px)' : 'none' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12,
        background: `${color}20`, border: `1px solid ${color}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <ModuleIcon icon={icon} color={color} />
      </div>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.fg3, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ── MODULES ──────────────────────────────────────────────────
function Modules() {
  const modules = [
    { icon: 'games', color: C.orange, title: 'Juegos +18', desc: 'Verdad o reto, ruleta y más. Rompen el hielo, generan consumo.' },
    { icon: 'chat', color: C.cyan, title: 'Chat en Vivo', desc: 'Comunicación entre clientes, staff y DJ. Sistema VIP con propinas.' },
    { icon: 'music', color: C.pink, title: 'Música Interactiva', desc: 'Votación de playlist, solicitudes al DJ. Opcional: monetización.' },
    { icon: 'mic', color: C.amber, title: 'Karaoke Digital', desc: 'Gestión de turnos sin papel ni caos. Ágil, ordenado, divertido.' },
    { icon: 'bell', color: C.green, title: 'Atención Inmediata', desc: 'Llamar al mozo o hacer pedidos express desde la mesa.' },
    { icon: 'audio', color: C.cyan, title: 'Audios Virales', desc: 'Mensajes personalizados con voz estilo celebridades. Compartible.' },
    { icon: 'star', color: C.orange, title: 'Feedback en Tiempo Real', desc: 'Calificaciones, opiniones y métricas clave del negocio.' },
  ];
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <SectionLabel>Módulos</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
          fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Todo lo que tu bar necesita,<br />
          <GradientText>en una sola plataforma.</GradientText>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {modules.map((m, i) => <FeatureCard key={i} {...m} />)}
      </div>
    </section>
  );
}

// ── FLASH OFFER STORYTELLING ──────────────────────────────────
function FlashOffer() {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: '📦', label: 'Detectas stock sin vender', desc: 'El administrador nota que un producto no ha rotado esta noche.' },
    { icon: '⚡', label: 'Creas la oferta', desc: 'En segundos configuras un descuento relámpago y lo activas.' },
    { icon: '📲', label: 'Todos lo ven al instante', desc: 'Todos los clientes activos reciben la notificación en su celular.' },
    { icon: '💰', label: 'Vendes rápido, evitas pérdida', desc: 'El producto se vende. Ingresos inmediatos. Cero desperdicio.' },
  ];
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(244,63,94,0.08) 0%, transparent 70%)',
        pointerEvents: 'none' }} />
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <SectionLabel color="pink">Caso de negocio</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
          fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
          De stock sin vender a <GradientText style={{ background: 'linear-gradient(135deg,#F43F5E,#F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>caja llena</GradientText> en 2 minutos.
        </h2>
        <p style={{ color: C.fg3, fontSize: 16, marginBottom: 48 }}>
          La función de Ofertas Relámpago convierte pérdidas potenciales en ingresos reales.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {steps.map((s, i) => (
            <div key={i} onClick={() => setStep(i)} style={{ cursor: 'pointer',
              background: step === i ? 'rgba(244,63,94,0.1)' : C.bgSurface,
              border: `1px solid ${step === i ? 'rgba(244,63,94,0.4)' : C.border}`,
              borderRadius: 20, padding: '24px 16px',
              boxShadow: step === i ? '0 0 28px rgba(244,63,94,0.2)' : 'none',
              transition: 'all 0.3s ease', transform: step === i ? 'translateY(-4px)' : 'none' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 14,
                color: step === i ? '#F43F5E' : '#fff', marginBottom: 8, lineHeight: 1.3 }}>{s.label}</div>
              <p style={{ fontSize: 12, color: C.fg3, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
              {i < steps.length - 1 && <div style={{ marginTop: 16, fontSize: 16, color: step >= i ? '#F43F5E' : C.fg4 }}>→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BENEFITS ─────────────────────────────────────────────────
function Benefits() {
  const items = [
    { n: '↑ Ticket', label: 'promedio por mesa', color: C.green },
    { n: '↑ Tiempo', label: 'de permanencia', color: C.orange },
    { n: '+ Ingresos', label: 'fuentes nuevas', color: C.pink },
    { n: '↑ Fidelidad', label: 'del cliente', color: C.cyan },
    { n: '0', label: 'hardware requerido', color: C.amber },
  ];
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <SectionLabel color="green">Resultados</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
          fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Diseñado para que ganes más,<br /><GradientText>desde el primer día.</GradientText>
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((it, i) => (
          <div key={i} style={{ background: C.bgSurface, border: `1px solid ${it.color}25`,
            borderRadius: 20, padding: '28px 24px', minWidth: 160, textAlign: 'center',
            boxShadow: `0 0 20px ${it.color}15` }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 28, color: it.color, marginBottom: 6 }}>{it.n}</div>
            <div style={{ fontSize: 13, color: C.fg3 }}>{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', icon: 'qr', color: C.orange, title: 'Escanea el QR', desc: 'El cliente apunta la cámara al código en la mesa.' },
    { n: '02', icon: 'games', color: C.pink, title: 'Ingresa el código', desc: 'Un código diario protege el acceso al local.' },
    { n: '03', icon: 'bell', color: C.cyan, title: 'Accede a la plataforma', desc: 'La experiencia carga al instante. Sin apps, sin registros.' },
    { n: '04', icon: 'star', color: C.amber, title: 'Interactúa y consume', desc: 'Juega, vota, pide y disfruta. Tu bar, potenciado.' },
  ];
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel>Cómo funciona</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
        fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 56 }}>
        Listo en <GradientText>4 pasos simples.</GradientText>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 32, left: '12%', right: '12%', height: 1,
          background: 'linear-gradient(90deg, rgba(249,115,22,0.3), rgba(236,72,153,0.3), rgba(34,211,238,0.3))',
          zIndex: 0 }} />
        {steps.map((s, i) => (
          <div key={i} style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%',
              background: `${s.color}18`, border: `2px solid ${s.color}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', boxShadow: `0 0 20px ${s.color}25` }}>
              <ModuleIcon icon={s.icon} color={s.color} />
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 11,
              color: s.color, letterSpacing: '0.1em', marginBottom: 8 }}>{s.n}</div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>{s.title}</h4>
            <p style={{ fontSize: 13, color: C.fg3, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PRICING ──────────────────────────────────────────────────
function Pricing() {
  const plans = [
    { name: 'Standard', color: C.fg3, border: C.border, glow: 'transparent', features: ['Módulos esenciales', 'Hasta 5 mesas', 'Soporte básico'] },
    { name: 'Plus', color: C.orange, border: 'rgba(168,85,247,0.5)', glow: 'rgba(168,85,247,0.15)', popular: true, features: ['Todos los módulos', 'Hasta 20 mesas', 'Ofertas relámpago', 'Soporte prioritario'] },
    { name: 'Premium', color: C.amber, border: 'rgba(245,158,11,0.5)', glow: 'rgba(245,158,11,0.1)', features: ['Todo en Plus', 'Mesas ilimitadas', 'Consola DJ', 'Onboarding dedicado'] },
  ];
  return (
    <section style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel color="amber">Planes</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
        fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
        Elige tu plan.<br /><GradientText>Empieza gratis por 3 meses.</GradientText>
      </h2>
      <p style={{ color: C.fg3, fontSize: 15, marginBottom: 48 }}>Sin tarjeta de crédito. Sin contratos largos.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {plans.map((p, i) => (
          <div key={i} style={{ background: p.popular ? `rgba(168,85,247,0.08)` : C.bgSurface,
            border: `1px solid ${p.border}`, borderRadius: 24, padding: '32px 24px',
            position: 'relative', boxShadow: p.popular ? '0 0 40px rgba(168,85,247,0.25)' : 'none',
            transform: p.popular ? 'scale(1.04)' : 'none' }}>
            {p.popular && (
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                background: sharedStyles.gradCTA, color: '#fff', fontSize: 10, fontWeight: 700,
                padding: '4px 14px', borderRadius: 9999, letterSpacing: '0.08em', textTransform: 'uppercase',
                whiteSpace: 'nowrap' }}>Más popular</div>
            )}
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 24, color: p.color, marginBottom: 8 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: C.fg4, marginBottom: 24 }}>Consultar precio</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, textAlign: 'left' }}>
              {p.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.fg2 }}>
                  <div style={{ color: p.color, flexShrink: 0 }}><ModuleIcon icon="check" color={p.color} /></div>
                  {f}
                </div>
              ))}
            </div>
            {p.popular
              ? <BtnPrimary style={{ width: '100%', justifyContent: 'center' }}>Empezar</BtnPrimary>
              : <BtnOutline style={{ width: '100%', justifyContent: 'center', borderColor: `${p.color}50` }}>Empezar</BtnOutline>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.08))',
        border: '1px solid rgba(168,85,247,0.35)', borderRadius: 32,
        padding: '64px 48px', position: 'relative', overflow: 'hidden',
        boxShadow: '0 0 80px rgba(168,85,247,0.2)' }}>
        <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
          width: 400, height: 200,
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.3) 0%, transparent 70%)',
          pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800,
          fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Tu bar merece más.<br /><GradientText>Transforma la experiencia hoy.</GradientText>
        </h2>
        <p style={{ color: C.fg3, fontSize: 16, marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
          Sin inversión en hardware. Sin contratos. Solo resultados.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <BtnPrimary size="lg">Solicita una Demo</BtnPrimary>
          <BtnOutline size="lg">Empieza Gratis</BtnOutline>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px 32px',
      maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
        <div>
          <LogoMark />
          <p style={{ color: C.fg4, fontSize: 13, marginTop: 12, maxWidth: 220, lineHeight: 1.6 }}>
            La plataforma que tu bar necesitaba. Digitaliza tu negocio hoy.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[{ title: 'Producto', links: ['Módulos', 'Cómo funciona', 'Planes', 'Demo'] },
            { title: 'Empresa', links: ['Creativa Perú', 'Contacto', 'Términos'] }].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 13,
                color: '#fff', marginBottom: 14 }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', color: C.fg4, fontSize: 13,
                  textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = C.fg2}
                  onMouseLeave={e => e.target.style.color = C.fg4}>{l}</a>
              ))}
            </div>
          ))}
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 14 }}>Contacto</div>
            {[{ icon: 'mail', text: 'creativaflowperu@gmail.com' }, { icon: 'phone', text: '+51 923 593 150' }].map(c => (
              <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: 8,
                color: C.fg4, fontSize: 13, marginBottom: 10 }}>
                <ModuleIcon icon={c.icon} color={C.fg4} /> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: C.fg4 }}>© 2025 Social Bar · Creativa Perú. Todos los derechos reservados.</span>
        <span style={{ fontSize: 12, color: C.fg4 }}>Hecho con 🤍 en Lima, Perú</span>
      </div>
    </footer>
  );
}

// ── ROOT ──────────────────────────────────────────────────────
function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <FlashOffer />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CTABanner />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LandingPage />);
