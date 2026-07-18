"use client"
import { useState } from 'react'
import booksData from '../../../data/books.json'

export default function BooksOrder(){
  // pick a short slice of books to order
  const [pool] = useState(()=>{
    const start = Math.floor(Math.random()*(booksData.length-5))
    return booksData.slice(start,start+5)
  })
  const [items,setItems] = useState(()=>[...pool].sort(()=>Math.random()-0.5))
  const [done,setDone] = useState(false)

  function moveUp(i){
    if(i===0) return
    const arr = [...items]
    [arr[i-1],arr[i]] = [arr[i],arr[i-1]]
    setItems(arr)
  }
  function moveDown(i){
    if(i===items.length-1) return
    const arr = [...items]
    [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
    setItems(arr)
  }
  function check(){
    const correct = items.every((b,i)=>b === pool[i])
    setDone(correct)
  }

  return (
    <section>
      <div className="card">
        <h2 style={{margin:0}}>Books of the Bible Order</h2>
        <p className="small">Arrange these 5 books in the correct canonical order.</p>

        <ul className="list" style={{marginTop:12}}>
          {items.map((b,i)=> (
            <li key={b} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>{i+1}. {b}</div>
              <div style={{display:'flex',gap:8}}>
                <button className="btn secondary" onClick={()=>moveUp(i)}>↑</button>
                <button className="btn secondary" onClick={()=>moveDown(i)}>↓</button>
              </div>
            </li>
          ))}
        </ul>

        <div style={{marginTop:12,display:'flex',justifyContent:'space-between'}}>
          <button className="btn secondary" onClick={()=>{setItems([...pool].sort(()=>Math.random()-0.5)); setDone(false)}}>Shuffle</button>
          <div className="controls">
            <button className="btn" onClick={check}>Check</button>
          </div>
        </div>

        {done && <p className="small" style={{marginTop:12,color:'var(--success)'}}>Correct order! Nice job.</p>}
        {!done && <p className="small" style={{marginTop:12}}>Not correct yet — try again.</p>}
      </div>
    </section>
  )
}
