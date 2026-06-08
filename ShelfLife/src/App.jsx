import React from 'react';
import './App.css';

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


import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <img src="/src/assets/hero.png" alt="hero-img" />
      </div>

      <main className="main">
        <button className="btn">
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
  return (
    <div className="container">

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