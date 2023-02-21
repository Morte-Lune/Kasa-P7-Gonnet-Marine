//////////
// CARD //
//////////

// Securisation du composant Card à l'aide des propTypes :
// Utilisation des props
// Ce composant récupère 2 props :title et cover : 

// Utilisation de PropTypes pour préciser les types de chacune des propriétés : 
import PropTypes from "prop-types";

// card récupère couverture et titre grâce au props depuis Home : 
function Card ({title, cover}) {
    return (
        <div className="card">
            <img src={cover} alt=" Appartement " className="card__img" />
            <h2 className="card__titre">{title}</h2>
        </div>
    );
};

Card.propTypes = {
    title :  PropTypes.string,
    cover :  PropTypes.string,
}

export default Card;