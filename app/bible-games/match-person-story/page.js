"use client"
import { useState } from 'react'
import pairs from '../../../data/match.json'

export default function MatchPersonStory(){
  const [answers,setAnswers] = useState(() => pairs.map(()=>''))
  const persons = pairs.map(p=>p.person)
  const stories = pairs.map(p=>p.story).sort(()=>Math.random()-0.5)

  function setAnswer(i,val){
    const a=[...answers]; a[i]=val; setAnswers(a)
  }

  function score(){
    let s=0
    for(let i=0;i<pairs.length;i++){
      if(pairs[i].story === answers[i]) s++
    }
    return s
  }

  return (
    <section>
      <div className="card">
        <h2 style={{margin:0}}>Match Person to Story</h2>
        <p className="small">Select the matching story for each person.</p>

        <div style={{marginTop:12}}>
          {persons.map((p,i)=> (
            <div key={p} style={{marginBottom:8}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div><strong>{p}</strong></div>
                <select value={answers[i]} onChange={(e)=>setAnswer(i,e.target.value)} style={{background:'transparent',color:'#fff',borderRadius:8,padding:'6px 8px',border:'1px solid rgba(255,255,255,0.04)'}}>
                  <option value="">Choose story</option>
                  {stories.map((s,j)=>(<option key={j} value={s}>{s}</option>))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:12,display:'flex',justifyContent:'flex-end'}}>
          <div className="small">Score: <span className="score">{score()}</span> / {pairs.length}</div>
        </div>
      </div>
    </section>
  )
}
