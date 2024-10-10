import React, { useRef, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({progressPercent}) => {
    const inputRef = useRef(null);
    const [input, setInput]=useState(0);
    const [isEdit, setIsEdit] = useState(false);

    const handleInput=(e)=>{
        // inputRef.current.addEventListener('input', ()=>{
        //     const value = parseInt(inputRef.current.value);
        //     if(value<0){
        //         setInput(0)
        //     } else if(value>100){
        //         setInput(100)
        //     }
        // })
        inputRef.current.addEventListener("keydown", function(event) {
            if (["ArrowUp", "ArrowDown"].indexOf(event.key) === -1) {
                event.preventDefault();
            }
        });
        setInput(e.target.value)
    }
    
    const enableInputF=()=>{
        inputRef.current.disabled=false;
        inputRef.current.focus();
        setIsEdit(true)
    }
    const disableInput=()=>{
        inputRef.current.disabled=true;
        inputRef.current.style.backgroundColor='transparent';
        setIsEdit(false)
    }
  return (
    <div className='ProgressBar'>
        <div className="title">
            {/* <p>Task To do app.</p>
            <input ref={inputRef} type="number" id='percent' value={input} onChange={handleInput}  min="0" max="100" disabled readonly/>
            %
            
            {
                isEdit && 
                <button onClick={disableInput}>Ok</button> 
            }
            <div className="edit"><i class="fa-solid fa-pen" onClick={enableInputF}></i></div> */}
        </div>
        <div className="bar">
            <div className="barHighlight"
                style={{width:`${progressPercent}%`}}
            ></div>
        </div>
        {/* <h1>{input}</h1> */}
    </div>
  )
}

export default ProgressBar