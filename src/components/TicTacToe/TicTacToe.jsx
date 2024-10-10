import React, { useEffect, useRef, useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const refs = useRef([]);
    const allChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [mark, setMark] = useState('X');
    const winPattern = [
        [1,2,3],
        [1,4,7],
        [1,5,9],
        [2,5,8],
        [3,5,7],
        [3,6,9],
        [4,5,6],
        [7,8,9]
    ]
    const [checkPatternX, setCheckPatternX] = useState([]);
    const [checkPatternO, setCheckPatternO] = useState([]);
    const [whoWins, setWhoWins]=useState("Game Over");
    const [isGameOver, setIsGameOver]=useState(false);
    const [showAlert, setShowAlert]=useState(false);
    // const [Xwins, setXwins]=useState(false);


    const handleMarkF=(e, index)=>{
        e.target.innerText = mark;
        console.log(mark, index);
        if(mark==='X'){
            setMark('O');
            e.target.style.color='black';
        } else if(mark==='O'){
            setMark('X');
            e.target.style.color='white';
        }
        // mark === 'X' ? setMark('O') : setMark('X');
        if(mark==='O'){
            checkPatternO.push(index);
        }
        if(mark==='X'){
            checkPatternX.push(index);
        }
        console.log("x:"+checkPatternX, "O:"+checkPatternO)
        winPattern.forEach((pattern)=>{
            const doesOwins = pattern.every(element=>checkPatternO.includes(element));
            const doesXwins = pattern.every(element=>checkPatternX.includes(element));
            if(doesOwins){
                setWhoWins('O Wins');
                setIsGameOver(true);
                setShowAlert(true);
            }
            if(doesXwins){
                setWhoWins('X Wins');
                setIsGameOver(true);
                setShowAlert(true);
            }
        })
    }

    refs.current.forEach((box)=>{
        if(box.innerText === 'O' || box.innerText=== 'X' || isGameOver===true){
            box.style.pointerEvents='none'
        } else{
            box.style.pointerEvents='unset'
        }
    })

    function gameOverF(){
            setShowAlert(true);
            setIsGameOver(true);
    }
    useEffect(() => {
        if (checkPatternO.length + checkPatternX.length === 9) { 
            gameOverF();
        }
    }, [mark]);
    const replyF=()=>{
        refs.current.forEach(box=>box.innerText='')
        setIsGameOver(false);
        setShowAlert(false);
        setCheckPatternO([]);
        setCheckPatternX([]);
        setWhoWins('Game Over')
        console.log('play again')
    }
    // winPattern.forEach((pattern)=>{
    //     const isIncluded = pattern.every(element=>[1,4,5,6,3,2,5].includes(element));
    //     console.log(isIncluded);
    // })
    return (
        <div className='TicTacToe'>
            <div className="boxesContainer">
                {
                    allChoices.map((box, index) => {
                        return (
                            <div ref={(el) => (refs.current[index] = el)} className={`box${index+1} choice ${isGameOver && 'nonClickable'} `} 
                                onClick={(e)=>handleMarkF(e,index+1)}
                                >
                                
                            </div>
                        )
                    })
                }
            </div>
            {
                showAlert &&
                <div className="winAlertContainer">
                    <div className="winAlert">
                        {whoWins}
                        <button onClick={replyF}>Play Again</button>
                        <div className="close" onClick={()=>setShowAlert(false)}>x</div>
                    </div>
                </div>
            }
            
            
            <button onClick={replyF}>Play Again</button>
            
        </div>
    )
}

export default TicTacToe