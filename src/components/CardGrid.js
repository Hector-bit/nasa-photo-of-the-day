import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";


export default function CardGrid() {
    const [spaceCard, setSpaceCard] = useState([]);

    useEffect(() => {
        axios 
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                const info = response.data;
                console.log(info);
                setSpaceCard(info);
            })
            .catch(error => {
                console.log("did not get info", error);
            },[]);

            return(
                <div className="card-container">
                    <div className="entry">{spaceCard.map(image => {
                        return <Card key={image} img={image}/>
                    })}</div>
                </div>
            )
    })
}