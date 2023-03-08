////////////////////
// PAGE D'ACCUEIL //
///////////////////

// importe les bibliothèques React, useState et useEffect pour gérer l'état des composants de l'application et leur cycle de vie.
import React, { useState, useEffect } from "react";
// la bibliothèque Link de react-router-dom pour gérer les liens entre différentes pages de l'application.
import { Link } from "react-router-dom";

// Composants nécessaires à ma page d'accueil "Home" : 
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";


function Home() {
  const [data, setData] = useState([]);

  ///////////
  // FETCH //
  //////////

// utilise la fonction useEffect pour effectuer une requête de données dès que le composant est chargé.
  useEffect(() => {
    fetch(`/logements.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  // On retourne le code HTML à afficher sur la page :
  return (
    <div>
      <Header />
      <Banner />

      <section className="gallery">
        {data.map((logement, id) => (
          <div className="card_logement" key={id}>
            <Link
              className="link_card_logement"
              to={`/FicheLogement/${logement.id}`}
            >
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
