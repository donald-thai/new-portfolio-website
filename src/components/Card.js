import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/card.css";


const Card = ({title, description, route, cardContainerStyle, cardDescriptionStyle, cardInfoContainerStyle, cardHeaderStyle, imageSrc, cardImageStyle}) => {
  let navigate = useNavigate();

  return (
    <div className={`card-wrapper ${cardContainerStyle}`} onClick={() => {
      navigate(route || "/");
    }}>
      {/* <div className={`card-image ${cardImageStyle}`}></div> */}
      <img src={imageSrc || "assets/IMG_4181.JPG"} alt="" className={`card-image ${cardImageStyle}`}/>
      <div className={`card-info-wrapper ${cardInfoContainerStyle}`}>
        <h1 className={`${cardHeaderStyle}`}>
          {title || "Title"}
        </h1>
        <h4 className={`${cardDescriptionStyle}`}>
          {description || "Description!"}
        </h4>
      </div>
    </div>
  )
}

export default Card