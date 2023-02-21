// Initialisation de notre application React et greffée au HTML grâce à l'id root : 

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
