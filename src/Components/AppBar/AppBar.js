import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="header-list">
          <li className="header-list-item">
            <NavLink
              exact
              to="/"
              className="header-link"
              activeClassName="selected"
            >
              Homepage
            </NavLink>
          </li>

          <li className="header-list-item">
            <NavLink
              to="/movies"
              className="header-link"
              activeClassName="selected"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppBar;
