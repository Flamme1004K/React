import React,{ useRef, useState } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const [users, setUsers] = useState([
    {
        id : 1,
        username : 'test1',
        email : 'test1@example.com'
    },
    {
        id : 2,
        username : 'test2',
        email : 'test2@example.com'
    },
    {
        id : 3,
        username : 'test3',
        email : 'test3@example.com'
    }
  ]);
  
  const nextId = useRef(4);
  // useRef의 기본값을 4로 만든다.
  // nextId.current --> 현재 기본값
  // nextId.current += 1; --> 1+ 
  // 기본값을 넣어버리면 리랜더링해도 그 값은 유지 된다.
  
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
      //...inputs
    }

    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username : '',
      email : ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
    //파라미터와 일치하지 않는것들만 추출하겟다.
  }
 
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove}/>
    </>
  );  

  //props ==> Properties
}

export default App;
