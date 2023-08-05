import QuestionOptions from "./QuestionOptions";

function Question({ question, dispatch, answer }) {
    return (
        <div>
            <h4>{question.question}</h4>
            <QuestionOptions question={question} answer={answer} dispatch={dispatch} /> 
        </div>
    )
}

export default Question
