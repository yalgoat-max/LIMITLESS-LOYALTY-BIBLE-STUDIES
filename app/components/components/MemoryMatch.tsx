"use client";

import { useState } from "react";

const cards = [
  "✝️",
  "📖",
  "🙏",
  "❤️",
  "✝️",
  "📖",
  "🙏",
  "❤️",
];

export default function MemoryMatch() {
  const [selected, setSelected] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (selected.includes(index) || selected.length === 2) return;

    setSelected([...selected, index]);

    if (selected.length === 1) {
      const first = selected[0];

      setTimeout(() => {
        if (cards[first] !== cards[index]) {
          setSelected([]);
        }
      }, 700);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Memory Match</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "32px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {selected.includes(index) ? card : "?"}
          </button>
        ))}
      </div>
    </div>
  );
}
