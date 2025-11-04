export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '4rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Hello! 👋
      </h1>
      <p style={{
        fontSize: '1.5rem',
        opacity: 0.9,
        textAlign: 'center'
      }}>
        Welcome to your Next.js application
      </p>
    </main>
  )
}
