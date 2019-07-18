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
          <li className="drop-item">View All</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Dashboard</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Add a new one</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default DropMenu;