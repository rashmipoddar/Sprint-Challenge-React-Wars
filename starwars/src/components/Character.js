import React from "react";
import { Card, CardHeader, CardBody,CardTitle, CardText, Col } from "reactstrap";
  


const Character = (props) => {
  return (
    <Col xs="6" >
      <Card className="text-center" >
      <CardHeader style={{ backgroundColor: "rgb(206, 168, 111)" }}>Name: {props.name}</CardHeader>
      <CardBody style={{ backgroundColor: "rgb(250, 224, 215)" }}>
        <CardTitle>Birth Year: {props.birthYear}</CardTitle>
        <CardTitle>Height: {props.height}</CardTitle>
        <CardTitle>Mass: {props.mass}</CardTitle>
        <CardText>Acted in {props.films} film(s)</CardText>   
      </CardBody>
      </Card>
    </Col>
  )
}

export default Character;

