// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioPost from "./pages/PortfolioPost";


// Import styles
import "./styles.css";

// Add any additional global styles for syntax highlighting if needed
// You might want to add a CSS library like prism.js for code syntax highlighting

function App() {
  return (
    <Router>
          <ScrollToTop />
      <div className="font-sans min-h-screen bg-white text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/music" element={<Music />} />
          <Route path="/portfolio/:postId" element={<PortfolioPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;