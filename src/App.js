import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./dashboard/Dashboard";
import Form from "./Component/Form";
import ViewOne from "./Pages/ViewOne";
import ViewAll from "./Pages/ViewAll";
import OptionOffer from "./Pages/OptionOffer";
import OptionRequest from "./Pages/OptionRequest";
import Update from "./Pages/Update";
import Signup from "./forms/Signup";
import SignIn from "./forms/Signin";
import ProtectedRoute from "./auth/ProtectedRoute";
// import Header from "./Component/Header";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/i-want-to-be-helped" component={ViewAll} />
        <Route path="/i-want-to-offer-help" component={ViewAll} />
        <Route
          path="/cards/i-want-to-be-helped/:cards_id"
          component={ViewOne}
        />
        <Route
          path="/cards/i-want-to-offer-help/:cards_id"
          component={ViewOne}
        />
        <ProtectedRoute path="/create-an-offer" component={Form} />
        <ProtectedRoute path="/create-a-request" component={Form} />
        <Route path="/option-offer" component={OptionOffer} />
        <Route path="/option-request" component={OptionRequest} />
        <Route
          path="/update-form/cards/i-want-to-be-helped/:id"
          component={Update}
        />
        <Route
          path="/update-form/cards/i-want-to-offer-help/:id"
          component={Update}
        />
      </Switch>
    </div>
  );
}

export default App;

// test
