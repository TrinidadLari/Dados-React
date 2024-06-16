import './App.css'


import { Button } from './components/button/Button'
import { CardContainer } from './components/cardContainer/CardContainer.jsx';

import { useState } from 'react'

function App() {
  const [diceNumber, setDiceNumber] = useState(3);
  const handleRollDice = () => {
    let number = parseInt(Math.random() * 6 + 1)
    setDiceNumber(number)
    console.log(diceNumber)
  }
  return (
    <>
      <Button rollDice={handleRollDice} />
      <CardContainer diceNumber={diceNumber} />

    </>
  )
}

export default App
