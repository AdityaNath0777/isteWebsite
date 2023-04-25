import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/project" element={<Project />} />
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
