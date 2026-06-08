import React from 'react'
import './features.css'

const Features = () => {
  return (
    <section className='features'>
    <div className='features-title'>
        <h2>Features</h2>
    </div>
    <div className='features-grid'>
        <div className='feature-card'>
        <h2>📚 Smart Shelf</h2>
        <p>Your digital shelf for everything you're exploring.</p>
        </div>

        <div className='feature-card'>
        <h2> 📈 Progress Tracking</h2>
        <p>Track your progress and always know how close you are to completion.</p>
        </div>

        <div className='feature-card'>
        <h2>🔔 Smart Reminders</h2>
        <p>Receive timely reminders to revisit unfinished interests before they fade away.</p>
        </div>

        <div className='feature-card'>
        <h2>🎯 Goals & Milestones</h2>
        <p>Set targets and transform curiosity into consistent progress.</p>
        </div>

        <div className='feature-card'>
        <h2>📊 Activity Insights</h2>
        <p>Visualize your habits, discover patterns, and stay motivated through meaningful analytics.</p>
        </div>

        <div className='feature-card'>
        <h2>🧠 Resume Assistant</h2>
        <p>Never lose your place again. Pick up exactly where you left off.</p>
        </div>

    </div>
    </section>
  )
}

export default Features