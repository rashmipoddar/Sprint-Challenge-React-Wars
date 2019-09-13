import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap'; 
import styled from 'styled-components';

import Character from './components/Character';
import backgroundImage from './sw-bg.jpg';

const WrapperDiv = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const WrapperHeader = styled.h1`
  text-align: center;
  padding: 10px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ chars, setChars ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/') 
      .then(response => {
        console.log('Api response is ', response);
        setChars(response.data.results);
      })
      .catch(error => {
        console.log('Error in getting data ', error);
      })
  }, [])

  return (
    
    <WrapperDiv>
      <WrapperHeader>Star War Characters</WrapperHeader>
      <Container>
        <Row>
          {chars.map((char, index) => {
          return (
            <Character 
              key={index}
              name={char.name}
              birthYear={char.birth_year}
              height={char.height}
              mass={char.mass}
              films={char.films.length}
            />
          );
          })}
        </Row>
      </Container>
    </WrapperDiv>
  );
}

export default App;
