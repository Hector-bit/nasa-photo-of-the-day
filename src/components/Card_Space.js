import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink
  } from 'reactstrap';

const Card_Space = props => {
    return(
        <div>
        <Card className="firstCard">
          <CardBody>
            <CardTitle>{props.copyright}</CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
          <img className="space_image" width="100%" src={props.hdurl} alt="Card image cap" />
          <CardBody>
            <CardText>Discription: {props.explanation}</CardText>
          </CardBody>
        </Card>
      </div>
    )
}


export default Card_Space;