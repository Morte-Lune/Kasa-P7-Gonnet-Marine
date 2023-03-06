////////////
// FOOTER //
///////////

import logoFooter from "../assets/logo-footer.svg";

function Footer() {
  
  return (
    <div className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rigths reserved</p>
    </div>
  );
}

export default Footer;
