// Landing.jsx — Social Bar landing page (v2: fully responsive)
const { useState, useEffect } = React;

// ── NAV ──────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (!menuOpen) return;
    const h = () => setMenuOpen(false);
    window.addEventListener('scroll', h, { once: true });
    return () => window.removeEventListener('scroll', h);
  }, [menuOpen]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = ['Producto', 'Módulos', 'Planes', 'Contacto'];
  const navBg = scrolled || menuOpen ? 'rgba(8,8,14,0.95)' : 'transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: isMobile ? '12px 16px' : '12px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: navBg,
        backdropFilter: (scrolled || menuOpen) ? 'blur(20px)' : 'none',
        borderBottom: scrolled && !menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <LogoMark />

        {isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BtnPrimary size="sm">Demo</BtnPrimary>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              style={{ background: 'none', border: 'none', cursor: 'pointer',
                color: '#fff', padding: 6, display: 'flex', alignItems: 'center',
                borderRadius: 8, transition: 'background 0.2s' }}>
              <ModuleIcon icon={menuOpen ? 'close' : 'menu'} color="#fff" size={22} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l} href="#" style={{ color: C.fg3, fontSize: 14, fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = C.fg3}>{l}</a>
            ))}
            <BtnPrimary size="sm">Solicita Demo</BtnPrimary>
          </div>
        )}
      </nav>

      {/* Mobile full-screen overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 199,
        background: 'rgba(8,8,14,0.98)', backdropFilter: 'blur(24px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 8,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s ease',
      }}>
        {links.map((l, i) => (
          <a key={l} href="#" onClick={() => setMenuOpen(false)}
            style={{
              color: '#fff', fontSize: 36, fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 400, letterSpacing: '0.08em', textDecoration: 'none',
              padding: '10px 32px', borderRadius: 12, transition: 'color 0.2s',
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${i * 50 + 80}ms`,
            }}>
            {l}
          </a>
        ))}
        <div style={{ marginTop: 32, opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s 0.3s' }}>
          <BtnPrimary size="lg" onClick={() => setMenuOpen(false)}>Solicita Demo</BtnPrimary>
        </div>
      </div>

      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </>
  );
}

// ── LOGO ──────────────────────────────────────────────────────
function LogoMark({ size = 1 }) {
  const s = size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * s, flexShrink: 0 }}>
      <img src="./assets/logo-icon.png" width={32 * s} height={32 * s}
        style={{ objectFit: 'contain', flexShrink: 0 }} alt="Social Bar" />
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20 * s,
        letterSpacing: 1, color: '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
        Social Bar
      </span>
    </div>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: isMobile ? '100px 20px 60px' : '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glows de fondo */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '80vw', height: '60vw', maxWidth: 900, maxHeight: 600,
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.2) 0%, transparent 65%)',
        pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '10%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 820, width: '100%' }}>
        <div style={{ marginBottom: 24 }}>
          <Badge color="purple">
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: C.green, boxShadow: `0 0 6px ${C.green}`, marginRight: 6,
              animation: 'pulse 1.5s ease-in-out infinite' }} />
            Disponible en Perú y LATAM
          </Badge>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400,
          fontSize: isMobile ? '2.6rem' : 'clamp(32px, 4vw, 56px)',
          lineHeight: 1.1, letterSpacing: '0.02em', marginBottom: 20, color: '#fff',
        }}>
          Tu bar,{' '}<GradientText>digitalizado.</GradientText>
          <br />Tus ventas,{' '}<span style={{ color: C.fg2 }}>multiplicadas.</span>
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 'clamp(16px, 2vw, 20px)',
          color: C.fg3, lineHeight: 1.65,
          maxWidth: 560, margin: '0 auto 36px', fontWeight: 400,
        }}>
          La primera plataforma SaaS que convierte cada mesa en una experiencia interactiva — desde el celular del cliente, sin hardware extra.
        </p>

        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
        }}>
          <BtnPrimary size={isMobile ? 'md' : 'lg'}
            style={isMobile ? { width: '100%', maxWidth: 340 } : {}}>
            Empieza Gratis · 3 Meses <ModuleIcon icon="arrow" color="#fff" />
          </BtnPrimary>
          <BtnOutline size={isMobile ? 'md' : 'lg'}
            style={isMobile ? { width: '100%', maxWidth: 340 } : {}}>
            Ver cómo funciona
          </BtnOutline>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: isMobile ? 20 : 32,
          justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['100%', 'Mobile-first'], ['Sin', 'hardware extra'], ['Sesiones', 'persistentes'], ['+7', 'módulos']].map(([val, lab]) => (
            <div key={lab} style={{ textAlign: 'center', minWidth: 64 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18,
                background: sharedStyles.gradCTA, WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</div>
              <div style={{ fontSize: 11, color: C.fg4, fontWeight: 500, marginTop: 2 }}>{lab}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone mock */}
      <div style={{ marginTop: isMobile ? 48 : 72, position: 'relative' }}>
        <PhoneMockHero isMobile={isMobile} />
      </div>
    </section>
  );
}

function PhoneMockHero({ isMobile }) {
  const scale = isMobile ? 0.82 : 1;
  return (
    <div style={{ position: 'relative', display: 'inline-block', transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)',
        width: 280, height: 80,
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.45) 0%, transparent 70%)',
        filter: 'blur(20px)' }} />
      <div style={{ width: 240, height: 420, background: '#111118',
        borderRadius: 36, border: '2px solid rgba(168,85,247,0.4)',
        boxShadow: '0 0 60px rgba(168,85,247,0.3), 0 40px 80px rgba(0,0,0,0.8)',
        overflow: 'hidden', position: 'relative', animation: 'float 3s ease-in-out infinite' }}>
        {/* Status bar */}
        <div style={{ background: '#0A0A14', padding: '12px 20px 8px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: C.fg3, fontWeight: 600 }}>9:41</span>
          <div style={{ width: 60, height: 16, background: '#0A0A14', borderRadius: 10, border: '1px solid #222' }} />
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
        {/* App header */}
        <div style={{ padding: '10px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 9, color: C.fg4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mesa 7 · Bar La Noche</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, fontSize: 14,
              background: sharedStyles.gradCTA, WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Social Bar</div>
          </div>
          <div style={{ width: 28, height: 14, borderRadius: 7, background: 'linear-gradient(135deg,#A855F7,#EC4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 2px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
        {/* Flash offer */}
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
        {/* Module grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 12px' }}>
          {[
            { icon: 'games', label: 'Juegos', sub: '+18',      color: C.orange, bg: 'rgba(168,85,247,0.12)' },
            { icon: 'chat',  label: 'Chat',   sub: 'en vivo',  color: C.cyan,   bg: 'rgba(34,211,238,0.1)' },
            { icon: 'music', label: 'Música', sub: 'vota ahora',color: C.pink,  bg: 'rgba(236,72,153,0.12)' },
            { icon: 'mic',   label: 'Karaoke',sub: 'mi turno', color: C.amber,  bg: 'rgba(245,158,11,0.12)' },
          ].map(m => (
            <div key={m.label} style={{ background: m.bg, border: `1px solid ${m.color}30`,
              borderRadius: 12, padding: '10px 10px 8px' }}>
              <ModuleIcon icon={m.icon} color={m.color} />
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: '#fff', marginTop: 4 }}>{m.label}</div>
              <div style={{ fontSize: 9, color: C.fg3 }}>{m.sub}</div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(10,10,20,0.95)', borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '8px 12px 16px', display: 'flex', justifyContent: 'space-around' }}>
          {[{ icon: 'bell', active: false }, { icon: 'star', active: false }, { icon: 'games', active: true }, { icon: 'audio', active: false }].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <ModuleIcon icon={item.icon} color={item.active ? C.orange : C.fg4} />
              {item.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.orange }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── PROBLEM ──────────────────────────────────────────────────
function Problem() {
  const isMobile = useIsMobile();
  const problems = [
    { icon: '📉', text: 'Pierdes ventas por productos que no rotan' },
    { icon: '📋', text: 'Dependes de papel, voz e improvisación' },
    { icon: '😶', text: 'Sin interacción real con tus clientes' },
    { icon: '🏳️', text: 'Sin diferenciación frente a la competencia' },
    { icon: '🔇', text: 'No tienes datos de qué quiere cada mesa' },
  ];
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 64 }}>
        <SectionLabel color="pink">El problema</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
          lineHeight: 1.15, letterSpacing: '-0.01em', color: '#fff' }}>
          Los bares de hoy están<br />
          <GradientText style={{ background: 'linear-gradient(135deg,#EC4899,#F43F5E)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            dejando dinero sobre la mesa.
          </GradientText>
        </h2>
        <p style={{ color: C.fg3, fontSize: 15, marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>
          Sin herramientas digitales, cada noche es una oportunidad perdida.
        </p>
      </div>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? 12 : 16 }}>
        {problems.map((p, i) => (
          <div key={i} style={{ background: C.bgSurface, border: '1px solid rgba(244,63,94,0.15)',
            borderRadius: 16, padding: '16px 18px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ background: 'rgba(244,63,94,0.1)', borderRadius: 8, padding: 8, fontSize: 18, flexShrink: 0 }}>{p.icon}</div>
            <p style={{ fontSize: 14, color: C.fg2, lineHeight: 1.5, margin: 0 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── SOLUTION ─────────────────────────────────────────────────
function Solution() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '60px 20px' : '80px 24px', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel color="cyan">La solución</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
        lineHeight: 1.15, marginBottom: 16, color: '#fff' }}>
        Una plataforma que vive en el<br /><GradientText>celular de tu cliente.</GradientText>
      </h2>
      <p style={{ color: C.fg3, fontSize: isMobile ? 15 : 17, maxWidth: 560,
        margin: '0 auto', lineHeight: 1.65, marginBottom: isMobile ? 36 : 56 }}>
        Sin tablets, sin hardware, sin instalaciones. Solo un QR y el smartphone de tus clientes — que ya lo tienen.
      </p>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? 14 : 24, textAlign: 'left' }}>
        {[
          { icon: 'qr',    color: C.orange, title: 'Escanea el QR',   desc: 'Cada mesa tiene su código. El cliente escanea y accede en segundos.' },
          { icon: 'games', color: C.pink,   title: 'Interactúa',      desc: 'Juega, vota música, pide atención, participa — todo desde la pantalla.' },
          { icon: 'zap',   color: C.amber,  title: 'Consume más',     desc: 'La experiencia gamificada aumenta el tiempo en el local y el ticket promedio.' },
        ].map((item, i) => <FeatureCard key={i} {...item} />)}
      </div>
    </section>
  );
}

function FeatureCard({ icon, color, title, desc }) {
  const [hover, setHover] = useState(false);
  const glowMap = {
    '#A855F7': 'rgba(168,85,247,0.25)', '#EC4899': 'rgba(236,72,153,0.25)',
    '#22D3EE': 'rgba(34,211,238,0.25)', '#F59E0B': 'rgba(245,158,11,0.25)',
    '#10F38E': 'rgba(16,243,142,0.25)',
  };
  const glow = glowMap[color] || 'rgba(168,85,247,0.2)';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: C.bgSurface, border: `1px solid ${hover ? color + '55' : C.border}`,
        borderRadius: 20, padding: '24px', cursor: 'default',
        boxShadow: hover ? `0 0 32px ${glow}` : 'none',
        transition: 'all 0.25s ease', transform: hover ? 'translateY(-3px)' : 'none' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12,
        background: `${color}20`, border: `1px solid ${color}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <ModuleIcon icon={icon} color={color} />
      </div>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 17, color: '#fff', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.fg3, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ── MODULES ──────────────────────────────────────────────────
function Modules() {
  const isMobile = useIsMobile();
  const modules = [
    { icon: 'games', color: C.orange, title: 'Juegos +18',            desc: 'Verdad o reto, ruleta y más. Rompen el hielo, generan consumo.' },
    { icon: 'chat',  color: C.cyan,   title: 'Chat en Vivo',          desc: 'Comunicación entre clientes, staff y DJ. Sistema VIP con propinas.' },
    { icon: 'music', color: C.pink,   title: 'Música Interactiva',    desc: 'Votación de playlist, solicitudes al DJ. Opcional: monetización.' },
    { icon: 'mic',   color: C.amber,  title: 'Karaoke Digital',       desc: 'Gestión de turnos sin papel ni caos. Ágil, ordenado, divertido.' },
    { icon: 'bell',  color: C.green,  title: 'Atención Inmediata',    desc: 'Llamar al mozo o hacer pedidos express desde la mesa.' },
    { icon: 'audio', color: C.cyan,   title: 'Audios Virales',        desc: 'Mensajes personalizados con voz estilo celebridades. Compartible.' },
    { icon: 'star',  color: C.orange, title: 'Feedback en Tiempo Real',desc: 'Calificaciones, opiniones y métricas clave del negocio.' },
  ];
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 56 }}>
        <SectionLabel>Módulos</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
          lineHeight: 1.15, color: '#fff' }}>
          Todo lo que tu bar necesita,<br />
          <GradientText>en una sola plataforma.</GradientText>
        </h2>
      </div>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: isMobile ? 12 : 20 }}>
        {modules.map((m, i) => <FeatureCard key={i} {...m} />)}
      </div>
    </section>
  );
}

// ── FLASH OFFER ───────────────────────────────────────────────
function FlashOffer() {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);
  const steps = [
    { icon: '📦', label: 'Detectas stock sin vender',   desc: 'El administrador nota que un producto no ha rotado esta noche.' },
    { icon: '⚡', label: 'Creas la oferta',             desc: 'En segundos configuras un descuento relámpago y lo activas.' },
    { icon: '📲', label: 'Todos lo ven al instante',    desc: 'Todos los clientes activos reciben la notificación en su celular.' },
    { icon: '💰', label: 'Vendes rápido, evitas pérdida',desc: 'El producto se vende. Ingresos inmediatos. Cero desperdicio.' },
  ];
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(244,63,94,0.07) 0%, transparent 70%)',
        pointerEvents: 'none' }} />
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <SectionLabel color="pink">Caso de negocio</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
          lineHeight: 1.15, marginBottom: 12, color: '#fff' }}>
          De stock sin vender a{' '}
          <GradientText style={{ background: 'linear-gradient(135deg,#F43F5E,#F59E0B)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            caja llena
          </GradientText>{' '}en 2 min.
        </h2>
        <p style={{ color: C.fg3, fontSize: 15, marginBottom: isMobile ? 32 : 48 }}>
          La función de Ofertas Relámpago convierte pérdidas potenciales en ingresos reales.
        </p>
        <div style={{ display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 12 : 16 }}>
          {steps.map((s, i) => (
            <div key={i} onClick={() => setStep(i)} style={{ cursor: 'pointer',
              background: step === i ? 'rgba(244,63,94,0.1)' : C.bgSurface,
              border: `1px solid ${step === i ? 'rgba(244,63,94,0.4)' : C.border}`,
              borderRadius: 20, padding: isMobile ? '18px 12px' : '24px 16px',
              boxShadow: step === i ? '0 0 28px rgba(244,63,94,0.2)' : 'none',
              transition: 'all 0.3s ease', transform: step === i ? 'translateY(-4px)' : 'none' }}>
              <div style={{ fontSize: isMobile ? 24 : 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 13 : 14,
                color: step === i ? '#F43F5E' : '#fff', marginBottom: 6, lineHeight: 1.3 }}>{s.label}</div>
              <p style={{ fontSize: 11, color: C.fg3, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────
function HowItWorks() {
  const isMobile = useIsMobile();
  const steps = [
    { n: '01', icon: 'qr',    color: C.orange, title: 'Escanea el QR',       desc: 'El cliente apunta la cámara al código en la mesa.' },
    { n: '02', icon: 'games', color: C.pink,   title: 'Ingresa el código',   desc: 'Un código diario protege el acceso al local.' },
    { n: '03', icon: 'bell',  color: C.cyan,   title: 'Accede al instante',  desc: 'La experiencia carga al instante. Sin apps, sin registros.' },
    { n: '04', icon: 'star',  color: C.amber,  title: 'Interactúa y consume',desc: 'Juega, vota, pide y disfruta. Tu bar, potenciado.' },
  ];
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '100px 24px', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel>Cómo funciona</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
        lineHeight: 1.15, marginBottom: isMobile ? 36 : 56, color: '#fff' }}>
        Listo en <GradientText>4 pasos simples.</GradientText>
      </h2>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? 20 : 24, position: 'relative' }}>
        {/* Línea conectora — solo desktop */}
        {!isMobile && (
          <div style={{ position: 'absolute', top: 32, left: '12%', right: '12%', height: 1,
            background: 'linear-gradient(90deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3), rgba(34,211,238,0.3))',
            zIndex: 0 }} />
        )}
        {steps.map((s, i) => (
          <div key={i} style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: '50%',
              background: `${s.color}18`, border: `2px solid ${s.color}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 14px', boxShadow: `0 0 20px ${s.color}25` }}>
              <ModuleIcon icon={s.icon} color={s.color} />
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11,
              color: s.color, letterSpacing: '0.1em', marginBottom: 6 }}>{s.n}</div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 13 : 15,
              color: '#fff', marginBottom: 6 }}>{s.title}</h4>
            <p style={{ fontSize: 12, color: C.fg3, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── BENEFITS ─────────────────────────────────────────────────
function Benefits() {
  const isMobile = useIsMobile();
  const items = [
    { n: '↑ Ticket',   label: 'promedio por mesa',  color: C.green },
    { n: '↑ Tiempo',   label: 'de permanencia',     color: C.orange },
    { n: '+ Ingresos', label: 'fuentes nuevas',     color: C.pink },
    { n: '↑ Fidelidad',label: 'del cliente',        color: C.cyan },
    { n: '0',          label: 'hardware requerido', color: C.amber },
  ];
  return (
    <section style={{ padding: isMobile ? '60px 20px' : '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 48 }}>
        <SectionLabel color="green">Resultados</SectionLabel>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
          lineHeight: 1.15, color: '#fff' }}>
          Diseñado para que ganes más,<br /><GradientText>desde el primer día.</GradientText>
        </h2>
      </div>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
        gap: isMobile ? 12 : 16 }}>
        {items.map((it, i) => (
          <div key={i} style={{ background: C.bgSurface, border: `1px solid ${it.color}25`,
            borderRadius: 20, padding: isMobile ? '20px 12px' : '28px 24px', textAlign: 'center',
            boxShadow: `0 0 20px ${it.color}15` }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 22 : 28,
              color: it.color, marginBottom: 6 }}>{it.n}</div>
            <div style={{ fontSize: 12, color: C.fg3 }}>{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PRICING ──────────────────────────────────────────────────
function Pricing() {
  const isMobile = useIsMobile();
  const plans = [
    { name: 'Standard', color: C.fg3,   border: C.border,                glow: 'none',
      features: ['Módulos esenciales', 'Hasta 5 mesas', 'Soporte básico'] },
    { name: 'Plus',     color: C.orange, border: 'rgba(168,85,247,0.5)', popular: true,
      features: ['Todos los módulos', 'Hasta 20 mesas', 'Ofertas relámpago', 'Soporte prioritario'] },
    { name: 'Premium',  color: C.amber,  border: 'rgba(245,158,11,0.5)',
      features: ['Todo en Plus', 'Mesas ilimitadas', 'Consola DJ', 'Onboarding dedicado'] },
  ];
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '100px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <SectionLabel color="amber">Planes</SectionLabel>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? '1.9rem' : 'clamp(22px, 2.8vw, 38px)',
        lineHeight: 1.15, marginBottom: 12, color: '#fff' }}>
        Elige tu plan.<br /><GradientText>Empieza gratis por 3 meses.</GradientText>
      </h2>
      <p style={{ color: C.fg3, fontSize: 14, marginBottom: isMobile ? 32 : 48 }}>Sin tarjeta de crédito. Sin contratos largos.</p>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? 16 : 20 }}>
        {plans.map((p, i) => (
          <div key={i} style={{
            background: p.popular ? 'rgba(168,85,247,0.08)' : C.bgSurface,
            border: `1px solid ${p.border}`, borderRadius: 24, padding: '32px 24px',
            position: 'relative',
            boxShadow: p.popular ? '0 0 40px rgba(168,85,247,0.25)' : 'none',
            // Sin scale en mobile para evitar overflow
            transform: (!isMobile && p.popular) ? 'scale(1.04)' : 'none',
          }}>
            {p.popular && (
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                background: sharedStyles.gradCTA, color: '#fff', fontSize: 10, fontWeight: 700,
                padding: '4px 14px', borderRadius: 9999, letterSpacing: '0.08em', textTransform: 'uppercase',
                whiteSpace: 'nowrap' }}>Más popular</div>
            )}
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: p.color, marginBottom: 6 }}>{p.name}</div>
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
              ? <BtnPrimary style={{ width: '100%' }}>Empezar</BtnPrimary>
              : <BtnOutline style={{ width: '100%', borderColor: `${p.color}50` }}>Empezar</BtnOutline>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────
function CTABanner() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '48px 20px' : '80px 24px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.08))',
        border: '1px solid rgba(168,85,247,0.35)', borderRadius: isMobile ? 24 : 32,
        padding: isMobile ? '40px 24px' : '64px 48px',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 0 80px rgba(168,85,247,0.2)',
      }}>
        <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
          width: 400, height: 200,
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.3) 0%, transparent 70%)',
          pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? '1.8rem' : 'clamp(24px, 3.5vw, 40px)',
          lineHeight: 1.15, marginBottom: 14, color: '#fff' }}>
          Tu bar merece más.<br /><GradientText>Transforma la experiencia hoy.</GradientText>
        </h2>
        <p style={{ color: C.fg3, fontSize: 15, maxWidth: 420, margin: '0 auto 28px' }}>
          Sin inversión en hardware. Sin contratos. Solo resultados.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center',
          flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <BtnPrimary size={isMobile ? 'md' : 'lg'}
            style={isMobile ? { width: '100%', maxWidth: 320 } : {}}>
            Solicita una Demo
          </BtnPrimary>
          <BtnOutline size={isMobile ? 'md' : 'lg'}
            style={isMobile ? { width: '100%', maxWidth: 320 } : {}}>
            Empieza Gratis
          </BtnOutline>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────
function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: isMobile ? '40px 20px 28px' : '48px 24px 32px',
      maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 32, flexDirection: isMobile ? 'column' : 'row', marginBottom: 32 }}>
        <div>
          <LogoMark />
          <p style={{ color: C.fg4, fontSize: 13, marginTop: 10, maxWidth: 220, lineHeight: 1.6 }}>
            La plataforma que tu bar necesitaba. Digitaliza tu negocio hoy.
          </p>
        </div>
        <div style={{ display: 'flex', gap: isMobile ? 32 : 48, flexWrap: 'wrap', width: isMobile ? '100%' : 'auto' }}>
          {[
            { title: 'Producto', links: ['Módulos', 'Cómo funciona', 'Planes', 'Demo'] },
            { title: 'Empresa',  links: ['Creativa Perú', 'Contacto', 'Términos'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13,
                color: '#fff', marginBottom: 12 }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', color: C.fg4, fontSize: 13,
                  textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = C.fg2}
                  onMouseLeave={e => e.target.style.color = C.fg4}>{l}</a>
              ))}
            </div>
          ))}
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, color: '#fff', marginBottom: 12 }}>Contacto</div>
            {[{ icon: 'mail', text: 'creativaflowperu@gmail.com' }, { icon: 'phone', text: '+51 923 593 150' }].map(c => (
              <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: 8,
                color: C.fg4, fontSize: 13, marginBottom: 10 }}>
                <ModuleIcon icon={c.icon} color={C.fg4} /> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 18,
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontSize: 12, color: C.fg4 }}>© 2025 Social Bar · Creativa Perú.</span>
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
