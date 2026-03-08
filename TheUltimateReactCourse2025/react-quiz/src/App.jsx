import './index.css'
import Header from "./comps/Header.jsx";
import Main from "./comps/Main.jsx";
import {useEffect, useReducer} from "react";
import Loader from "./comps/Loader.jsx";
import Error from "./comps/Error.jsx";
import Start from "./comps/Start.jsx";
import Question from "./comps/Question.jsx";
import NextButton from "./comps/NextButton.jsx";
import Progress from "./comps/Progress.jsx";
import FinishScreen from "./comps/FinishScreen.jsx";
import Footer from "./comps/Footer.jsx";

const SECS_PER_QUESTION = 30;


const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    case "dataFailed":
      return {
        ...state,
        status: "error",
      }
    case "start":
      return {
        ...state,
        status: "active",
      }
    case "newAnswer":
      { const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      } }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      }
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore: state.points > state.highScore ? state.points : state.highScore,
      }
    case "restart":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 1 ? "finished" : state.status,
      }

    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highScore, secondsRemaining}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        { status === "loading" && <Loader /> }
        { status === "error" && <Error /> }
        { status === "ready" && <Start numQuestions={ numQuestions }
                                       dispatch={ dispatch } /> }
        { status === "active" &&
          <>
            <Progress index={ index }
                      numQuestions={ numQuestions }
                      points={points}
                      maxPossiblePoints={maxPossiblePoints}
                      answer={ answer } />
            <Question question={questions[index]}
                      dispatch={ dispatch }
                      answer={answer}/>
            <Footer secondsRemaining={ secondsRemaining }
                    dispatch={ dispatch } >
              <NextButton dispatch={ dispatch }
                          answer={answer}
                          index={ index }
                          numQuestions={ numQuestions } />
            </Footer>
          </>
        }
        {status === "finished" && <FinishScreen points={ points }
                                                maxPossiblePoints={ maxPossiblePoints }
                                                highScore={ highScore }
                                                dispatch={ dispatch } /> }


      </Main>

    </div>
  );
}

