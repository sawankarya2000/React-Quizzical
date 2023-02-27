import React, { useEffect, useState , useContext, useLayoutEffect} from "react";
import Question from "./Question.js";
import fetchData from "./Data.js";
import { AppContext } from "../App.js";

export default function Quiz(props){
    const {quizData,setData} = useContext(AppContext);
    const [answerCount , setCount] = useState(0);
    const [render , setRender] = useState(false);

    function checkAnswer(callback){
        const boolVal = callback();
        if(boolVal){
            setCount(lastCount => lastCount+1);
        }
        else{
            setCount(lastCount => lastCount -1);
        }
    }

    async function handleData(){
        // const data = await fetchData();
        // setData(data);
        const num = await props.fetchData();
        setRender(lastRender => !lastRender);   
    }

    const handleRender = () => {

        if(render === true){
            handleData();
        }
        else{
            setRender(lastRender => !lastRender);
        }

    };  
    const question = quizData.map(item => {   
        return(
            <Question question_data = {item} render = {render} checkAns  = {checkAnswer}  />
        )
    });
    return(
        <div className="Quiz">
            {question}
            <div className="button--center">
                {render && <p className="score">You scored {`${answerCount} / 5`} correct answers</p>}
                <button className="button check" onClick={handleRender}>{render ? "Play Again" : "Check answers"}</button>
            </div>
        </div>
    )
}