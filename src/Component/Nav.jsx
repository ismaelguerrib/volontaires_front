import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropMenu from "./DropMenu";

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
            to="/api/offers"
          >
            View All Offers
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-item"
            to="/api/requests"
          >
            View All Requests
          </NavLink>
          <NavLink
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
              My Account
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink>
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
