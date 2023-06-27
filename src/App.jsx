import "./App.css";
import AchievementCardComponent from "./components/achievements/achievement";
import ButtonComponent from "./components/button/buttonComponent";
import { Carousel } from "./components/carousel/Carousel";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import { slides } from "./data/carouselData.json";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App">
        <Carousel data={slides} />
      </div>
      <div>
        <ButtonComponent label="Our Achievements" />
      </div>
      <div>
        <AchievementCardComponent />
      </div>
      <div>
        <ButtonComponent label="Feature Events" />
      </div>
      <div>
        <AchievementCardComponent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
