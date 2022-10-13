import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Navbar(props) {
    return (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/pokemons">
              <Pokemons/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </BrowserRouter>
      );
}


export default Navbar
