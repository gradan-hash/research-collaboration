import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png"; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/proposals">Proposals</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/events">Events</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/support">Support</Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
