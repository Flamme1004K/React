import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
            throw new Error('UnhandledError');
    }
}

function  Counter() {
    /*
    const [number, setNumber] = useState(0);
    //넘버라는 상태를 만들어서 기본값을 0으로 만들고 setNumber로 바꿔주겠다. 배열구조, 비구조할당

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber +1);
        //최적화와 관련있는 것.
    };

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber -1);
    };
    */

    const [number,dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({
            type : 'INCREMENT'
        })
    };

    const onDecrease = () => {
        dispatch({
            type : 'DECREMENT'
        })
    };
    

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            {/* onIncrease()를하면 함수가 호출된다.*/}
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}


export default Counter;