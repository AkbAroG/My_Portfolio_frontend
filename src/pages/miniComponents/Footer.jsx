export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 5%',
      borderTop: '1px solid rgba(255,140,0,0.1)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#ff8c00', fontSize: '1rem' }}>
        &lt;AkbarU  /&gt;
      </span>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a5568', fontSize: '0.85rem', margin: 0 }}>
        © 2026 AkbarU. Copyright. All rights reserved.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://www.linkedin.com/in/akbaraliduhavi28/" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#ff8c00'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          LinkedIn
        </a>
         <a href="https://github.com/AkbAroG" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#ff8c00'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          GitHub
        </a>
         <a href="https://www.instagram.com/akbaro_20?igsh=MTZxNXluOThnaWptcw==" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#ff8c00'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          Instagram
        </a>
        
      </div>
    </footer>
  );
}
