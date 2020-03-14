import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <nav>
               <a href="/users">All Users</a>
               <a href="/manage">Manage Users</a>
               <a href="/about">About</a>
               <a href="/contact">Contact</a>
           </nav>
        </div>
    );
};

export default Header;