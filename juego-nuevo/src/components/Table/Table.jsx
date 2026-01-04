import Square from "../Square/Square"

const Table = ({board , updateBoard}) => {   
    return (
        <>
        <section className="game">
          {
            board.map((_, index) => {
            console.log('board' +index)
            return (
            <>
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
               
                {board[index]}
              </Square>
       
            </>
            )
        })
        }

        </section>

        
        </>

    )
}

export default Table