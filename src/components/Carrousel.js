///////////////
// CARROUSEL //
//////////////

import React, { useState } from "react";
import PropTypes from "prop-types";
import flecheRigth from "../assets/flecheRigth.svg";
import flecheLeft from "../assets/flecheLeft.svg";

function Carrousel({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Définition d'une fonction "handleNext" pour passer à l'image suivante :
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

   // Définition d'une fonction "handlePrev" pour passer à l'image précédente
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  

  return (
    <div className="carrousel">
      <div className="carrousel__imageContainer">
        <img
          className="carrousel__imageContainer--img"
          src={images[currentIndex]}
          alt="carousel"
        />
      </div>

      <div className="carousel__controls">
        {images.length > 1 && (
          <img
            src={flecheLeft}
            alt="Flèche de gauche"
            onClick={handlePrev}
            className="leftArrow"
          />
        )}
        {images.length > 1 && (
          <img
            src={flecheRigth}
            alt="Flèche de droite"
            onClick={handleNext}
            className="rightArrow"
          />
        )}
      </div>
      {images.length > 1 ? (
        <div className="number">{`${currentIndex + 1}/${images.length}`}</div>
      ) : null}
    </div>
  );
}

Carrousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carrousel;
