import './globals.css'

export const metadata = {
  title: 'LIMITLESS LOYALTY — Bible Hub',
  description: 'Mobile-first Bible Hub: Trivia and Games'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <div className="header-title">LIMITLESS LOYALTY — Bible Hub</div>
            <nav>
              <a href="/" className="small">Home</a>
              <a href="/bible-trivia" className="small">Bible Trivia</a>
              <a href="/bible-games" className="small">Bible Games</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="small" style={{marginTop:24}}>Simple, local, dark-mode app • No auth • Sample data only</footer>
        </div>
      </body>
    </html>
  )
}
