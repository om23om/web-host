import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import ScienceNotes from './components/ScienceNotes';
import MathsNotes from './components/MathsNotes';
import Blog from './components/Blog';
import Meetingpage from './components/Meetingpage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/science-notes" element={<ScienceNotes />} />
            <Route path="/maths-notes" element={<MathsNotes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/meetings" element={<Meetingpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
