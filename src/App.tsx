import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import ResultPageContainer from "./components/ResultPage/ResultPageContainer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={HomePageContainer} />
          <Route path="/:word" exact={true} component={ResultPageContainer} />
          <Route path="/:word/error" exact={true} component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
