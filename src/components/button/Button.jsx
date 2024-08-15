/* eslint-disable react/prop-types */
import './button.css'


import { FaDice } from "react-icons/fa6";

export const Button = ({ rollDice }) => {
  return (
    <button className='rollButton' onClick={rollDice}> <FaDice /> Roll!! </button>
  )
}
