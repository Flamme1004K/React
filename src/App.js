import React,{ useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
//useCallback 바뀌면 함수를 실행하도록 한다.

//reducer : 상태를 업데이트하는 함수
//dispatch : 보내다

//useReducer와 useState의 사용은 상황에 따라서 반복이 필요할때는 Reducer를 사용한다. 간단한거면 useState사용

function countActiveUsers(users) {
  console.log('활성사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}
const initialState = {
  inputs : {
    username : '',
    email : ''
  },
  users : [
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
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT' : 
      return {
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER' :
      return {
        inputs : initialState.inputs,
        users : state.users.concat(action.user)
      }
    case 'TOGGLE_USER' : 
      return {
        ...state,
        users : state.users.map(user => 
          user.id === action.id 
            ? {...user, active: !user.active}
            : user
        )
      }
    case 'REMOVE_USER' : 
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default :
      throw new Error('Unhandled Acction');
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const {users} = state;
  const {username, email} = state.inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    })
  },[]);

  const onCreate = useCallback(e => {
    dispatch({
      type : 'CREATE_USER',
      user : {
        id : nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type : 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type : 'REMOVE_USER',
      id
    })
  }, []);

  const count = useMemo (()=>countActiveUsers(users),[users]);

  return (
    <>
    <CreateUser username={username} email={email} onChange = {onChange} onCreate = {onCreate}/>
    <UserList users={users} onToggle ={onToggle} onRemove = {onRemove} />
    <div>활성 사용자 수 : {count}</div>
    </>
  );  

  //props ==> Properties
}

export default App;
