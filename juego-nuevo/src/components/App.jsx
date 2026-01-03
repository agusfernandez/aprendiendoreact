import Square from "./Square/Square"
import { useState } from "react"

const PIEZAS ={
    X : 'x',
    O : 'o'
}

const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

/*
const board = Array(9).fill(null)
console.log(board)*/

function App() {


  /*le pasamos el estado inicial del tablero*/ 
  const [board, setBoard] = useState( Array(9).fill(null))
  const [turn, setTurn] = useState(PIEZAS.X)
  const [winner, setWinner] = useState(null) /*null es que no hay ganador, false es que hay empate*/

  const checkWinner = (boardToCheck) => {
    /*revisar todas las combinaciones ganadoras*/
    /*no pasar el estado board porq no tengo el estado nuevo */
    for (const combo of WINNER_COMBOS){
        const [a,b,c] = combo
        if(
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ){
            return boardToCheck[a]
        }
  }
    /*si no hay ganador*/
    return null
  }
  
  const updateBoard = (index) => {
    if(board[index] || winner) return /*si ya hay algo en esa posicion, no hacer nada*/

    /*ACTUALIZAR EL BORD */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    /*CAMBIAR EL TURNO */
    const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X
    setTurn(newTurn)

    /*REVISAR SI HAY GANADOR */
    const newWinner = checkWinner(newBoard) 
    if (newWinner){
        setWinner(newWinner)  
    } else if (!newBoard.includes(null)){
        setWinner(false) /*empate*/ 
    }
  }

  return (
    <>
      <main className="board">
        <h2>TA-TE-TI</h2>
        <section className="game">
          {
            board.map((_, index) => {
            console.log('board' +index)
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
               
                {board[index]}
              </Square>
            )
        })
        }

        </section>
        <section className="turn">
          <Square isSelected={turn === PIEZAS.X}>
            {PIEZAS.X}
          </Square>
          <Square isSelected={turn === PIEZAS.O}>
            {PIEZAS.O}
          </Square>
        </section>
      </main>
    </>
  )
}

export default App
