import { useCallback, useState } from "react";
import QUESTIONS from "../data/questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizCompllete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizCompllete) {
    // console.log(userAnswers)
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={() => handleSelectAnswer(null)}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswers.map((ans, ind) => {
              return (
                <li key={ind} className="answer">
                  <button onClick={handleSkipAnswer}>{ans}</button>
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
