import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = ({img, name}) => {
  return (
    <article className="destination">
      <div className="destination-img">
        <img src={img} alt="Destination" />
      </div>
      <div className="destination-header">
        <Link to={`/offers/${name}/details`}>{name}</Link>
      </div>
    </article>
  );
};

export default DestinationCard;
