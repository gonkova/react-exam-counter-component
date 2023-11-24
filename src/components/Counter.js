import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [counterClassColor, setCounterClassColor] = useState('');

    return (
        <>
            <div className='counter-text'>
                Counter: <span className={counterClassColor}>{counter}</span>
            </div>
            <div className='container-btn'>
                <button
                    className='btn-plus'
                    onClick={() => {
                        setCounter(counter + 1);
                        setCounterClassColor('plus');
                    }}
                >
                    <i class="fa-solid fa-plus"></i>
                </button>
                <button
                    className='btn-minus'
                    onClick={() => {
                        setCounter(counter - 1);
                        setCounterClassColor('minus');
                    }}
                >
                    <i class="fa-solid fa-minus"></i>
                </button>
                <button
                    className='btn-reset'
                    onClick={() => {
                        setCounter(0);
                        setCounterClassColor('');
                    }}
                >
                    <i class="fa-solid fa-rotate-left"></i>
                </button>
            </div>
        </>
    );
}