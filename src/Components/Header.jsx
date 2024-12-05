import "../assets/Header.css";
import Booking from "./Booking";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="body">
      <div className="navbar">
        <nav>
          <div className="logo">
            <p>Kingsukh Guest House</p>
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <Link to="/" smooth={true} duration={300} activeClass="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" smooth={true} duration={300} activeClass="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" smooth={true} duration={300} activeClass="active">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/room" smooth={true} duration={300} activeClass="active">
                  Room
                </Link>
              </li>
              <li>
                <Link to="/gallery" smooth={true} duration={300} activeClass="active">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" smooth={true} duration={300} activeClass="active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="buttonSection">
            
          </div>
        </nav>
      </div>
      <div className="sectionContainer">
        <p className="tagName">Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home In Our <span>Guest House.</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;