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
          <NavLink
            activeClassName="is-active"
            className="nav-item"
            to="/articles"
          >
            Articles
          </NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/about">
            About
          </NavLink>
        
          <NavLink activeClassName="is-active" className="nav-item" to="/form">
            Sign Up
          </NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/postform">
            Create Post
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
