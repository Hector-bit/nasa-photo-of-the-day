import React, { useState, useEffect } from "react";
import Card_Space from "./Card_Space";
import axios from "axios";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';


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
                        //console.log(Card_Space)
                        return(
                            <Card_Space 
                            copyright={item.title}
                            hdurl={item.hdurl}
                            date={item.date}
                            explanation={item.explanation}
                            />
                        )
                    })}
                </div>
            )
}
