import React from 'react';

function User({user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick={()=> onRemove(id)}>삭제</button>
            {/* <button onClick={onRemove(id)}>삭제</button>  <- 이렇게하면 랜더링 되는 즉시 반영된다*/}
        </div>
    );
}

function UserList({users, onRemove}){
    
    return (<div>
                {
                    users.map(
                        user =>  (<User user={user} key={user.id} onRemove={onRemove}/>)
                    )
                }
    </div>);
    //key에다가 index를 넣어주는 것은 안좋다
    //리액트는 각 배열의 원소를 전부 랜더링 하고 있기 때문이다.
}

export default UserList;