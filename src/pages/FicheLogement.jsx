////////////////////
// FICHE LOGEMENT //
///////////////////

import { useState, useEffect } from "react";
// Hooks useParams, useNavigate : 
import { useParams, useNavigate } from "react-router-dom";

// Composants nécessaires à ma page "Fiche logement" :
import Header from "../components/Header";
import Etoiles from "../components/Etoiles";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import Carrousel from "../components/Carrousel";

function FicheLogement() {

  // Récupération du paramètre d'URL (id du logement) :
  const { id } = useParams();
  const [data, setData] = useState(null);
  // Utilisation du Hook "useNavigate" pour naviguer vers la page d'erreur si le logement n'est pas trouvé : 
  const navigate = useNavigate();

  ///////////
  // FETCH //
  //////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
          // Recherche du logement correspondant à l'id récupéré depuis l'URL :
        const dataLogement = data.find((item) => item.id === id.toString());
        setData(dataLogement);

          // Redirection vers la page d'erreur :
        if (!dataLogement) {
          navigate("error");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, navigate]);

  // Rendu de la page : 
  return (
    <div>
      {data ? (
        <>
          <Header />
          <main className="principal">
            <Carrousel images={data.pictures} />
            <section className="containerBloc">
              <div className="containerBloc__left">
                <h1 className="containerBloc__left--titre">{data.title}</h1>
                <h2 className="containerBloc__left--location">
                  {data.location}
                </h2>
                <Tag tags={data.tags} />
              </div>
              <div className="containerBloc__rigth">
                <div className="containerBloc__rigth--host">
                  <p className="nameHost">{data.host.name}</p>
                  <img
                    className="pictureHost"
                    src={data.host.picture}
                    alt="l'hôte"
                  />
                </div>
                <Etoiles rating={data.rating} />
              </div>
            </section>

            <div className="collapses">
              <div className="blocUn">
                <Collapse
                  aboutTitle="Description"
                  aboutText={data.description}
                />
              </div>

              <div className="blocDeux">
                <Collapse
                  aboutTitle="Équipements"
                  aboutText={data.equipments.map((item) => (
                    <li className="equipements" key={item}>
                      {item}
                    </li>
                  ))}
                />
              </div>
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default FicheLogement;
