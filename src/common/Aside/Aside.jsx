import DestinationCard from "../DestinarionCard/DestinationCard";
import cities from "../../Db";
import "./Aside.css";

const Aside = () => {
  return (
    <section className="aside-section">
      {cities.slice(0, 4).map((city) => (
        <DestinationCard key={city.id} name={city.name} img={city.img} />
      ))}
    </section>
  );
};

export default Aside;
