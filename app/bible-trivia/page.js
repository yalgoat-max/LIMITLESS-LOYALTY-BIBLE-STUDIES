"use client"
import { useState } from 'react'
import questions from '../../data/trivia.json'

function shuffle(arr){return arr.sort(()=>Math.random()-0.5)}

export default function TriviaPage(){
  const [score,setScore] = useState(0)
  const [index,setIndex] = useState(0)
  const [choices,setChoices] = useState(()=>shuffle([...questions[index].incorrect, questions[index].answer]))
  const [selected,setSelected] = useState(null)
  const [showAnswer,setShowAnswer] = useState(false)

  function next(){
    const nextIndex = index+1
    if(nextIndex >= questions.length){
      // restart
      setIndex(0)
      setScore(0)
      setSelected(null)
      setShowAnswer(false)
      setChoices(shuffle([...questions[0].incorrect, questions[0].answer]))
      return
    }
    setIndex(nextIndex)
    setSelected(null)
    setShowAnswer(false)
    setChoices(shuffle([...questions[nextIndex].incorrect, questions[nextIndex].answer]))
  }

  function pick(choice){
    if(showAnswer) return
    setSelected(choice)
    setShowAnswer(true)
    if(choice === questions[index].answer){
      setScore(s=>s+1)
    }
  }

  const q = questions[index]

  return (
    <section>
      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{margin:0}}>Bible Trivia</h2>
          <div className="small">Score: <span className="score">{score}</span> / {questions.length}</div>
        </div>

        <p className="clue">Question {index+1} of {questions.length}</p>
        <h3 style={{marginTop:6}}>{q.question}</h3>

        <div style={{marginTop:12}} className="grid">
          {choices.map((c, i)=>{
            const cls = ['choice']
            if(showAnswer){
              if(c === q.answer) cls.push('correct')
              else if(c === selected && c !== q.answer) cls.push('wrong')
            }
            return (
              <div key={i} className={cls.join(' ')} onClick={()=>pick(c)}>
                {c}
              </div>
            )
          })}
        </div>

        <div style={{marginTop:12,display:'flex',justifyContent:'space-between'}}>
          <button className="btn secondary" onClick={()=>{setIndex(0); setScore(0); setChoices(shuffle([...questions[0].incorrect, questions[0].answer])); setSelected(null); setShowAnswer(false)}}>Reset</button>
          <div className="controls">
            <button className="btn" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
