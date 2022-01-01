import React, { Component, useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = () => {
    const [count, setCount] = useState(0)
    const spanRef = useRef()

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => { // componentDidMount , componentDidUpdate 를 결합한 기능..
        console.log(`mounted and update! : ${count}`);
    }, []) // <-- [count]를 인자로 추가해주면 count가 변경될 때맨 호출 , []빈 배열을 추가하면 처음에만 호출.
    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">Reading</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
}

export default SimpleHabit;
