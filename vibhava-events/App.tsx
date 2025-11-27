import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import HouseWarming from './pages/HouseWarming';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/house-warming" element={<HouseWarming />} />
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;