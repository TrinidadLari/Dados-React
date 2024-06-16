/* eslint-disable react/prop-types */
import './dice.css'

import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa6";

export const Dice = ({ diceNumber }) => {
  return (
    <>
      <div className='diceDiv'>
        {diceNumber === 1 && <FaDiceOne />}
        {diceNumber === 2 && <FaDiceTwo />}
        {diceNumber === 3 && <FaDiceThree />}
        {diceNumber === 4 && <FaDiceFour />}
        {diceNumber === 5 && <FaDiceFive />}
        {diceNumber === 6 && <FaDiceSix />}
      </div>
    </>
  )
}
