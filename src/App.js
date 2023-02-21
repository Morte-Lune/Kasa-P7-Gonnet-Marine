//////////////////////
// REACT ROUTER DOM //
/////////////////////

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import ErrorPage from './pages/ErrorPage'

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/APropos" element={<APropos />} />
        {/* path= "*" indique si l'url ne, correspond à rien de déclaré dans les routes : */}
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default App;
