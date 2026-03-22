export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        SocialTo.Pro
      </h1>
      <p style={{
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        color: '#a0aec0',
        maxWidth: '600px',
        lineHeight: 1.6,
        marginBottom: '2rem',
      }}>
        Social2Professionals — Coming Soon
      </p>
      <div style={{
        width: '60px',
        height: '4px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '2px',
      }} />
    </div>
  )
}
