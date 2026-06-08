import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h2>Where Interests Become Achievements..</h2>

      <p>ShelfLife helps you organize, track, and complete the things that matter most—from books and 
        courses to personal projects and creative goals.
      </p>

      <h2>Why ShelfLife exists?</h2>

      <p>
       Every year, people start countless books, courses, hobbies, and projects with excitement. Yet many of these interests are forgotten, abandoned, or buried under new distractions.

      ShelfLife was created to solve this problem. We believe that unfinished interests still hold value, and that with the right tools, people can reconnect with their goals and make meaningful progress.
      </p>

      <h2>Who It's For</h2>

       <div className='features-grid'>
        <div className='feature-card'>
        <h3>📚 Readers tracking books</h3>
        </div>

        <div className='feature-card'>
        <h3> 🎓 Students completing courses</h3>
        
        </div>

        <div className='feature-card'>
        <h3>🎮 Gamers finishing game libraries</h3>
        
        </div>

        <div className='feature-card'>
        <h3>🎨 Creators managing projects</h3 >
        
        </div>

        <div className='feature-card'>
        <h3>🚀 Lifelong learners building skills</h3>
        </div>
      </div>

      <h2>Our Vision</h2>
      <p>
       Our vision is to become the home for lifelong learning and personal growth.

      We imagine a future where people can see the story of everything they've learned, built, explored, and accomplished in one meaningful place.
      </p>
    </div>
  );
};

export default About;