import React, { useState } from 'react'

const Form = ({name, amount, handleName, handleAmount, handleSubmitForm}) => {


  return(
  <>
   <h3>Add new transaction</h3>
      <form  onSubmit={handleSubmitForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"     value={name}
          onChange={handleName} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount}
          onChange={handleAmount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    
  </>
  )
}

export default Form