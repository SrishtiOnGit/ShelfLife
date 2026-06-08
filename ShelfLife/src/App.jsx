import React from 'react';
import './App.css';
import heroImg from './assets/hero.png'; 

import Navbar from './components/navbar';
import Features from './components/features';
import Review from './components/review';
import About from './Pages/about';
import FAQ from './Pages/faq';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import Dashboard from './Pages/dashboard';
import Categories from './Pages/category';
import Profile from './Pages/profile';
import Settings from './Pages/settings';

// 1. Import useLocation along with your routing mechanisms
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <img src={heroImg} alt="hero-img" />
      </div>

      <main className="main">
        <button className="btn" onClick={() => navigate("/signin")}>
          Get Started - It's Free
        </button>
      </main>

      <Features />
      <Review />

      <footer className="footer">
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/srishtiongit">
            Srishti
          </a>
        </p>
      </footer>
    </>
  );
}

function App() {
  // 2. Initialize the location tracking hook
  const location = useLocation();

  // 3. List out all paths where you DO NOT want the top Navbar to appear
  const dashboardPaths = ["/dashboard", "/categories", "/profile", "/settings"];

  // 4. Check if the current URL path matches any of your internal app paths
  const isDashboard = dashboardPaths.includes(location.pathname);

  return (
    <div className="container">
      {/* 🔑 Conditional Rendering: Only show Navbar if we are NOT on a dashboard route */}
      {!isDashboard && <Navbar />} 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;