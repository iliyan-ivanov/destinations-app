//import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <section className="logo">
        <Link to="/">
          <h1>ILIYAN</h1>
        </Link>
        <h2>Полети до всяка точка на Европа</h2>
      </section>
      <section className="main-nav">
        <article className="main-nav-content">
          <ul className="main-nav-content-btns">
            <li>
              <Link to="/about-us">За нас</Link>
            </li>
            <li>
              <Link to="/offers">Нашите оферти</Link>
            </li>
            <li>
              <Link to="/contact-us">Контакти</Link>
            </li>
          </ul>
          <div className="social-media">
            <ul>
              <li>
                <Link to="https://www.instagram.com/" className="social-media-icon">
                  <FaIcons.FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="https://x.com/" className="social-media-icon">
                  <FaIcons.FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/" className="social-media-icon">
                  <FaIcons.FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </nav>
  );
};

export default Header;
