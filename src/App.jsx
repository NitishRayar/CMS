import "./App.css";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Category from "./pages/category";
import Person from "./pages/person";
import Place from "./pages/place";
import Ward from "./pages/ward";
import './index.css'; // Import Tailwind CSS file
import Report from "./pages/report/report";
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" element= {<Home/>} />
        <Route path="/report" element= {<Report/>} />
        <Route path="/service" element= {<Service/>} />
        <Route path="/category" element= {<Category/>} />
        <Route path="/person" element= {<Person/>} />
        <Route path="/place" element= {<Place/>} />
        <Route path="/ward" element= {<Ward/>} />
      </Routes>
    </>
  );
}

export default App;
