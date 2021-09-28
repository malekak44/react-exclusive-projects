import React, { useRef, useEffect } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { useTimerContext } from '../TimerContext';

export default function Controls() {
    const { state, timerValue, timerLabel, isPaused, playPause, resetAll, startTimer, toggleTimerLabel } = useTimerContext();
    const audioRef = useRef();

    const handleReset = () => {
        resetAll();
        audioRef.current.pause();
        audioRef.current.time = 0;
    }

    const handleCount = () => {
        startTimer(state.timerValue - 1);

        if (timerValue === 0) audioRef.current.play();
        if (timerValue < 1) {
            if (timerLabel === 'Session') {
                toggleTimerLabel('Break');
                startTimer((state.breakValue * 60) - 1);
            } else {
                toggleTimerLabel('Session');
                startTimer((state.sessionValue * 60) - 1);
            }
        }
    }

    useEffect(() => {
        if (!isPaused) {
            let timerInterval = setInterval(() => {
                handleCount();
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    });

    return (
        <div className="timer-control">
            <button id="start_stop" onClick={playPause}>
                {isPaused ? <FaPlay /> : <FaPause />}
            </button>
            <button id="reset" onClick={handleReset}>
                <MdRefresh style={{ fontSize: "26px" }} />
            </button>
            <audio id="beep" ref={audioRef} preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}