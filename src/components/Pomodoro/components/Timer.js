import React from 'react';
import { useTimerContext } from '../TimerContext';

export default function Timer() {
    const { sessionValue } = useTimerContext();

    return (
        <div className="timer" style={{ color: "white" }}>
            <div className="timer-wrapper">
                <div id="timer-label">Session</div>
                <div id="time-left">{sessionValue}:00</div>
            </div>
        </div>
    )
}