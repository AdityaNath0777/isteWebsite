import './App.css';
import Home from './components/Home';
import CoverPage from './components/CoverPage';
import Footer from './components/Footer';
import { AluminiProto } from './components/Alumni';


function App() {
  return (
    <div className="App">
      <CoverPage />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
