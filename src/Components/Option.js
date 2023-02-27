import React, { useContext, useEffect, useReducer, useState } from "react";

function Option(props){
    const [selected , setState] = useState(false);
        

    function toggleSelect(){
        if(props.canClick === true){
            setState(true);
            return ({boolean : true , val : props.choice});
        }
        else if(selected){
            setState(false);
            return ({boolean : false , val: props.choice});
        }

        return -1;
            
    }


    let styles = {
        backgroundColor: selected ? "#94D7A2" : "#F5F7FB"
    };

    if(props.render && selected === false){
        if(props.correct){
            styles = {
                backgroundColor : "#F8BCBC",
                color : "#293264",
                borderColor : "transparent"
            };
        }
        else{
            styles = {
                border: "0.771045px solid #4D5B9E",
                color : "#293264",
                borderColor : "transparent"
            }
        }
    }else if(props.render && selected){
        styles = {
            backgroundColor: "#94D7A2",
            borderColor : "transparent"
        }
    }

    return(
        <button className="Option" onClick={() => props.render? console.log("Rendered") : props.handleClick(toggleSelect)} style = {styles}>
            { props.choice}
        </button>
    )
}
export default Option;