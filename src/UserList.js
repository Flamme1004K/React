import React,{useEffect, useContext} from 'react';
import {UserDispatch} from './App'

/*
//컴포넌트 나타난다는게 마운트이다.
//삭제하여 없어지는 것이 언마운트이다.

useEffect(()=> {
        
        console.log('컴포넌트가 화면에 나타남.');
        //props -> state
        //REST-API
        //LIBRARY
        //SET INTERVAL
        // --> UI가 화면에 나타나는 경우
        return ()=>{
            // clearInterval
            // clearTimeout
            // 라이브러리 삭제 기능
            // 뒷정리함수
            console.log('컴포넌트가 화면에서 사라짐');
            
        } 
        
    }, [])

*/



const User = React.memo(function User({user}) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);
    useEffect(()=> {
        console.log('user 값이 설정됨')
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전')
            console.log(user)
        }
    }, [user]);
    // 1. 함수 2. deps 등록(필수) --> 비우면 처음 나타날때만 호출 3. return은 뒷정리 함수 이다.
    //useEffect를 사용하면 deps에 넣은 해당 값이 바뀔 때마다 실행된다.
    //처음 나타날때도 실행이 된다.
    //리액트에서는 부모 컴포넌트라 렌더링되면 자식 컴포넌트도 렌더링 된다.
    //페이지 렌더링 일때도 사용한다.
    return (
        <div>
            <b style={{
                color : active ? 'green' : 'black',
                cursor : 'pointer'
            }}
            onClick={() => dispatch({
                type: 'TOGGLE_USER', id
                })}>
            &nbsp;
                {username}</b> <span>({email})</span>
            <button onClick={()=> dispatch({type: 'REMOVE_USER', id})}>삭제</button>
            {/* <button onClick={onRemove(id)}>삭제</button>  <- 이렇게하면 랜더링 되는 즉시 반영된다*/}
        </div>
    );
});

function UserList({users}){
    
    return (<div>
                {
                    users.map(
                        user =>  (<User user={user} key={user.id} />)
                    )
                }
    </div>);
    //key에다가 index를 넣어주는 것은 안좋다
    //리액트는 각 배열의 원소를 전부 랜더링 하고 있기 때문이다.
}

export default React.memo(UserList, (prevProps, nextProps)=> nextProps.users === prevProps.users );