import React from "react";

const Card = props => {
    console.log(props);
    return(
        <div className="space-card" key={props.id}>
            <h1>Title: {props.copyright}</h1>
            <img className="space-image" src={props.hdurl}/>
            <p className="space-date">Date: {props.date}</p>
            <p>Discription: {props.explanation}</p>
        </div>
    )
}


export default Card;