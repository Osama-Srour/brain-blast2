import logo from './logo.svg';
import './App.css';
import Question from './Question';
import useQuestion from './useQuestion';
import Result from './Result';

function App() {

  const { questionlist, state, handleSelection } = useQuestion()


  return (
    <div className="App">
      {(questionlist[0]) ?
        <>
          <nav>
            <h1>Question Namber :{state.currentquestionNum}</h1>
            <h1>Score: {state.score}</h1>
          </nav>
          {state.isFinished ? <Result state={state}  ></Result> : <Question state={state} currentQuestion={state.currentQuestion} handleSelection={handleSelection}></Question>}

        </> :
        <h1>loading...</h1>}
    </div>
  );
}

export default App;
