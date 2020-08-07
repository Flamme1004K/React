import React,{ useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import Counter from './Counter';
//useCallback 바뀌면 함수를 실행하도록 한다.

//reducer : 상태를 업데이트하는 함수
//dispatch : 보내다

function countActiveUsers(users) {
  console.log('활성사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;

  const [users, setUsers] = useState([
    {
        id : 1,
        username : 'test1',
        email : 'test1@example.com',
        active : true 
    },
    {
        id : 2,
        username : 'test2',
        email : 'test2@example.com',
        active : false
    },
    {
        id : 3,
        username : 'test3',
        email : 'test3@example.com',
        active : false
    }
  ]);
  
  const nextId = useRef(4);
  // useRef의 기본값을 4로 만든다.
  // nextId.current --> 현재 기본값
  // nextId.current += 1; --> 1+ 
  // 기본값을 넣어버리면 리랜더링해도 그 값은 유지 된다.
  
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
      //...inputs
    }

    //setUsers([...users, user]);
    setUsers(users => users.concat(user));

    setInputs({
      username : '',
      email : ''
    });
    nextId.current += 1;
  },[username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
    //파라미터와 일치하지 않는것들만 추출하겟다.
  },[]);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user =>  user.id === id 
        ? {...user, active : !user.active}
        : user
    ))
  }, []);

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  },[inputs]);
 
  const count = useMemo(() =>countActiveUsers(users), [users]); //컴포넌트 최적화



  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수 : {count}</div>
    </>
  );  

  //props ==> Properties
}

export default App;
