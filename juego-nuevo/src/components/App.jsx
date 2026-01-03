import Square from "./Square/Square"
import { useState } from "react"

const PIEZAS ={
    X : 'x',
    O : 'O'
}

/*
const board = Array(9).fill(null)
console.log(board)*/

function App() {


  /*le pasamos el estado inicial del tablero*/ 
  const [board, setBoard] = useState( Array(9).fill(null))
  const [turn, setTurn] = useState(PIEZAS.X)

  const updateBoard = () => {
    const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X

  } 

  console.log(turn)

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
                {index}
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
