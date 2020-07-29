import React from 'react';
import Hello from  './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter'; //useState사용
import InputSample from './InputSample';

function App() {
 
  return (
    <>
    <InputSample />
    <Counter />
    <Wrapper>
      <Hello name ="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper> 
    </>
  );  

  //props ==> Properties
}

export default App;
