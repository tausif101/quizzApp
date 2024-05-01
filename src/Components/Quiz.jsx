import React, { useContext, useState } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import QuizContext from '../Helpers/QuizContext.jsx';

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, gameState, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }
  
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>

    {/* options for the question answer */}
      <div className="options">
        <button onClick={()=>setOptionChosen("A")}>{Questions[currentQuestion].optionA }</button>
          <button onClick={() => setOptionChosen("B")} >{Questions[currentQuestion].optionB }</button>
          <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC }</button>
          <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD }</button>
      </div> 

      {/* bottom button */}
      {currentQuestion == Questions.length - 1 ? <button onClick={finishQuiz} >Finish Quiz</button> : <button onClick={nextQuestion}>Next Question</button> }
      
    </div>
  )
}

export default Quiz