import { Link } from "react-router-dom";
import Header from "../Header/Header";
import ForUs from "../ForUs/ForUs";
import plane from "../assets/plane.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="home-main">
        <Header />
        <section className="plane-section">
          <article className="plane-section-content">
            <ul>
              <li className="plane-section-btn">
                <Link to="#">Дестинации</Link>
              </li>
              <li className="plane-section-btn">
                <Link to="#">Нашите оферти</Link>
              </li>
            </ul>
          </article>
          <article className="plane-section-img">
            <img src={plane} alt="plane" />
          </article>
        </section>
        <ForUs />
      </main>
    </>
  );
};

export default Home;
