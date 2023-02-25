//////////////////
//PAGE D'ACCUEIL//
/////////////////

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {

    // Permet de stocker les données retour de l'api dans le state : 
    const [data, setData] = useState([]);

    // Permet de déclencher un fetch :
    // APPEL DE L'api et on précise un tableau de dépendances vide : 
    useEffect(() => {
        fetch(`/logements.json`)
             .then((res) => {
                return res.json();
             })
             .then((data)=> setData(data))
             .catch((error)=> console.error(error));
     }, [])
    return (
        <div>
            <Header />
            <Banner />

            <section className="gallery">
				{data.map((logement, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${logement.id}`}>
							<Card cover={logement.cover} title={logement.title} />
						</Link>
					</div>
				))}
			</section>
            <Footer />
        </div>
    );
};

export default Home;
