import React, { Component } from 'react';

class Counter extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter : 0
    //     };
    // }

    state = {
        counter : 0,
        fixed : 1,
        updateMe: {
            toggleMe : false,
            dontChangeMe : 1
        }
    }


    handleIncrease = () => {
        // this.setState({
        //     counter : this.state.counter + 1 
        // })
        this.setState(state => ({
            counter : state.counter +1
        }))
    }

    handleDecrease = () => {
        this.setState({
            counter : this.state.counter - 1 
        })
    }

    handleToggle = () => {
        //setState --> 우리가 바꿔달라는 요청으로 되는 것.
        this.setState({
            updateMe : {
                toggleMe : !this.state.updateMe.toggleMe,
            }
        })
    }

    //render은 componet가 가지고 있는 함수다.
    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick = {this.handleIncrease}>+1</button>
                <button onClick = {this.handleDecrease}>-1</button>
                <p>고정 된 값 : {this.state.fixed}</p>
            </div>
        );
    }
}


// function reducer(state, action) {
//     switch(action.type) {
//         case 'INCREMENT' :
//             return state + 1;
//         case 'DECREMENT' :
//             return state - 1;
//         default :
//             throw new Error('UnhandledError');
//     }
// }

// function  Counter() {
//     /*
//     const [number, setNumber] = useState(0);
//     //넘버라는 상태를 만들어서 기본값을 0으로 만들고 setNumber로 바꿔주겠다. 배열구조, 비구조할당

//     const onIncrease = () => {
//         setNumber(prevNumber => prevNumber +1);
//         //최적화와 관련있는 것.
//     };

//     const onDecrease = () => {
//         setNumber(prevNumber => prevNumber -1);
//     };
//     */

//     const [number,dispatch] = useReducer(reducer,0);

//     const onIncrease = () => {
//         dispatch({
//             type : 'INCREMENT'
//         })
//     };

//     const onDecrease = () => {
//         dispatch({
//             type : 'DECREMENT'
//         })
//     };
    

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             {/* onIncrease()를하면 함수가 호출된다.*/}
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }



export default Counter;