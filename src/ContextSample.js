import React, {createContext, useContext, useState} from 'react';
//Context.Api
//Context-API 사용

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent({text}){
    return <Child ></Child>
}

function GrandParent({text}){
    return <Parent ></Parent>
}

function ContextSample(){
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent text="GOOD"></GrandParent>
            <button onClick ={()=> setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    )
}

export default ContextSample;