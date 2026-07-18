"use client"
import { useState } from 'react'
import characters from '../../../data/characters.json'

export default function GuessCharacter(){
  const [idx,setIdx] = useState(0)
  const [score,setScore] = useState(0)
  const [show,setShow] = useState(false)

  const item = characters[idx]
  const options = [...item.incorrect, item.name].sort(()=>Math.random()-0.5)

  function pick(choice){
    if(show) return
    setShow(true)
    if(choice === item.name) setScore(s=>s+1)
  }

  function next(){
    const n = idx+1
    if(n >= characters.length){
      setIdx(0); setScore(0); setShow(false)
    } else {setIdx(n); setShow(false)}
  }

  return (
    <section>
      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h2 style={{margin:0}}>Guess the Bible Character</h2>
          <div className="small">Score: <span className="score">{score}</span></div>
        </div>

        <p className="clue">{item.clue}</p>

        <div style={{marginTop:10}} className="grid">
          {options.map((o,i)=>{
            const cls = ['choice']
            if(show){
              if(o === item.name) cls.push('correct')
              else if(o !== item.name && o === item.selected) cls.push('wrong')
            }
            return <div key={i} className={cls.join(' ')} onClick={()=>pick(o)}>{o}</div>
          })}
        </div>

        <div style={{marginTop:12,display:'flex',justifyContent:'space-between'}}>
          <button className="btn secondary" onClick={()=>{setIdx(0); setScore(0); setShow(false)}}>Reset</button>
          <button className="btn" onClick={next}>Next</button>
        </div>
      </div>
    </section>
  )
}
