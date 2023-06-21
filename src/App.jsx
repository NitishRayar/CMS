import "./App.css";
import { Carousel } from "./components/carousel/Carousel";
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
    </>
  );
}

export default App;
