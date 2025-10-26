export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body style={{ color: 'red' }}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout