
import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
         MARVEL / DC
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">HISTORY</a>
        </li>
        <li>
          <a href="#">ALL HEROES</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;