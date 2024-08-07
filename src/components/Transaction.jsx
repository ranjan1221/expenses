import React, { useState } from 'react'

const Transaction = ({expenses}) => {
  const [color, setcolor] = useState(true)
  function handleColor(){
  setcolor(!color)

  }
  return (
    <>
    <div>
    <h3>History</h3>
      <ul id="list" className="list">
     {expenses.map(item=>(
       <li className="minus" key={item.id}>
       {item.name}<span>{item.amount}</span>
       {color?<button className="delete-btn" style={{backgroundColor:"red"}}    onClick={handleColor}>x</button>:<button className="delete-btn" style={{backgroundColor:"green"}}  onClick={handleColor} >x</button>}
     </li>
     ))}

       
      </ul>
    </div>
    </>
  )
}

export default Transaction