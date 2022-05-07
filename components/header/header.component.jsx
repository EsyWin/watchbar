import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="NavBar">
      <div className="Logo">
        <th>
          <img
            src="https://raw.githubusercontent.com/EsyWin/watchbar/main/public/img/watchbar_mini.png"
            className="App-logo"
            alt="logo"
          />
        </th>
        <th>
          <div className="name">
            <a href="#">WATCĦBAR</a>
          </div>
        </th>
      </div>
      <div className="links">
        <th className="navname"><a href="/team">team</a></th>
        <th className="navname"><a href="#">whitepaper</a></th>
        <form className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};


export default Header;
