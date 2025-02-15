// src/pages/Practice.jsx
import React, { useState } from "react";
import "./Practice.css";
import "../styles/variables.css";

const exercisesData = [
  {
    id: 1,
    title: "Exercise 1",
    questions: [
      { question: "Translate 'Hello' to French.", answer: "Bonjour" },
      { question: "Translate 'Goodbye' to French.", answer: "Au revoir" },
      { question: "Translate 'Thank you' to French.", answer: "Merci" },
      { question: "Translate 'Please' to French.", answer: "S'il vous plaît" },
      { question: "Translate 'Yes' to French.", answer: "Oui" },
    ],
  },
  {
    id: 2,
    title: "Exercise 2",
    questions: [
      { question: "Translate 'No' to French.", answer: "Non" },
      { question: "Translate 'Good morning' to French.", answer: "Bonjour" },
      { question: "Translate 'Excuse me' to French.", answer: "Excusez-moi" },
      { question: "Translate 'Sorry' to French.", answer: "Désolé" },
      {
        question: "Translate 'Congratulations' to French.",
        answer: "Félicitations",
      },
    ],
  },
  // Add more exercises here following the same pattern
];

const Practice = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e, exerciseId, questionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [`${exerciseId}-${questionIndex}`]: e.target.value,
    });
  };

  const handleSubmit = () => setShowResults(true);

  return (
    <div className="my-4">
      <h2>Practice Exercises</h2>
      {exercisesData.map((exercise) => (
        <div key={exercise.id} className="card mb-3 p-3">
          <h5>{exercise.title}</h5>
          <ul>
            {exercise.questions.map((q, index) => (
              <li key={index}>
                {q.question}
                <input
                  type="text"
                  value={userAnswers[`${exercise.id}-${index}`] || ""}
                  onChange={(e) => handleChange(e, exercise.id, index)}
                  className="form-control my-2"
                />
                {showResults && (
                  <span>
                    {userAnswers[`${exercise.id}-${index}`] === q.answer
                      ? "Correct"
                      : "Incorrect"}
                    !
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit} className="btn btn-primary">
        Submit Answers
      </button>
    </div>
  );
};

export default Practice;
