import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Integrantes from "../Integrantes";
import EjerciciosNA from "../EjerciciosNA";
import EjerciciosNP from "../EjerciciosNP";
import EjerciciosNL from "../EjerciciosNL";
import Recetas from "../Recetas";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Integrantes" component={Integrantes} />
          <Route exact path="/EjerciciosNA" component={EjerciciosNA} />
          <Route exact path="/EjerciciosNP" component={EjerciciosNP} />
          <Route exact path="/EjerciciosNL" component={EjerciciosNL} />
          <Route exact path="/Recetas" component={Recetas} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
