import React from 'react';
import Hello from  './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter'; //useState사용
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
 
  return (
    <>
    <InputSample />
    <Counter />
    <Wrapper>
      <Hello name ="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper> 
    <UserList/>
    </>
  );  

  //props ==> Properties
}

export default App;
