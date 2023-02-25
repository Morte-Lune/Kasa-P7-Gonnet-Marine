/////////////
// COLLAPSE //
/////////////

import { useState, useRef, useEffect } from "react"; 
import chevron from "../assets/d-fleche-bas.svg";

//Utilisation d'une variable d'état sur le composant Collapse pour choisir de l'afficher ou de le cacher : 
function Collapse(info) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="conteneurCollapse">
            <button className="conteneurCollapse__boutton" onClick={() => setIsOpen(false)}>
                <h2 className="conteneurCollapse__titre">{info.aboutTitle}</h2>
                <img className="conteneurCollapse__icone" src={chevron} alt="chevron" />
                <p className="textContent">{info.aboutText}</p>
            </button>
        </div>
    );
};

export default Collapse;


