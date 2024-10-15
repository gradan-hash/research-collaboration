import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png"; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Automatically close the menu when the route changes
  useEffect(() => {
    setIsOpen(false); // Close the navbar on route change
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links (Hidden on Mobile by default) */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/proposals">Proposals</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/events">Events</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/support">Support</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
