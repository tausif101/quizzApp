import React, { useState } from "react";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import QuizContext from "./Helpers/QuizContext";

function App() {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);


  return (

    <><h1 style={{
      background:"oldlace", paddingLeft: "20px", paddingTop:"20px"}}>Quiz App</h1>
    <div className="App">
      

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, userName, setUserName }}>
        {gameState == "menu" && <MainMenu />}
        {gameState == "quiz" && <Quiz />}
        {gameState == "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  </>
  
  )
}

export default App
