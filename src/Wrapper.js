import React from 'react';

//태그 안에있는 태그들을 Children이라고 정의한다.
function Wrapper( {children} ){
    const style = {
        border : "2px solid black",
        padding : 16
    };

    return <div style={style}>{children}</div>
}

export default Wrapper;