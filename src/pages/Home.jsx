// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../styles/variables.css";

const Home = () => (
  <div className="home">
    <div className="home-banner">
      <h1 className="home-title">Start Your Language Journey</h1>
      <p className="home-subtitle">
        Master a new language with interactive lessons, quizzes, and exercises.
        Let’s get learning!
      </p>
      <Link to="/lessons" className="home-btn">
        Start Learning
      </Link>
    </div>
    <div className="home-features">
      <div className="feature-card">
        <h3>📘 Lessons</h3>
        <p>Essential vocabulary and phrases to kickstart your journey.</p>
        <Link to="/lessons" className="feature-link">
          View Lessons
        </Link>
      </div>
      <div className="feature-card">
        <h3>🖊️ Practice</h3>
        <p>Exercises designed to boost your confidence and skills.</p>
        <Link to="/practice" className="feature-link">
          Try Practice
        </Link>
      </div>
      <div className="feature-card">
        <h3>🧠 Quiz</h3>
        <p>Challenge yourself and track your progress.</p>
        <Link to="/quiz" className="feature-link">
          Take a Quiz
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
