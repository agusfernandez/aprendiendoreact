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
5) crear el estado para saber de quien es el turno y visualmente debemos saber quien tiene el turno
