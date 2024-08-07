import React from 'react'
import amount from './../App'
const Balance = ({amount}) => {
  return (<>
   <h4>Your Balance</h4>
    <h1 id="balance">{amount}</h1>

  </>
   
  )
}

export default Balance