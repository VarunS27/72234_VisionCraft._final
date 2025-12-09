import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
