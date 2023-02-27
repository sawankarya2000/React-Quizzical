import React, { createContext, useEffect, useState , useMemo} from "react";
import Option from "./Option.js";

function Question(props){

    const [clickable , setClick] = useState(true);
    const question = props.question_data.question;
    const all_options = props.question_data.incorrect_answers.concat(props.question_data.correct_answer);
    const [correct , setCorrect] = useState(false);
    
    function handleClick(callback){
        if(props.render){
            return ;
        }
        const selected = callback();
        if(selected.boolean === true){
            const val = selected.val;
            if(val === props.question_data.correct_answer){
                setCorrect(true);
                props.checkAns(() => true);
            }
        }
        else if(selected.boolean === false){
            if(correct === true){
                setCorrect(false);
                props.checkAns(() => false);
            }
        }
        if(selected !== (-1)){
            setClick(!selected.boolean);
        }
    }

    

    const options = all_options.map(item => {
        return(
            <Option choice = {item} 
            render = {props.render} 
            correct ={(item === props.question_data.correct_answer)? true: false} 
            canClick = {clickable} 
            handleClick = {handleClick}/>
        )
    });
    return (
        <div className="Question">
            <p className="question--text">{question}</p>
            <div className="Options">
                {options}
            </div>
            <hr className="line"/>
        </div>
    )
}
export default Question;