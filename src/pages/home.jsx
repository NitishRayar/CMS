import { Fragment } from "react";
import About from "../components/about/about";
import AchievementCardComponent from "../components/achievements/achievement";
import ButtonComponent from "../components/button/buttonComponent";
import Slide from "../components/slide/slide";
import Footer from "../components/footer/footer";

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