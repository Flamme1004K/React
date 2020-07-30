import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
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
    ];
    return (<div>
                {
                    users.map(
                        user =>  (<User user={user} key={user.id}/>)
                    )
                }
    </div>);
    //key에다가 index를 넣어주는 것은 안좋다
    //리액트는 각 배열의 원소를 전부 랜더링 하고 있기 때문이다.
}

export default UserList;