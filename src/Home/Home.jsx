import { Link } from "react-router-dom";
import Header from "../Header/Header";
import AboutUsInfo from "../common/AboutUsInfo/AboutUsInfo";
import MainDestinations from "../MainDestinations/MainDestinations";
import plane from "../assets/plane.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="home-main">
        <section className="plane-section">
          <Header />
          <article className="plane-section-content">
            <ul>
              <li className="plane-section-btn">
                <Link to="#">Дестинации</Link>
              </li>
              <li className="plane-section-btn">
                <Link to="#">Нашите оферти</Link>
              </li>
            </ul>
            <div className="plane-section-img">
              <img src={plane} alt="plane" />
            </div>
          </article>
        </section>
        <AboutUsInfo />
        <MainDestinations />
      </main>
    </>
  );
};

export default Home;
