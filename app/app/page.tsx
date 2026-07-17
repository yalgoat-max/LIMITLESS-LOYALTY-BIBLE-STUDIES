export default function Home() {
  const cards = [
    "📖 Verse of the Day",
    "❓ Bible Trivia",
    "🧠 Memory Match",
    "🔎 Bible Word Search",
    "🎯 Daily Challenge",
    "📚 Study Library"
  ];

  return (
    <main className="container">
      <h1>Limitless Loyalties Bible Studies</h1>

      <p>
        Grow in faith through Scripture, Bible games, and daily challenges.
      </p>

      <div className="grid">
        {cards.map((card) => (
          <div key={card} className="card">
            {card}
          </div>
        ))}
      </div>
    </main>
  );
}
