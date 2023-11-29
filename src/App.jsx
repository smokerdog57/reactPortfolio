// /src/App.jsx

// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Switch>           */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          {/* Add more Route components for other sections when needed */}
        </Routes>
        {/* </Switch> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
