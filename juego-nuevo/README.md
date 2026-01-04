## Juego
1) crear las piezas 
2) dibujar el tablero -> va a ser un array de 9 posiciones y lo vamos a rellenar en primer lugar con un null
const board = Array(9).fill(null)
3) armado de la section para tener el tableto 
se hara un map para recorrer el array y le vamos a poner el indice que sea lo que querramos rendirizar

       {board.map((_, index) => (
            <div key={index} className="cell">
              {index}
            </div>
          ))
          }


Imaginá que board es una lista (array), por ejemplo:
const board = [null, null, null];

- board.map(...)
map recorre la lista y hace algo por cada elemento. En React, se usa mucho para dibujar cosas en pantalla.

- (_, index)
_ → index → es la posición (0, 1, 2, …)

- lo que devuelve x cada vuelta
<div key={index} className="cell">
  {index}
</div>

Eso significa:
👉 por cada elemento del array, React crea un <div>.

Si board tiene 9 elementos → se crean 9 divs.

- {index}

Muestra el numero de posixion del 0-8 (9 divs)

4) el cuadrado del tablero -> Square
se crea un componente Squeare que muestra un children

```
const Square = ({children, updateBoard, index}) => {
    return (
      <>
        <div className="square">
          {children}
        </div>
      </>
    );

}

export default Square;
```

const Square = ({ children, updateBoard, index }) > Es un componente de React que recibe props.

Props que recibe:
-children → lo que se dibuja dentro del componente
-updateBoard → una función (todavía no la usás)
-index → un número 

<div className="square">
  {children} -> devuelve es el contenido de las etiquetas del componente
</div>

5) Actualizar el tablero - agregar el useState al board usando el array de las 9 posiciones

´´´
const board = Array(9).fill(null)
console.log(board)
const [boardState, setBoardState] = useState(board)
´´´

{board[index]} -> actualizar el board con el. index


6) crear el estado para saber de quien es el turno y visualmente debemos saber quien tiene el turno
-> creo el estado del turn y le paso como elemento inicial la X -> piezas.x
-> para dejar una pista para saber a quien le toca jugar: hago una section nueva y agrego
```
  <section className="turn">
        <Square isSelected={turn === PIEZAS.X}>
            {PIEZAS.X}
        </Square>
        <Square isSelected={turn === PIEZAS.O}>
            {PIEZAS.O}
        </Square>
   </section>

```
-> luego en el componente Square -> agrego el isSelected y paso la constante del className para que me tome si esta seleccioando o no



```
const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    return (
      <>
        <div className={className}>
          {children}
        </div>
      </>
    );

}
```

7) updateBoard 
-creamos dentro de App.jsx el const updateBoard o la funcion y le pasamos la  la funcion al Square (no la ejecucion)  para que dentro del square se termine ejecutando
Porque se pasa la funcion y no la ejecucion?
se ejecutan 9 veces sino lo que queres q se ejecute solo si se da el click (sino se actualiza) / ejecutarlo cuando lo necesito
-se ejecuta el updateBoard -> en el btn del onClick
-al hacer click sobre algun cuadrado de la grilla -> va cambiando el turno


```
const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard()
    }
    return (
      <>
        <div className={className} onClick={handleClick}>
          {children}
        </div>
      </>
    );

}

```

```
  const updateBoard = () => {
    const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X
    setTurn(newTurn)

  } 

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

```


8) al updateBoard le pasamos el index para que sepa en que posicion se hizo el click

9) ahora se puede cambiar el el valor o donde clicquee y para evitar eso y que sea eterno _

```
  const updateBoard = (index) => {
    if(board[index]) return /*si ya hay algo en esa posicion, no hacer nada*/

    /*ACTUALIZAR EL BORD */
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    /*CAMBIAR EL TURNO */
    const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X
    setTurn(newTurn)

  } 

```

10) como hago para ganer el juego?== osea si completo la linea antes apra ganar?

