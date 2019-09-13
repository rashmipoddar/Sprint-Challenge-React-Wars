import React from 'react';
import { Card, CardHeader, CardBody,CardTitle, CardText, Col } from 'reactstrap';
  


const Character = (props) => {
  return (
    <Col xs="3" key={props.key}>
      <Card>
      <CardHeader>Name: {props.name}</CardHeader>
      <CardBody>
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

