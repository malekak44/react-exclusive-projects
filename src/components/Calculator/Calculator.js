import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
    const [output, setOutput] = useState('');

    const handleClick = (e) => {
        setOutput(output.concat(e.target.value));
    }

    const clear = () => {
        setOutput('');
    }

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setOutput(eval(output).toString());
        } catch (error) {
            setOutput("Error");
        }
    }

    return (
        <main id="calculator-wrapper">
            <div className="calculator">
                <div className="formulaScreen"></div>
                <div className="outputScreen">{output || 0}</div>
                <div>
                    <button className="jumbo ac-btn" onClick={clear} value="AC">AC</button>
                    <button onClick={handleClick} value="/" className="action-btn">/</button>
                    <button onClick={handleClick} value="*" className="action-btn">x</button>
                    <button onClick={handleClick} value="7">7</button>
                    <button onClick={handleClick} value="8">8</button>
                    <button onClick={handleClick} value="9">9</button>
                    <button onClick={handleClick} value="-" className="action-btn">‑</button>
                    <button onClick={handleClick} value="4">4</button>
                    <button onClick={handleClick} value="5">5</button>
                    <button onClick={handleClick} value="6">6</button>
                    <button onClick={handleClick} value="+" className="action-btn">+</button>
                    <button onClick={handleClick} value="1">1</button>
                    <button onClick={handleClick} value="2">2</button>
                    <button onClick={handleClick} value="3">3</button>
                    <button onClick={handleClick} className="jumbo" value="0">0</button>
                    <button onClick={handleClick} value=".">.</button>
                    <button onClick={calculate} value="=" className="equal-btn">=</button>
                </div>
            </div>
        </main>
    );
};

export default Calculator;