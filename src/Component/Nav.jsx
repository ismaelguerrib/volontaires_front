import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropMenu from "./DropMenu";
import { AuthConsumer } from "../auth/Guard";
import SignoutIcon from "../auth/SignoutIcon";

function NavMain() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side">
          <NavLink activeClassName="is-active" exact to="/home">
            <h1 className="nav-logo">Volunteers</h1>
          </NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/about">
            About
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
            {({ loginStatus, signout }) =>
              loginStatus === true ? (
                <React.Fragment>
                  <NavLink
                    activeClassName="is-active"
                    className="icon auth fa fa-user-circle fa-lg"
                    to="/dashboard"
                  />
                  <SignoutIcon signout={signout} />
                  <NavLink
                    activeClassName="is-active"
                    className="nav-item"
                    to="/dashboard/:_id"
                  >
                    Dashboard
                  </NavLink>
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
          {/* <NavLink
            activeClassName="is-active"
            className="nav-item"
            to="/dashboard/:_id"
          >
            Dashboard
          </NavLink>
        </div>
        <div className="nav-side">
          <NavLink
            activeClassName="is-active"
            className="nav-item-link"
            to="/signin"
          >
            <button className="btn-nav">
              Sign In
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-item-link"
            to="/signup"
          >
            <button className="btn-nav">
              Sign up
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-item-link"
            to="/signin"
          >
            <button className="btn-nav">
              My Account
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink> */}
          <DropMenu />
          {/* <NavLink activeClassName="is-active" to="/profile"></NavLink><FontAwesomeIcon icon="user-circle" className="faHeart" /> */}
        </div>

        {/* <NavLink activeClassName="is-active"  to="/profile">Favorites</NavLink> */}
        {/* <NavLink activeClassName="is-active"  to="/sign-in">Sign in</NavLink> */}
      </nav>
    </div>
  );
}

export default NavMain;