con un estado 
const [winner, setWinner] = useState(null) /*null es que no hay ganador, false es que hay empate*/

- creo los sets que ganarian usando la posicion 
```
const winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
```

 - chequear quien es el ganador

hago un for de winnerCombos ya que tengo q chquear cual es la combinacion ganadora

```

  const checkWinner = (boardToCheck) => {
    /*revisar todas las combinaciones ganadoras*/

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

  ```

- Ahora donde se cheque q hay un ganador?

Dentro de la funcion de upadateBoard

```
/*REVISAR SI HAY GANADOR */
    const newWinner = checkWinner(newBoard) -> hay que chequearlo con le ultimo tablero
    if (newWinner){
        setWinner(newWinner)  
    } else if (!newBoard.includes(null)){
        setWinner(false) /*empate*/ 
        }


```

- Hay que asegurarse que cuando se gana termina el juego

```

 if(board[index] || winner) return

 ```


11) Notificar como salio el juego
vamos a crear una section para que imprima con un modal (estilos) para qie pueda ver al ganador y un boton para reiniciar el juego

Si winner es distinto a null  (porque null es por defecto y no tenemos winner).  Dentro diremos si el winner es false => empate


```

  {
          winner !== null && (
            <section className="winner">
              <div className="text">
                {
                  winner === false ? (
                    <h2>
                      Empate
                    </h2>
                  ) : (
                    <h2>
                      Gano
                    </h2>
                  )
                }
                <!--te muestra el ganador-->    
                <header>{winner && <Square>{winner}</Square>}</header>
                <button>
                  Empezar de nuevo
                </button>

              </div>
            </section>
          )

        }



```

12) Reiniciar el juego

resetGame function
primero hay que volver al estado inicial
ese estado es el que definimos al pp

  
const [board, setBoard] = useState( Array(9).fill(null))
setBoard(Array(9).fill(null)) -> este

const [turn, setTurn] = useState(PIEZAS.X)
setBoard((PIEZAS.X)) -> este

const [winner, setWinner] = useState(null)
setWinner(null)

````
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(PIEZAS.X)
        setWinner(null)
    }

````

13) Chequear si hay empate

```
  /*Chequear si hay empate */
  const checkTide = (newBoard) => {
    //chequear si todas las posiciones del tablero estan llenas
    return newBoard.every( (square) => square !== null)
  }

 ```


 ```
 /*REVISAR SI HAY GANADOR */
    const newWinner = checkWinner(newBoard) 
    if (newWinner){
        setWinner(newWinner)  
    } else if (checkTide(newBoard)){
        setWinner(false) /*empate*/ 
    }
``` 

14) si hay un winner que tire confetti
npm install canvas-confetti -E

```
import confetti from "canvas-confetti"
```

```
  const newWinner = checkWinner(newBoard) 
    if (newWinner){
        confetti()
        setWinner(newWinner)  
    } else if (checkTide(newBoard)){
        setWinner(false) /*empate*/ 
    }
```


15) Guardar los cambios de la partida del juego en el localStorage

Donde hay que guardarlo? en el updateBoard antes de saber si hyay algun ganador
-vamos a guardar en primer lugar el estado del tablero, en el localStorage podes guardar un string, si se guarda directamente el array va a guardar otra cosa y con el stringy lo puedo guardar como un string y lo puedo volver a trasbformar en un array
osea si pongo el array directamente sin trasnformarlo lo que hace es vonvertir toods los valores en string por mas que haya un null por ejemplo

```
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)-> guardo el turno


```

NUnca los hooks deben ir dentro de una funcion
para ello debo agregar el valor del lcoal storage dentro del estado osea si existe un registro de localStorage entonces que me inice el juego ahi sino con el Array(9)

```
  /*le pasamos el estado inicial del tablero*/ 
  const [board, setBoard] = useState( () => {
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
  })

```
