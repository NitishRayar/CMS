import Button from "react-bootstrap/Button";
import Slide from "./slide/slide";
import About from "./about/about";
import Card from "./Card/Card";
import Footer from "./footer/footer";
import "./home.css";
import { achievements } from "../data/constants";

const Home = () => {
  return (
    <>
      <div className="cms-image-slider">
        <Slide />
      </div>
      <div className="cms-about">
        <About />
      </div>
      <div className="cms-achievemetns">
        <Button variant="dark">Our Achievements</Button>
        <Card
          type="Achievements"
          data={achievements}
          background="#fff"
          color="#1a1a1a"
        />
      </div>
      <div className="cms-feature-events">
        <Button variant="dark">Feature Events</Button>
        <Card
          type="Events"
          data={achievements}
          background="#1a1a1a"
          color="#ff8c1a"
        />
      </div>
      <div className="cms-footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
