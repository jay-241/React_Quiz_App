import { useState } from "react";
import QUESTIONS from "../data/questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  };

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((ans, ind) => {
              return (
                <li key={ind} className="answer">
                  <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
