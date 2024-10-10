import React, { useRef, useState } from 'react'
import './Calculator.css'
import { calcButtons } from './CalculatorData'

const Calculator = () => {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const [answer, setAnswer] = useState('');

    const handleBtn = (val) => {
        setInput(input + val)
        inputRef.current.focus();
        console.log(input)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="CalculatorContainer">
            <div className='Calculator'>
                <div className="inputArea">
                    <div className="input">
                        <input ref={inputRef} value={input} onChange={handleInput} type="text" />
                    </div>
                    <div className="result" onClick={() => setInput(answer)}>{answer}</div>
                </div>
                <div className="buttonArea">
                    {
                        calcButtons.map((btn, index) => {
                            if (btn.sign === '=') {
                                return <button key={index} id={btn.function} onClick={() => { setAnswer(eval(input)); inputRef.current.focus(); }} >{btn.sign}</button>
                            }
                            if (btn.sign === 'AC') {
                                return <button key={index} id={btn.function} onClick={() => { setAnswer(''); setInput(''); inputRef.current.focus(); }} >{btn.sign}</button>
                            }
                            if (btn.sign === 'Del') {
                                return <button key={index} id={btn.function} onClick={() => { setInput(input.slice(0, -1)); inputRef.current.focus(); }} >{btn.sign}</button>
                            }
                            return <button key={index} id={btn.function} onClick={() => { setInput(input + btn.sign); inputRef.current.focus(); }} >{btn.sign}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator