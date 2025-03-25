import { Square } from "./Square";
import { useEffect, useState } from "react";
import { checkWinningLines } from "./TickTackToe";

export function Board({gridSize}){
    const [squares, setSquares] = useState(Array(gridSize ** 2).fill(null));

    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    useEffect(()=> {setSquares(Array(gridSize ** 2).fill(null))}, [gridSize])

    function handleSquareClick(index) {
        setSquares((currentSquares) => {
            const newSquares = [...currentSquares]
            squares [index] = currentPlayer;
            return newSquares;
        })
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        setWinner(()=> {return checkWinningLines(gridSize, squares)})
    }

    function handleGameRestart(){
        setSquares(Array(gridSize ** 2).fill(null))
        setCurrentPlayer("X")
        setWinner(()=> {return null})
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                display: `grid`,
                gridTemplateColumns: `repeat(${gridSize}, 60px)`,
                gap: `5px`
            }}>
                {squares.map((square, i) =>
                <Square key={i} value={square} onSquareClick={() => handleSquareClick(i)}/>
                )}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <p>Winner IS: {winner}</p>
                <button onClick={() => handleGameRestart()} >Reset</button>
            </div>
        </div>
    )   
}