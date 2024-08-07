import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import Income from './components/Income'
import Transaction from './components/Transaction'
import Form from './components/Form'


const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]
const App = () => {

  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [text, settext] = useState('')
  const [amount, setamount] = useState('')
  const handleName = event => {
    console.log('Name ', event.target.value)
    settext(event.target.value)
  }
  
  const handleAmount = event => {
    console.log('Amount ', event.target.value)
    setamount(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    //check whether the name is not empty and the amount is not negative
    if (text !== '' && amount > 0) {
      // single expense object
      const expense = { text, amount }
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense])
  
      // clean input fields
      settext('')
      setamount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }
  // // const total = function setBalance(){
  // //   expenses.reduce((accumulator, currentValue) => {
  // //     return (accumulator += parseInt(currentValue.amount))
  // //   }, 0)
  // // }
  // console.log(expenses.amount)
  return (
    <>
    <div>
      <Header/>
      <div classNameName="container">
        <Balance  />
        {/* balance checkpoint done  */}
       <div>
       {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
       </div>
        <Income/>
        {/* transaction list checkpoint pass */}
        <Transaction expenses={expenses}/>
        <Form   name={text}
  amount={amount}
  handleName={handleName}
  handleAmount={handleAmount}
  handleSubmitForm={handleSubmitForm} />
      </div>
    
    </div>
    </>
  )
}

export default App