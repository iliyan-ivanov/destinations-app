import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Offers from "./Offers/Offers"
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
