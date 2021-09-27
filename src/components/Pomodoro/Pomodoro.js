import React from 'react';
import Break from './components/Break';
import Controls from './components/Controls';
import Session from './components/Session';
import Timer from './components/Timer';
import { TimerProvider } from './TimerContext';
import './Pomodoro.scss';

export default function Pomodoro() {

    return (
        <main id="pomodoro">
            <section id="container">
                <div className="main-title">25 + 5 Clock</div>
                <TimerProvider>
                    <Break />
                    <Session />
                    <Timer />
                    <Controls />
                    <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                </TimerProvider>
            </section>
        </main >
    );
}