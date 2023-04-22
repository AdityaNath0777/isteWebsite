import "./App.css";
import { AluminiProto } from "./components/Alumni";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/about" element={<AboutUs />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
