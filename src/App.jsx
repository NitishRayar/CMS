import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Service from "./components/services/service";
import Person from "./components/services/people/person";
import Place from "./components/tools/place";
import Ward from "./components/tools/ward";
import "./index.css"; // Import Tailwind CSS file
import Report from "./components/reports/report";
import { Category } from "./components/services/categories/category";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/service" element={<Service />} />
        <Route path="/category" element={<Category />} />
        <Route path="/person" element={<Person />} />
        <Route path="/place" element={<Place />} />
        <Route path="/ward" element={<Ward />} />
      </Routes>
    </>
  );
}

export default App;
