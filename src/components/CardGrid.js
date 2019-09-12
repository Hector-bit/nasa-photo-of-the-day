import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";


export default function CardGrid() {
    const [spaceCard, setSpaceCard] = useState({});

    useEffect(() => {
        axios 
            .get('https://api.nasa.gov/planetary/apod?api_key=SUMQETBpXGEjrw20RdOmp6e2R0CqSbtCvMaLeQsw')

            .then(response => {
                const info = response.data;
                console.log('new data', info)
                setSpaceCard(info);
            })

            .catch(error => {
                console.log("did not get info", error);
            })
            },[]);

            return(
                <div>
                    {[spaceCard].map(item => {
                        console.log(Card)
                        return(
                            <Card 
                            copyright={item.copyright}
                            hdurl={item.id} 
                            hdurl={item.hdurl}
                            date={item.date}
                            explanation={item.explanation}/>
                        )
                    })}
                </div>
            )
}
