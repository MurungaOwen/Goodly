import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Home from './(Pages)/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from './components/ui/Footer';
import Donation from './(Pages)/Donate';
import EventPage from './(Pages)/Events';


AOS.init({
  duration: 1500, // Animation duration in milliseconds
});

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
