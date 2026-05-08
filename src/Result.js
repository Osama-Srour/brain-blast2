const Result = ({ state }) => {
   
    let color =state.score /state.currentquestionNum ? "green" : "red";
    
    return (
        <div className="result" style={{ color: color }}> 
            {(state.score /state.currentquestionNum) > state.currentquestionNum/2 ? <h1>
                🎉🏆 Congratulations! 🎯🔥
                You answered {state.currentquestionNum} questions 🧠✨
                and your score is {state.score} 💯🥳👏
            </h1>:
            <h1>
                😢📚 Better luck next time!
                You answered {state.currentquestionNum} questions and your score is {state.score}. 💔❌
                Don’t give up — try again and beat your score! 💪🔥
            </h1>}
            

        </div>
    )
}
export default Result