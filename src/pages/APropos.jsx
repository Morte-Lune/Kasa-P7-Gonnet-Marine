//////////////
// A PROPOS //
/////////////

import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import textAbout from "../assets/apropos.json";

function APropos() {
    return (
        <div>
            <Header />
            <Banner />
            <section className="information">
            {textAbout.map((info, id) => (
                <Collapse
                key={id}
                aboutTitle={info.aboutTitle}
                aboutText={info.aboutText}
                />
				))}
            </section>
            <Footer />
         </div>
    );
};

export default APropos;