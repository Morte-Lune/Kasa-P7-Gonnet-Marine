/////////////
// ETOILES //
////////////

import etoilePleine from "../assets/etoilePleine.svg";
import etoileVide from "../assets/etoileVide.svg";


function Etoiles({ rating }) {

  //Tableau d'entiers représentant chaque niveau d'étoiles : 
  const etoiles = [1, 2, 3, 4, 5];
  
  return (
    <div className="containerEtoile">
      {etoiles.map((level) =>
        rating >= level ? (
          <img
            key={level.toString()}
            className="etoile"
            src={etoilePleine}
            alt="Etoile pleine"
          />
        ) : (
          <img
            key={level.toString()}
            className="etoile"
            src={etoileVide}
            alt="Etoile vide"
          />
        )
      )}
    </div>
  );
}

export default Etoiles;
