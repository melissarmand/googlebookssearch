import React from "react";
import './style.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div>
        <a className="navbar-brand" href="/">
          Google Book Search
        </a>
      </div>
      <div>
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved
        </a>
      </div>
    </nav>
  );
}

export default Nav;