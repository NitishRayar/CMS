import "./App.css";
import About from "./components/about/about";
import AchievementCardComponent from "./components/achievements/achievement";
import ButtonComponent from "./components/button/buttonComponent";
import Slide from "./components/slide/slide";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
