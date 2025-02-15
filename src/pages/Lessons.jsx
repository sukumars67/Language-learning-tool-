import React, { useState, useEffect } from "react";
import lessonsData from "../data/lessons.json";
import "./Lessons.css";
import "../styles/variables.css";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons(lessonsData.lessons);
  }, []);

  return (
    <div>
      <h2 className="my-4">Lessons</h2>
      {lessons.map((lesson) => (
        <div key={lesson.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{lesson.title}</h5>
            <ul>
              {lesson.content.map((item, index) => (
                <li key={index}>
                  {item.word} - {item.translation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lessons;
