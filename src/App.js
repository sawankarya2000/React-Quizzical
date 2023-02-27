import { useState ,createContext} from 'react';
import './App.css';
import Intro from "./Components/Intro.js";
import Question from "./Components/Question.js";
import Quiz from './Components/Quiz';
import blob1 from "./Images/blob1.svg";
import blob2 from "./Images/blob2.svg";

export const AppContext = createContext();

function App() {

  const [quizData,setData] = useState("")
  const [val , changeVal] = useState(true);
  async function handlefetchData(){
    async function fetchData() {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await response.json();
      const results = data.results.map(item => ({
        question : item.question,
        correct_answer : item.correct_answer,
        incorrect_answers : item.incorrect_answers
      }))
      setData(() => results);
      changeVal(lastState => !lastState);
    }
    await fetchData();
    return 1;
  }
  return (
    <AppContext.Provider value={{quizData,setData}}>
        <div className="App">
            {val ? <Intro fetchData = {handlefetchData}/> : <Quiz fetchData = {handlefetchData}/>}
            <img className="blob1" src={blob1} alt="blob1" />
            <img className="blob2" src={blob2} alt="blob2" />
        </div>
    </AppContext.Provider>

  );
}

export default App;
