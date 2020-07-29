import React, {useState} from 'react';

function  Counter() {
    const [number, setNumber] = useState(0);
    //넘버라는 상태를 만들어서 기본값을 0으로 만들고 setNumber로 바꿔주겠다. 배열구조, 비구조할당

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber +1);
        //최적화와 관련있는 것.
    };

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber -1);
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