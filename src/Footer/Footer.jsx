import "./Footer.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        © Copyright 2024 ILIYAN. All Rights Reserved.
      </section>
      <section className="footer-icons-section">
        <ul>
          <li>
            <Link to="https://www.instagram.com/" className="social-media-icon-footer">
              <FaIcons.FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/" className="social-media-icon-footer">
              <FaIcons.FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/" className="social-media-icon-footer">
              <FaIcons.FaFacebook />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
