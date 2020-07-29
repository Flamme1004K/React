import React from 'react';
import Hello from  './Hello';
import './App.css';

function App() {
  const name = 'react';

  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '1rem'
  }
  //style는 객체로 만들어서 넣어야한다.

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div> {/*클래스 대신 클래스네임으로 써야한다.*/}
    </> // 플래그먼트 
    
  ); //가로는 가독성을 위해서 쓰는 것이다.
}

export default App;
