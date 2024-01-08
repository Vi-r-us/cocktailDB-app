import React from "react";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { showSearchbar } = useGlobalContext();

  return (
    <header>
      <nav className="navbar flex" direction="col">
        <div className="nav-center flex" direction="row">
          <Link to={"/"}>
            <h2 className="logo">Cocktail</h2>
          </Link>

          <ul className="nav-links flex" direction="row">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.to}>{navLink.title}</Link>
              </li>
            ))}
          </ul>

          <Link to={"/search"}>
            <CiSearch className="search-modal-btn" onClick={showSearchbar} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
