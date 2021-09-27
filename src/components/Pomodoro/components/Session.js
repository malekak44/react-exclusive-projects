import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useTimerContext } from '../TimerContext';

export default function Session() {
    const { increaseValue, decreaseValue, sessionValue } = useTimerContext();

    return (
        <div className="length-control">
            <div id="session-label">Session Length</div>
            <button className="btn-level" id="session-decrement" value="-"
                onClick={() => decreaseValue("session")}>
                <FaArrowDown />
            </button>
            <div className="btn-level" id="session-length">{sessionValue}</div>
            <button className="btn-level" id="session-increment" value="+"
                onClick={() => increaseValue("session")}>
                <FaArrowUp />
            </button>
        </div>
    )
}