import React from 'react';

function CreateUser ({username, email, onChange, onCreate}) {
    return (
        <div>
            <input name = "username" placeholder="계정명" onChange = {onChange} value={username}/>
            <input name = "email" placeholder="이메일" onChange = {onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
//React.memo란?
//프록스가 바겼을 때만 값이 반영된다.