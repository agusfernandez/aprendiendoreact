  import { WINNER_COMBOS  } from "../constants/constants"
  
  
  export const checkWinner = (boardToCheck) => {
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



  /*Chequear si hay empate */
  export const checkTide = (newBoard) => {
    //chequear si todas las posiciones del tablero estan llenas
    return newBoard.every( (square) => square !== null)
  }