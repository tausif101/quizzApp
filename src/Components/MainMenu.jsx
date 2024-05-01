import React, { useContext } from 'react';
import QuizContext from '../Helpers/QuizContext';
const MainMenu = () => {
  
    const { gameState, setGameState, userName, setUserName } = useContext(QuizContext);
    return (
        <div className='Menu'>
            <label>Enter Your Name:</label>
            <input
                type="text"
                placeholder="Eg: tausif"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
            <button onClick={() => { setGameState("quiz") }}> Start Quiz</button>
      
      </div>
  )
}

export default MainMenu