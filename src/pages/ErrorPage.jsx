////////////////////
// PAGE EROOR 404 //
///////////////////

import { Link } from "react-router-dom";

// Composants nécessaires à ma page "ErrorPage" :
import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
    
  return (
    <div>
      <Header />
      <section className="wrappeError">
        <div className="error">
          <div className="error__chiffre">404</div>
          <div className="error__message">
            Oups! La page que vous demandez n'existe pas.
          </div>
          <Link to="/" className="error__link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ErrorPage;
