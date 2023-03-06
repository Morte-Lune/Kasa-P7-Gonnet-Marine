//////////////////////
// REACT ROUTER DOM //
/////////////////////

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import ErrorPage from './pages/ErrorPage';
import FicheLogement from './pages/FicheLogement';

function App() {
    return (
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
