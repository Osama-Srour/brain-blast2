import { useMemo } from "react";

const Question = ({state , handleSelection}) => {

const answers = useMemo(() => {
  return [...state.currentQuestion.answer]
    .sort(() => Math.random() - 0.5);
}, [state.currentquestionNum]); 
    return (
        <div className="question">
            <h2> {state.currentQuestion.text} </h2>
            <div className="radiodiv">
                <div id="option1" className={(state.currentQuestion.selectedOption ===1 && state.currentQuestion.correctAnswer ===answers[0]) ?" correct option" : (state.currentQuestion.selectedOption ===1 && state.currentQuestion.correctAnswer !== answers[0]) ? "incorrect option": "option"} onClick={()=> {handleSelection(answers[0],1)}} >{answers[0]}</div>
                <div id="option3" className={(state.currentQuestion.selectedOption ===2 && state.currentQuestion.correctAnswer ===answers[1]) ?" correct option" : (state.currentQuestion.selectedOption ===2 && state.currentQuestion.correctAnswer !==answers[1]) ? "incorrect option": "option"}  onClick={()=> {handleSelection(answers[1],2)}} >{answers[1]}</div>
                <div id="option4" className={(state.currentQuestion.selectedOption ===3 && state.currentQuestion.correctAnswer ===answers[2]) ?" correct option" : (state.currentQuestion.selectedOption ===3 && state.currentQuestion.correctAnswer !==answers[2]) ? "incorrect option": "option"}  onClick={()=> {handleSelection(answers[2],3)}} >{answers[2]}</div>
                <div id="option2" className={(state.currentQuestion.selectedOption ===4 && state.currentQuestion.correctAnswer ===answers[3]) ?" correct option" : (state.currentQuestion.selectedOption ===4 && state.currentQuestion.correctAnswer !==answers[3]) ? "incorrect option": "option"}  onClick={()=> {handleSelection(answers[3],4)}} >{answers[3]}</div>
            </div>
        </div>
    )
}
export default Question