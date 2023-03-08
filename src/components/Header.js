////////////
// HEADER //
///////////

import logoHeader from "../assets/logo-header.svg";
import { NavLink } from "react-router-dom";

function Header() {
  

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoHeader}
        alt="Logo de l'agence Kasa"
      />
      <nav>
        <ul className="header__navigation">
          <div className="header__navigation--accueil">
          <NavLink to="/"  className= {(list) => (list.isActive ? "listactive" : "list")} >
            <li> Accueil</li>
          </NavLink>
          </div>
          <NavLink to="/APropos"  className= {(list) => (list.isActive ? "listactive" : "list")} >
            <li> A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
