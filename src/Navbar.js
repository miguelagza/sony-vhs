import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__components'>
        <img
          src='https://logos-marcas.com/wp-content/uploads/2020/04/Sony-Logo.png'
          alt='sony_logo'
        />
        <div className='navbar__icons'>
          <div className='navbar__icon'>
            <SearchIcon />
          </div>
          <div className='navbar__icon'>
            <PersonIcon />
          </div>
          <div className='navbar__icon'>
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
