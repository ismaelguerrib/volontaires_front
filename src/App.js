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
        <Route path="/view/:beer_id" component={ViewOne} />
        <Route path="/add-a-request-or-offer" component={Form} />
        <Route path="/view" component={ViewAll} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

// test
