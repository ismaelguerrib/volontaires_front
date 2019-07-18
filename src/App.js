import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Form from "./Component/Form";
import ViewOne from "./Pages/ViewOne";
import ViewAll from "./Pages/ViewAll";
// import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/i-want-to-be-helped" component={ViewAll} />
        <Route path="/i-want-to-offer-help" component={ViewAll} />
        <Route path="/view/:cards_id" component={ViewOne} />
        <Route path="/create-an-offer" component={Form} />
        <Route path="/create-a-request" component={Form} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  );
}

export default App;

// test
