import { Fragment } from "react";
import About from "./about/about";
import AchievementCardComponent from "./achievements/achievement";
import ButtonComponent from "./button/buttonComponent";
import Slide from "./slide/slide";
import Footer from "./footer/footer";

const Home = () => {
  return (
    <Fragment>
      <Slide />
      <div>
        <About />
      </div>
      <div>
        <ButtonComponent label="Our Achievements" />
      </div>
      <AchievementCardComponent />
      <ButtonComponent label="Feature Events" />
      <AchievementCardComponent />
      <Footer />
    </Fragment>
  );
};

export default Home;