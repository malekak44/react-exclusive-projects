import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { useTimerContext } from '../TimerContext';

export default function Controls() {
    const { isPaused, playPause, resetAll } = useTimerContext();

    return (
        <div className="timer-control">
            <button id="start_stop" onClick={playPause}>
                {isPaused ? <FaPlay /> : <FaPause />}
            </button>
            <button id="reset" onClick={resetAll}>
                <MdRefresh style={{ fontSize: "26px" }} />
            </button>
        </div>
    )
}