import icon from './gg1.png';
import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Header = () => {
   return (
      <div className="header_body">
         <Link to="/">
            <img src={icon} className="icon_logo" alt="" />
         </Link>
         <h1>Найди себе команду</h1>
         <Outlet />
      </div>
   );
};

export default Header;
