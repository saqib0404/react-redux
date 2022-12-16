import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/CounterAction';

const Counter = () => {
    const count = useSelector(store => store.count);
    const dispatch = useDispatch();

    // const handleIncrement = () => {
    //     dispatch(incrementCounter())
    // }

    return (
        <div>
            <h2>This is Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(incrementCounter())}>+</button> &nbsp;
            <button onClick={() => dispatch(decrementCounter())}>-</button> &nbsp;
            <button onClick={() => dispatch(resetCounter())}>reset</button>
        </div>
    );
};

export default Counter;