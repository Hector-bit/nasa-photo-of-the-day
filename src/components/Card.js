import React from "react";

const Card = props => {
    return(
        <div className="space-card">
            <img src={props.url} alt="space related picture"/>
            <div className="explanation">{props.explanation}</div>
        </div>
    )
};

export default Card;