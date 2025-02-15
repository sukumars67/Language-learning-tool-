import React, { useState } from "react";
import quizData from "../data/lessons.json";
import "./Quiz.css";
import "../styles/variables.css";

const Quiz = () => {
  const [currentLevel, setCurrentLevel] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.quiz[currentLevel].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="my-4">
      <h2>
        Quiz - {currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}{" "}
        Level
      </h2>
      {showScore ? (
        <div>
          <p>
            Your score: {score} out of {quizData.quiz[currentLevel].length}
          </p>
          <button onClick={restartQuiz} className="btn btn-secondary">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <select
            className="form-select mb-3"
            value={currentLevel}
            onChange={(e) => {
              setCurrentLevel(e.target.value);
              restartQuiz();
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <div>{quizData.quiz[currentLevel][currentQuestion].question}</div>
          {quizData.quiz[currentLevel][currentQuestion].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    option ===
                      quizData.quiz[currentLevel][currentQuestion].answer
                  )
                }
                className="btn btn-primary m-2"
              >
                {option}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
