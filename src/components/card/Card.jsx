/* eslint-disable react/prop-types */
import './card.css'


export const Card = ({ cardHeader, cardFooter, cardImg, cardButton, diceNumber }) => {
  return (
    <>

      <h3 className="cardOne__header">Hola!! Hoy podes comer la sugerencia de la Card {diceNumber}</h3>
      <div className="cardOne__container">
        {cardHeader && <p className="card__header">{cardHeader}</p>}
        {cardImg && <img src={cardImg} alt="" className="cardOne__img" />}
        {cardFooter && <p className="cardOne__footer">{cardFooter}</p>}
        {cardButton && <a className="carOne__button" href={cardButton} target="_blank">Receta</a>}
      </div>




    </>
  )
}
