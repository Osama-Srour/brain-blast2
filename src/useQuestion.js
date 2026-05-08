import { useEffect, useState } from "react"


const useQuestion = () => {

    const [questionlist, setQuestionlist] = useState([]);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    setQuestionlist(data.results);
                    console.log(questionlist);
                    console.log(Array.isArray(data.results))
                    setState({
                        ...state, currentQuestion: {
                            text: data.results[0].question,
                            correctAnswer: data.results[0].correct_answer,
                            answer: [...data.results[0].incorrect_answers, data.results[0].correct_answer],
                            isCorrect: null,
                            selectedOption: 0,

                        }

                    })

                } else {
                    console.log("No data");
                }
            }).catch(err => console.log("API Error:", err))

    }, [])





    const [state, setState] = useState({

        currentQuestion: {},
        score: 0,
        currentquestionNum: 1,
        isFinished: false

    })

    const handleSelection = (optionValue, optionNumber) => {
        let newScore = state.score
        let opstiostate = false;
        if (optionValue === state.currentQuestion.correctAnswer) {
            newScore += 10
            opstiostate = true
        }
        setState({ ...state, score: newScore, currentQuestion: { ...state.currentQuestion, selectedOption: optionNumber, isCorrect: opstiostate } })

        setTimeout(() => {
            if (state.currentquestionNum < questionlist.length) {
                let qustionNum = state.currentquestionNum;
                let NewQustion = {
                    text: questionlist[state.currentquestionNum].question,
                    correctAnswer: questionlist[state.currentquestionNum].correct_answer,
                    answer: [...questionlist[state.currentquestionNum].incorrect_answers, questionlist[state.currentquestionNum].correct_answer],
                    isCorrect: null,
                    selectedOption: 0,
                }

                setState({
                    ...state,
                    currentQuestion: NewQustion,
                    currentquestionNum: qustionNum + 1,
                    score: newScore

                })
            } else {
                setState({ ...state, isFinished: true })
            }
        }, 1000);




    }




    return { questionlist, state, handleSelection }
}

export default useQuestion; 