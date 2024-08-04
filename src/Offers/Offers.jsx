import "./Offers.css";
import DestinationCard from "../common/DestinarionCard/DestinationCard";
import cities from "../Db";

const Offers = () => {
  return (
    <main className="offers-main">
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
