import "./App.css";
import About from "./components/about/about";
import AchievementCardComponent from "./components/achievements/achievement";
import ButtonComponent from "./components/button/buttonComponent";
import Slide from "./components/slide/slide";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Report from "./pages/report";
import Service from "./pages/service";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" element= {<Home/>} />
        <Route path="/report" element= {<Report/>} />
        <Route path="/service" element= {<Service/>} />
      </Routes>
    </>
  );
}

export default App;
