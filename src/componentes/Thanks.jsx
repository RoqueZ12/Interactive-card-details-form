import React from "react";
import '../sass/thanks.scss'
import check from '../assets/icon-complete.svg'
const Thanks = ({handleReturn}) =>{
  const returnHandleClick = () => {
    handleReturn();
  };
  return(
    <div className="thanks-container">
      <div className="container-img">
        <img src={check} />
      </div>
      <div className="container-text">
        <h2>THANK YOU!</h2>
        <span>We've added your card details</span>
      </div>
      <button type="submit" onClick={returnHandleClick}>Continue</button>
    </div>
  )
}
export {Thanks}