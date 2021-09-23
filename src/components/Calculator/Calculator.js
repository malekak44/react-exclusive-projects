import React, { useState, useRef, useEffect } from 'react';
import './Calculator.scss';

const Calculator = () => {
    // const [operator, setOperator] = useState('');
    const [output, setOutput] = useState(0);
    const buttonsRef = useRef();

    useEffect(() => {

    }, []);

    return (
        <main id="calculator-wrapper">
            <div className="calculator">
                <div className="formulaScreen"></div>
                <div className="outputScreen" id="display">{output}</div>
                <div ref={buttonsRef}>
                    <button className="jumbo ac-btn" id="clear" value="AC">AC</button>
                    <button id="divide" value="/" className="action-btn">/</button>
                    <button id="multiply" value="x" className="action-btn">x</button>
                    <button id="seven" value="7">7</button>
                    <button id="eight" value="8">8</button>
                    <button id="nine" value="9">9</button>
                    <button id="subtract" value="‑" className="action-btn">‑</button>
                    <button id="four" value="4">4</button>
                    <button id="five" value="5">5</button>
                    <button id="six" value="6">6</button>
                    <button id="add" value="+" className="action-btn">+</button>
                    <button id="one" value="1">1</button>
                    <button id="two" value="2">2</button>
                    <button id="three" value="3">3</button>
                    <button className="jumbo" id="zero" value="0">0</button>
                    <button id="decimal" value=".">.</button>
                    <button id="equals" value="=" className="equal-btn">=</button>
                </div>
            </div>
        </main>
    );
};

export default Calculator;