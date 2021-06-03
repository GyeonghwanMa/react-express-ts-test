import React, { useState, useReducer } from 'react'

type Action = {type: "INCREASE"} | {type: "DECREASE"}; // a \ b => a 또는 b

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("UNHANDLES ACTION");
    }
}
export default function Counter() {
    // 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.
    // const [count, setCount] = useState<number>(0);
    const [count, dispatch] = useReducer(reducer, 0);

    // const onIncrease = () => setCount(count+1);
    // const onDecrease = () => setCount(count-1);
    const onIncrease = () => dispatch({type: "INCREASE"});
    const onDecrease = () => dispatch({type: "DECREASE"});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
