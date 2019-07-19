import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Form from "./Component/Form";
import ViewOne from "./Pages/ViewOne";
import ViewAll from "./Pages/ViewAll";
import OptionOffer from "./Pages/OptionOffer";
import OptionRequest from "./Pages/OptionRequest";
import About from "./Pages/About";
import Update from "./Pages/Update";
// import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard/:_id" component={Dashboard} />
        <Route path="/i-want-to-be-helped" component={ViewAll} />
        <Route path="/i-want-to-offer-help" component={ViewAll} />
        <Route path="/cards/:cards_id" component={ViewOne} />
        <Route path="/create-an-offer" component={Form} />
        <Route path="/create-a-request" component={Form} />
        <Route path="/option-offer" component={OptionOffer} />
        <Route path="/option-request" component={OptionRequest} />
        <Route path="/update-form/:id" component={Update} />
      </Switch>
    </div>
  );
}

export default App;

// test
