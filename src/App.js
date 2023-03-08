//////////////////////
// REACT ROUTER DOM //
/////////////////////

// Bibliothèques nécessaires pour gérer les routes de l'application : 
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages de l'application : 
import Home from './pages/Home';
import APropos from './pages/APropos';
import ErrorPage from './pages/ErrorPage';
import FicheLogement from './pages/FicheLogement';

function App() {
    return (
        // On encapsule les routes dans le composant BrowserRouter pour gérer les URL de manière dynamique
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default App;
