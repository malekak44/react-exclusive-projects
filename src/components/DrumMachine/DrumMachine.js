import React, { useState, useEffect } from 'react';
import './DrumMachine.scss';
import { FaFreeCodeCamp } from 'react-icons/fa';
import sounds from './data';

const DrumMachine = () => {
    const [volume, setVolume] = useState("30");
    const [display, setDisplay] = useState('');
    const [power, setPower] = useState(true);
    const [bank, setBank] = useState(true);

    const activatePad = (id) => {
        const pad = document.getElementById(id);
        pad.classList.remove("inactive");
        pad.classList.add("active");
        setTimeout(() => {
            pad.classList.remove("active");
            pad.classList.add("inactive");
        }, 100);

        if (power) {
            pad.style.backgroundColor = "orange";
            pad.style.boxShadow = "0 3px orange";
            setTimeout(() => {
                pad.style.backgroundColor = "grey";
                pad.style.boxShadow = "3px 3px 5px black";
            }, 100);
        }
    }

    const playAudio = (audioId, padId) => {
        if (power) {
            const sound = document.getElementById(audioId);
            sound.currentTime = 0;
            sound.play();
            setDisplay(padId);
        }
        activatePad(padId);
    }

    const changeVolume = (e) => {
        if (power) {
            setVolume(e.target.value);
            setDisplay(`Volume: ${e.target.value}`);
            setTimeout(() => {
                setDisplay('');
            }, 1000);
        }
    }

    const changeBank = () => {
        if (power) {
            setBank(!bank);
            bank ? setDisplay("Heater Kit") : setDisplay("Smooth Piano Kit");
        }
    }

    useEffect(() => {
        const clickEvent = document.addEventListener("keydown", (e) => {
            const singleKey = sounds.filter(sd => {
                if (sd.key === e.key.toUpperCase()) {
                    const sound = document.getElementById(sd.key);
                    const pad = document.getElementById(sd.id);

                    if (power) {
                        sound.currentTime = 0;
                        sound.play();
                        setDisplay(sd.id);

                        pad.style.backgroundColor = "orange";
                        pad.style.boxShadow = "0 3px orange";
                        setTimeout(() => {
                            pad.style.backgroundColor = "grey";
                            pad.style.boxShadow = "3px 3px 5px black";
                        }, 100);
                    } else {
                        pad.classList.remove("inactive");
                        pad.classList.add("active");
                        setTimeout(() => {
                            pad.classList.remove("active");
                            pad.classList.add("inactive");
                        }, 100);
                    }
                }
                return "S";
            });

           return singleKey;
        });
        return () => {
            document.removeEventListener("keydown", clickEvent);
        }
    }, [power]);

    return (
        <main id="drum-machine-wrapper">
            <div className="inner-container" id="drum-machine">
                <div className="pad-bank">
                    {sounds.map(sound => <div key={sound.id} className="drum-pad inactive" id={sound.id} onClick={() => playAudio(sound.key, sound.id)}>
                        <audio className="clip" id={sound.key} src={power ? sound.mp3 : '#'}></audio>
                        {sound.key}
                    </div>)}
                </div>
                <div className="logo">
                    <div className="inner-logo">FCC&nbsp;<FaFreeCodeCamp style={{ fontSize: "24px" }} /></div>
                </div>
                <div className="controls-container">
                    <div className="control">
                        <p>Power</p>
                        <div className="select" onClick={()=>setPower(!power)}>
                            <div className="inner" style={{ float: `${power ? "right" : "left"}` }}></div>
                        </div>
                    </div>
                    <p id="display">&nbsp;{display}</p>
                    <div className="volume-slider">
                        <input type="range" step="1" min="0" max="100" value={volume} onChange={changeVolume} />
                    </div>
                    <div className="control">
                        <p>Bank</p>
                        <div className="select" onClick={changeBank}>
                            <div className="inner" style={{ float: `${bank ? "right" : "left"}` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DrumMachine;