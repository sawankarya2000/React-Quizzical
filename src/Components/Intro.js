import React from "react";
function Intro(props){
    return (
        <div className="Intro">
            <h1 className="header">Quizzical</h1>
            <p className="description">Some description if needed</p>
            <div className="button--center">
                <button className="button start" onClick={props.fetchData}>Start quiz</button>
            </div>

        </div>
    )
}

export default Intro;