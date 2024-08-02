import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = ({img, name}) => {
  return (
    <article className="trips-destination">
      <div className="trips-destination-img">
        <img src={img} alt="Destination" />
      </div>
      <div className="trips-destination-header">
        <Link to={`/trips/${name}`}>{name}</Link>
      </div>
    </article>
  );
};

export default DestinationCard;
