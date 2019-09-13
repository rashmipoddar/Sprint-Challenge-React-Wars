import React from 'react';
import { Card, CardHeader, CardBody,CardTitle, CardText, Col } from 'reactstrap';
  


const Character = (props) => {
  return (
    <Col xs="6" key={props.key}>
      <Card className="text-center" >
      <CardHeader style={{ backgroundColor: "#e9cda4" }}>Name: {props.name}</CardHeader>
      <CardBody style={{ backgroundColor: "#eb9171" }}>
        <CardTitle>Birth Year: {props.birthYear}</CardTitle>
        <CardTitle>Height: {props.height}</CardTitle>
        <CardTitle>Mass: {props.mass}</CardTitle>
        <CardText>Acted in {props.name} films</CardText>   
      </CardBody>
      </Card>
    </Col>
  )
}

export default Character;

