export default function GamesLanding(){
  return (
    <section>
      <div className="card link-card">
        <div>
          <h2 style={{margin:0}}>Bible Games</h2>
          <p className="small">Choose a simple game below.</p>
        </div>
      </div>

      <div className="grid">
        <a href="/bible-games/guess-character" className="card link-card">
          <div>
            <strong>Guess the Bible Character</strong>
            <div className="small">Read clues and pick the character.</div>
          </div>
          <div style={{alignSelf:'center'}}>&gt;</div>
        </a>

        <a href="/bible-games/books-order" className="card link-card">
          <div>
            <strong>Books of the Bible Order</strong>
            <div className="small">Arrange a short list of books in the right order.</div>
          </div>
          <div style={{alignSelf:'center'}}>&gt;</div>
        </a>

        <a href="/bible-games/match-person-story" className="card link-card">
          <div>
            <strong>Match Person to Story</strong>
            <div className="small">Match Bible people to short story summaries.</div>
          </div>
          <div style={{alignSelf:'center'}}>&gt;</div>
        </a>
      </div>
    </section>
  )
}
