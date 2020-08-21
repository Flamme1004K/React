import React,{ useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import produce from 'immer';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
//useCallback 바뀌면 함수를 실행하도록 한다.

//reducer : 상태를 업데이트하는 함수
//dispatch : 보내다

//useReducer와 useState의 사용은 상황에 따라서 반복이 필요할때는 Reducer를 사용한다. 간단한거면 useState사용

//yarn add immer
//immer
//immer를 사용하면 불변성을 해치는 코드를 작성해도 대신 불변설을 지켜준다.

function countActiveUsers(users) {
  console.log('활성사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}
const initialState = {
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
    case 'CREATE_USER' :
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   inputs : initialState.inputs,
      //   users : state.users.concat(action.user)
      // }
    case 'TOGGLE_USER' : 
      return produce(state, draft => {
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
      });
      //return {
      //  ...state,
      //  users : state.users.map(user => 
      //    user.id === action.id 
      //      ? {...user, active: !user.active}
      //      : user
      //  )
      //}
    case 'REMOVE_USER' : 
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index,1);
      });
      //return {
      //  ...state,
      //  users: state.users.filter(user => user.id !== action.id)
      //}
    default :
      throw new Error('Unhandled Acction');
  }
}

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username : '',
    email : ''
  });
  const  {username, email} = form;
  const nextId = useRef(4);
  const {users} = state;


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
    reset();
  }, [username, email, reset]);

  

  const count = useMemo (()=>countActiveUsers(users),[users]);

  return (
    <UserDispatch.Provider value = {dispatch}>
    <CreateUser username={username} email={email} onChange = {onChange} onCreate = {onCreate}/>
    <UserList users={users} />
    <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );  

  //props ==> Properties
}

export default App;
