//////////////
// COLLAPSE //
/////////////

//Hook useLocation :
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import chevron from "../assets/flecheBas.svg";
import chevronHaut from "../assets/flecheHaut.svg";


function Collapse(info) {
  
  const [aboutLocation, setAboutLocation] = useState(false);
  const localisation = useLocation().pathname;

  useEffect(() => {
    if (localisation === "/APropos") {
      setAboutLocation(true);
    }
  }, [localisation, aboutLocation]);

  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div
      className={aboutLocation ? "wrappeCollapse" : "wrappeCollapseLogements"}
    >
      <div
        className={aboutLocation ? "toggleVisible" : "toggleVisibleLogements"}
        onClick={toggle}
      >
        <div className="toggleVisible__titreIcone">
          <h2
            className={
              aboutLocation
                ? "toggleVisible__titreIcone--titre"
                : "toggleVisibleLogements__titre"
            }
          >
            {info.aboutTitle}
          </h2>
          {open ? (
            <img
              className="toggleVisible__titreIcone--icone"
              src={chevron}
              alt="Flèche du haut"
            />
          ) : (
            <img
              className="toggleVisible__titreIcone--icone"
              src={chevronHaut}
              alt="Flèche du bas"
            />
          )}
        </div>
      </div>
      {open && (
        <div
          className={
            aboutLocation ? "toggleInvisible" : "toggleInvisibleLogements"
          }
        >
          <h3
            className={
              aboutLocation
                ? "toggleInvisible__titre"
                : "toggleInvisibleLogements__titre"
            }
          >
            {info.aboutText}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Collapse;
