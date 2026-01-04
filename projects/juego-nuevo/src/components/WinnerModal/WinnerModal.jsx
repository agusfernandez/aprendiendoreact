import Square from "../Square/Square"

const WinnerModal = ({winner, resetGame}) => {
    if(winner === null) return null  
    const textWinner = winner === false ? 'Empate' : 'Gano: '
    return (
        <> 
            
                <section className="winner">
                <div className="text">
                    <header>{textWinner}</header>

                    <header>{winner && <Square>{winner}</Square>}</header>
                    <button onClick={resetGame}>
                    Empezar de nuevo
                    </button>

                </div>
                </section>
        
        
        </>
    )
}

export default WinnerModal;