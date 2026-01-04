import { useState } from "react"
import confetti from "canvas-confetti"
import { PIEZAS } from "../constants/constants"
import WinnerModal from "./WinnerModal/WinnerModal"
import { checkWinner, checkTide } from "../logic/logic"
import Table from "./Table/Table"
import Turn from "./Turn/Turn"
import ResetGame from "./ResetGame/ResetGame"

function App() {
  /*le pasamos el estado inicial del tablero*/ 
  const [board, setBoard] = useState( () => {
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(PIEZAS.X)
  const [winner, setWinner] = useState(null) /*null es que no hay ganador, false es que hay empate*/
  


  const updateBoard = (index) => {
    if(board[index] || winner) return /*si ya hay algo en esa posicion, no hacer nada*/

    /*ACTUALIZAR EL BORD */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    /*CAMBIAR EL TURNO */
    const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X
    setTurn(newTurn)

    /*GUARDAR LA PARTIDA */
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    /*REVISAR SI HAY GANADOR */
    const newWinner = checkWinner(newBoard) 
    if (newWinner){
        confetti()
        setWinner(newWinner)  
    } else if (checkTide(newBoard)){
        setWinner(false) /*empate*/ 
    }
  }

  // funcion para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(PIEZAS.X)
    setWinner(null)
  }

  return (
    <>
      <main className="board">
        <h2>TA-TE-TI</h2>
        <Table board={board} updateBoard={updateBoard}/>
        <Turn turn={turn}/>
        <WinnerModal winner={winner} resetGame={resetGame}/>
        <ResetGame resetGame={resetGame}/>
      </main>
    </>
  )
}

export default App
