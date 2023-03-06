////////////////////
// FICHE LOGEMENT //
///////////////////

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Etoiles from "../components/Etoiles";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import Carrousel from "../components/Carrousel";

function FicheLogement() {
  
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  ///////////
  // FETCH //
  //////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        const dataLogement = data.find((item) => item.id === id.toString());
        setData(dataLogement);
        if (!dataLogement) {
          navigate("error");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, navigate]);

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
