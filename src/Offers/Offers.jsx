import cities from "../Db";
import Header from "../Header/Header";
import DestinationCard from "../common/DestinarionCard/DestinationCard";
import "./Offers.css";

const Offers = () => {
  return (
    <main className="offers-main">
      <Header />
      <section className="offers-section">
        <article className="offers-list">
          {cities.map((city) => (
            <DestinationCard key={city.id} name={city.name} img={city.img} />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Offers;
