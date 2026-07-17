type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: "Who built the ark?",
    options: ["Moses", "Noah", "David", "Abraham"],
    answer: "Noah",
  },
  {
    question: "How many days did God take to create the heavens and the earth?",
    options: ["5", "6", "7", "10"],
    answer: "6",
  },
  {
    question: "Who defeated Goliath?",
    options: ["Saul", "Samuel", "David", "Joshua"],
    answer: "David",
  },
];

export default function Trivia() {
  return (
    <div>
      <h2>Bible Trivia</h2>

      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{q.question}</h3>

          {q.options.map((option) => (
            <button
              key={option}
              onClick={() =>
                alert(
                  option === q.answer
                    ? "✅ Correct!"
                    : `❌ Incorrect. The answer is ${q.answer}.`
                )
              }
              style={{
                display: "block",
                margin: "8px 0",
                padding: "10px",
                width: "100%",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
