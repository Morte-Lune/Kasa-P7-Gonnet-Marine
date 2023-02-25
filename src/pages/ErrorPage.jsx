///////////////
// EROOR 404 //
//////////////

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"

function ErrorPage() {

    return (
        <div>
        <Header />
        <div className="error">
            <div className="error__chiffre">404</div>
            <div className="error__message">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className="error__link">
				Retourner sur la page d’accueil
			</Link>
        </div>
        <Footer />
        </div>
    );
};

export default ErrorPage;