import React from "react"; //리엑트를 불러와서 사용하겠다.

function Hello({color, name, isSpecial}) {
    //객체 분해를 해서 비구조 할당을 할 수 있다.
    
return <div style={{
        color}}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요. {name}</div>;
}

Hello.defaultProps = {
    name : "이름없음"
};
//조건부 렌더링
//특정값을 빠트렸을때 기본적으로 들어가는 값.

export default Hello;
 