import React from "react";
import ReactDOM from "react-dom";

// IMPORT PARA MOSTRAR LA PAGINA DEFAULT//

import App from "./routes/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
