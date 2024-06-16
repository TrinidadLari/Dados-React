/* eslint-disable react/prop-types */

import './cardContainer.css'

import { Card } from '../card/Card'
import { Dice } from '../dice/Dice'

import cardImg1 from '../../assets/canelones.jpg'
import cardImg2 from '../../assets/tacos.jpg'
import cardImg3 from '../../assets/spaguetti.jpg'
import cardImg4 from '../../assets/arroz.avif'
import cardImg5 from '../../assets/pionono.jpg'
import cardImg6 from '../../assets/lomo.jpg'

export const CardContainer = ({ diceNumber }) => {
  return (
    <div className='boxCards'>
      <h2>
        El resultado es: <Dice diceNumber={diceNumber} />
      </h2>

      {diceNumber === 1 && (
        <Card
          cardImg={cardImg1}
          cardFooter={"Cocinate unos canelones!! Re da!!"}
          cardButton="https://www.paulinacocina.net/receta-de-canelones-de-carne-picada/32260"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 2 && (
        <Card
          cardHeader={"Mirá esta delicia!"}
          cardImg={cardImg2}
          cardFooter={"Hermoso día para unos Tacos"}
          cardButton="https://www.paulinacocina.net/como-hacer-tacos-mexicanos/21098"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 3 && (
        <Card
          // cardHeader={"Holu"}
          cardImg={cardImg3}
          cardFooter={"Se me hace agua la boca de verlo! 🤤"}
          cardButton="https://www.paulinacocina.net/espagueti-a-la-bolonesa/33633#google_vignette"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 4 && (
        <Card
          cardHeader={"Arroz con queso"}
          cardImg={cardImg4}
          cardFooter={"Me niego a dejarte una receta. Vamos!! Yo sé que vos podés!! 💪"}
          // cardButton="Adoptar"
          diceNumber={diceNumber}
        />
      )}
      {diceNumber === 5 && (
        <Card
          cardHeader={"Una cena fresca viene bien. Sale Pionono"}
          cardImg={cardImg5}
          // cardFooter={"Chaucha"}
          cardButton="https://www.paulinacocina.net/pionono-salado/26536"
          diceNumber={diceNumber}
        />
      )}

      {diceNumber === 6 && (
        <Card
          cardHeader={"Lomo a la crema de hongos: pa’meter siesta"}
          cardImg={cardImg6}
          cardFooter={"Lo mereces 🙌"}
          cardButton="https://www.paulinacocina.net/lomo-a-la-crema-de-hongos/3021#google_vignette"
          diceNumber={diceNumber}
        />
      )}


    </div>)
}


