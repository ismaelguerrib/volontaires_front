import React from 'react';
import { NavLink } from 'react-router-dom';

const DropMenu = () => {
  return (
    <div className="drop-menu-container">
      <ul className="drop-list">
        <NavLink activeClassName="is-active" className="drop-item" to="/articles">
          <li className="drop-item">Logout</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Article Management</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Profile</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default DropMenu;