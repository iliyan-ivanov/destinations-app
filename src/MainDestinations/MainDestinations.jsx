import "./MainDestinations.css";
import DestinationCard from "../common/DestinarionCard/DestinationCard";
import cities from '../Db';

const MainDestinations = () => {
  return (
    <section className="trips">
      {cities.map((city) => (
        <DestinationCard key={city.id} name={city.name} img={city.img} />
      ))}
    </section>
  );
};

export default MainDestinations;
