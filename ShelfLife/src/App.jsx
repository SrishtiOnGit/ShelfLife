import './App.css';
import heroImg from './assets/hero.png'; 
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

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

import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          navigate("/dashboard");
        }
      }
    );

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <div className="hero">
        <img src={heroImg} className="hero-img" alt="img" />
      </div>
      <div className="main">
      <button className='btn' onClick={()=> navigate('/signin')}>Get Started</button>
      </div>

      <Features />
      <Review />

      <footer className="footer">Made with ❤️ by <a href="https://github.com/SrishtiOnGit">Srishti</a></footer>
    </>
  );
}function App() {

  const location = useLocation();

  
  const dashboardPaths = ["/dashboard", "/categories", "/profile", "/settings"];

  const isDashboard = dashboardPaths.includes(location.pathname);

  return (
    <div className="container">

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