import React, {useState, useRef} from 'react';

//돔을 직접 접근하기 위한 방법인 useRef라는 개념이 있다.

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickName : ''
    });
    const nameInput = useRef();
    const {name, nickName} = inputs;
    const onChange = (e) => {

        //1. e.target에서 name과 value를 추출한다.
        const  {name, value} = e.target;

        /*
        //객체복사
        const nextInputs = {
            ... inputs
        };
        */

        //2. name은 현재 name과 nickName이다. 그리고 value는 e.target.value이다.
        //객체 상태를 업데이트할때 꼭 불변성을 지켜줘야하기때문에 스프레드 문법으로 객체를 복사를 해야한다.
        setInputs({
            ... inputs,
            [name] : value
        });
    };
    const onReset = () => {
        setInputs({
            name : '',
            nickName : ''
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b> 값 : </b>
                {name}({nickName})
            </div>
        </div>
    );
}

export default InputSample;