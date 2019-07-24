import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropMenu from "./DropMenu";
import { AuthConsumer } from "../auth/Guard";
import SignoutIcon from "../auth/SignoutIcon";
import VolontaireLogo from "../images/logo.png";

function NavMain() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side">
          <NavLink activeClassName="is-active" exact to="/home">
            <img className="nav-logo" src={VolontaireLogo} alt="ourlogo" />
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-item"
            to="/i-want-to-be-helped"
          >
            View All Offers
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-item"
            to="/i-want-to-offer-help"
          >
            View All Requests
          </NavLink>
          <AuthConsumer>
            {({ loginStatus, signout, user }) =>
              loginStatus === true ? (
                <React.Fragment>
                  {/* <NavLink
                    activeClassName="is-active"
                    className="icon auth fa fa-user-circle fa-lg"
                    to="/dashboard"
                  /> */}

                  <NavLink
                    activeClassName="is-active"
                    className="nav-item"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                  <SignoutIcon signout={signout} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavLink
                    activeClassName="is-active"
                    className="nav-item-link"
                    to="/signin"
                  >
                    <button className="btn-nav">
                      Sign In
                      <FontAwesomeIcon
                        icon="angle-right"
                        className="arrow-btn"
                      />
                    </button>
                  </NavLink>

                  <NavLink
                    activeClassName="is-active"
                    className="nav-item-link"
                    to="/signup"
                  >
                    <button className="btn-nav">
                      Sign up
                      <FontAwesomeIcon
                        icon="angle-right"
                        className="arrow-btn"
                      />
                    </button>
                  </NavLink>
                </React.Fragment>
              )
            }
          </AuthConsumer>

          <DropMenu />
        </div>
      </nav>
    </div>
  );
}

export default NavMain;
