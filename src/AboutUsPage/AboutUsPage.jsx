import Header from "../Header/Header";
import AboutUsInfo from "../AboutUsInfo/AboutUsInfo"
import "./AboutUsPage.css";

const AboutUsPage = ({img, name}) => {
  return (
    <main className="about-us-page">
        <Header />
        <AboutUsInfo />
    </main>
  );
};

export default AboutUsPage;