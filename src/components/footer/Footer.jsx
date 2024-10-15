import "./Footer.css";
import Logo from "../../assets/logo.png"; // Assuming you have a logo image here
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="/profile">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-media">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Research Collaboration. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
