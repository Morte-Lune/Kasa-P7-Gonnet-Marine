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
          <NavLink className="header__navigation--accueil" to="/">
            <li> Accueil</li>
          </NavLink>
          <NavLink className="header__navigation--apropos" to="/APropos">
            <li> A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
