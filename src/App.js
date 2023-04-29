import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";
import AlumniPage from "./components/Alumni/AlumniPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Events from "./components/Events/Events";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/project" element={<Project />} />
      <Route exact path="/event" element={<Events />} />
      <Route exact path='/contact' element={<ContactUs/>} />
      <Route exact path="/alumni" element={<AlumniPage />} />
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
