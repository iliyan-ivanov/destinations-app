import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Aside from "../common/Aside/Aside";
import { useEffect, useState } from "react";
import cities from "../Db";
import "./OfferDetails.css";

const OfferDetails = () => {
  const { id } = useParams();
  const [cityDetails, setCityDetails] = useState({});

  useEffect(() => {
    setCityDetails({ ...cities.filter((x) => x.name == id)[0] });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="offer-details-main">
      <Header />
      <section className="offer-section">
        <article className="offer-img-article">
          <img src={cityDetails.img} alt={cityDetails.name} />
        </article>
        <article className="offer-main-content">
          <section className="offer-description-section">
            <div className="offer-description">
              <h3 className="offer-city-heading">{cityDetails.name}</h3>
              <p>{cityDetails.description}</p>
            </div>

            <div className="offer-program">
              {cityDetails.program?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </section>
          <Aside className="aside" />
        </article>
      </section>
    </main>
  );
};

export default OfferDetails;
