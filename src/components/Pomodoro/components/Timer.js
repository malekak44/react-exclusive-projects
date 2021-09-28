import React from 'react';
import useClockify from '../clockify';
import { useTimerContext } from '../TimerContext';

export default function Timer() {
    const { timerLabel } = useTimerContext();
    const clockifiedValue = useClockify();

    return (
        <div className="timer" style={{ color: "white" }}>
            <div className="timer-wrapper">
                <div id="timer-label">{timerLabel}</div>
                <div id="time-left">{clockifiedValue}</div>
            </div>
        </div>
    )
}