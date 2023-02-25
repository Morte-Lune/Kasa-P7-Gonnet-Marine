//////////
// CARD //
//////////

// La bibliothèque prop-types permet de sécuriser vos props en déclarant un type pour chaque prop : 
import PropTypes from "prop-types";

// card récupère couverture et titre grâce au props depuis Home : 
function Card ({title, cover}) {
    return (
        <div className="card">
            <img src={cover} alt=" Appartement " className="card__img" />
			<div className="card__titree">
            <h2 className="card__titre">{title}</h2>
			</div>
        </div>
    );
};

Card.propTypes = {
    title :  PropTypes.string,
    cover :  PropTypes.string,
}

export default Card;