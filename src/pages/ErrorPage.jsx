///////////////
// EROOR 404 //
//////////////

import Header from "../components/Header";

function ErrorPage() {

    return (
        <div className="wrappe-error">
            <Header />
            <div className="erreur">404</div>
            <div className="messageErreur">Oups! La page que vous demandez n'existe pas.</div>
            <div className="retourAccueil">Mettre un lien retour sur la page d'accueil</div>
        </div>
    );
};

export default ErrorPage;