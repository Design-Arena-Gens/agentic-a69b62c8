export const metadata = {
  title: 'Hello App',
  description: 'A simple hello world application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
