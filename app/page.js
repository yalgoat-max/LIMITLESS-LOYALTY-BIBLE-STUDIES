export default function Home(){
  return (
    <section>
      <div className="card">
        <h1 style={{margin:'0 0 8px 0'}}>Welcome</h1>
        <p className="small">A mobile-first Bible Hub with trivia and simple games. Choose an activity below.</p>

        <div style={{display:'flex',gap:12,marginTop:16,flexWrap:'wrap'}}>
          <a href="/bible-trivia" className="btn">Bible Trivia</a>
          <a href="/bible-games" className="btn secondary">Bible Games</a>
        </div>
      </div>

      <div className="card">
        <h2 style={{margin:'0 0 8px 0'}}>About</h2>
        <p className="small">All data is local sample JSON. No databases or external APIs.</p>
      </div>
    </section>
  )
}
