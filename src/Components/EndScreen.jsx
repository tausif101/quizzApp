import React, { useContext } from "react";

import { Questions } from '../Helpers/QuestionBank';
import QuizContext from '../Helpers/QuizContext';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    QuizContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Final Score</h1>
      <h2>{userName}</h2>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;