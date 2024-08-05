import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Offers from "./Offers/Offers"
import Footer from "./Footer/Footer";
import OfferDetails from "./OfferDetails/OfferDetails";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id/details" element={<OfferDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
