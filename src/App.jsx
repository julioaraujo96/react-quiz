import Header from "./Header";
import MainContent from "./MainContent";
import Loader from './Loader';
import Error from './Error';
import Question from "./Question";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  status: 'loading', //loading, error, ready, active, finished
}

function reducer(state, action){
  switch(action.type){
    case 'dataReceived':
      return {
        ...state, 
        questions: action.payload,
        status: 'ready',
    };
    case 'dataFailed':
      return {
        ...state, 
        status: "error",
    };
    case 'start':
      return { ...state, status: "active" };
    default:
        throw new Error(`Invalid action ${action.type}`);
  }
}


export default function App() {

  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
   
  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data => dispatch({type:'dataReceived', payload: data}))
    .catch(e => dispatch({ type:'dataFailed'}));
  }, []);

return (
  <div className="app">
    <Header />
    <MainContent>
      { status === 'loading' && <Loader />}
      { status === 'error' && <Error />}
      { status === 'ready' && <StartScreen  numQuestions={numQuestions} dispatch={dispatch} />}
      { status === 'active' && <Question /> }
    </MainContent>
  </div>
)
}

