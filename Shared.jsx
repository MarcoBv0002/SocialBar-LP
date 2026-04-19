// Shared.jsx — Social Bar shared components + tokens (v3: violet/pink palette)
const C = {
  bgBase: '#08080E', bgSurface: '#0F0F1A', bgElevated: '#171728',
  orange: '#A855F7', orangeDim: 'rgba(168,85,247,0.35)',  // brand primary: violet
  cyan:   '#22D3EE', cyanDim:   'rgba(34,211,238,0.3)',   // accent: electric cyan
  green:  '#10F38E', greenDim:  'rgba(16,243,142,0.3)',
  pink:   '#EC4899', pinkDim:   'rgba(236,72,153,0.3)',
  amber:  '#F59E0B', amberDim:  'rgba(245,158,11,0.3)',
  red:    '#F43F5E', redDim:    'rgba(244,63,94,0.3)',
  fg1: '#FFFFFF', fg2: '#C4C4D8', fg3: '#8888A8', fg4: '#4A4A6A',
  border: 'rgba(255,255,255,0.07)', borderAccent: 'rgba(168,85,247,0.45)',
};

const sharedStyles = {
  gradCTA:    'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
  gradCyan:   'linear-gradient(135deg, #22D3EE 0%, #10F38E 100%)',
  gradWarm:   'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
  glowIndigo: '0 0 32px rgba(168,85,247,0.4), 0 0 8px rgba(168,85,247,0.2)',
  glowCyan:   '0 0 32px rgba(34,211,238,0.35), 0 0 8px rgba(34,211,238,0.15)',
  glowCTA:    '0 0 40px rgba(168,85,247,0.45), 0 0 80px rgba(236,72,153,0.2)',
  fontDisplay: "'Bebas Neue', sans-serif",
  fontBody:    "'Space Grotesk', sans-serif",
};

// ── RESPONSIVE HOOK ───────────────────────────────────────────
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = React.useState(window.innerWidth < bp);
  React.useEffect(() => {
    const fn = () => setMobile(window.innerWidth < bp);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, [bp]);
  return mobile;
}

// ── BUTTONS ───────────────────────────────────────────────────
function BtnPrimary({ children, size = 'md', onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: { padding: '9px 20px', fontSize: 13 },
    md: { padding: '13px 28px', fontSize: 14 },
    lg: { padding: '16px 36px', fontSize: 15 }
  };
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        background: sharedStyles.gradCTA, color: '#fff', border: 'none', borderRadius: 9999,
        fontFamily: sharedStyles.fontBody, fontWeight: 700, letterSpacing: '0.05em',
        textTransform: 'uppercase', cursor: 'pointer',
        boxShadow: hover ? `${sharedStyles.glowCTA}, 0 8px 32px rgba(168,85,247,0.4)` : sharedStyles.glowCTA,
        transform: press ? 'scale(0.97)' : hover ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
        ...sizes[size], ...style }}>
      {children}
    </button>
  );
}

function BtnOutline({ children, size = 'md', onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { padding: '8px 18px', fontSize: 13 },
    md: { padding: '12px 26px', fontSize: 14 },
    lg: { padding: '15px 34px', fontSize: 15 }
  };
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        background: hover ? 'rgba(168,85,247,0.1)' : 'transparent',
        color: '#fff', border: '1px solid rgba(168,85,247,0.45)', borderRadius: 9999,
        fontFamily: sharedStyles.fontBody, fontWeight: 700, letterSpacing: '0.05em',
        textTransform: 'uppercase', cursor: 'pointer',
        boxShadow: hover ? sharedStyles.glowIndigo : 'none',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.2s ease',
        ...sizes[size], ...style }}>
      {children}
    </button>
  );
}

// ── BADGE ─────────────────────────────────────────────────────
function Badge({ children, color = 'orange' }) {
  const colors = {
    orange: { bg: 'rgba(168,85,247,0.15)', text: '#A855F7', border: 'rgba(168,85,247,0.35)' },
    purple: { bg: 'rgba(168,85,247,0.15)', text: '#A855F7', border: 'rgba(168,85,247,0.35)' },
    cyan:   { bg: 'rgba(34,211,238,0.12)',  text: '#22D3EE', border: 'rgba(34,211,238,0.3)' },
    green:  { bg: 'rgba(16,243,142,0.12)',  text: '#10F38E', border: 'rgba(16,243,142,0.3)' },
    pink:   { bg: 'rgba(236,72,153,0.15)',  text: '#EC4899', border: 'rgba(236,72,153,0.3)' },
    amber:  { bg: 'rgba(245,158,11,0.15)',  text: '#F59E0B', border: 'rgba(245,158,11,0.3)' },
    red:    { bg: 'rgba(244,63,94,0.12)',   text: '#F43F5E', border: 'rgba(244,63,94,0.3)' },
  };
  const cl = colors[color] || colors.orange;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 12px',
      borderRadius: 9999, fontSize: 11, fontWeight: 600, letterSpacing: '0.07em',
      textTransform: 'uppercase', background: cl.bg, color: cl.text,
      border: `1px solid ${cl.border}`, fontFamily: sharedStyles.fontBody }}>
      {children}
    </span>
  );
}

function SectionLabel({ children, color = 'orange' }) {
  const lineColor = color === 'cyan' ? C.cyan
    : color === 'green' ? C.green
    : color === 'pink' ? C.pink
    : color === 'amber' ? C.amber
    : C.orange;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <div style={{ width: 20, height: 2, background: lineColor, borderRadius: 2 }} />
      <Badge color={color}>{children}</Badge>
      <div style={{ width: 20, height: 2, background: lineColor, borderRadius: 2 }} />
    </div>
  );
}

function GradientText({ children, style }) {
  return (
    <span style={{ background: sharedStyles.gradCTA, WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent', backgroundClip: 'text', ...style }}>
      {children}
    </span>
  );
}

// ── ICONS ─────────────────────────────────────────────────────
function ModuleIcon({ icon, color, size = 22 }) {
  const s = size;
  const iconMap = {
    games: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9.5" y="2" width="5" height="5" rx="1"/><rect x="17" y="2" width="5" height="5" rx="1"/><rect x="2" y="9.5" width="5" height="5" rx="1"/><rect x="17" y="9.5" width="5" height="5" rx="1"/><rect x="2" y="17" width="5" height="5" rx="1"/><rect x="9.5" y="17" width="5" height="5" rx="1"/><rect x="17" y="17" width="5" height="5" rx="1"/></svg>,
    chat:  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    music: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    mic:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>,
    bell:  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    audio: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
    star:  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    zap:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    qr:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="5" height="5" rx="1"/><rect x="16" y="3" width="5" height="5" rx="1"/><rect x="3" y="16" width="5" height="5" rx="1"/><path d="M21 16h-3v3"/><path d="M15 21v-6h3"/><path d="M15 3v3h3"/><path d="M9 9h3v3H9z"/></svg>,
    check: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
    arrow: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    mail:  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    phone: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.63-1.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    menu:  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    close: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  };
  return <div style={{ color, display: 'flex', alignItems: 'center' }}>{iconMap[icon] || iconMap.star}</div>;
}

Object.assign(window, { C, sharedStyles, useIsMobile, BtnPrimary, BtnOutline, Badge, SectionLabel, GradientText, ModuleIcon });
