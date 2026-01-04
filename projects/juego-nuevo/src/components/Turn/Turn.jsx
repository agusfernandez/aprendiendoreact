import Square from "../Square/Square"
import { PIEZAS } from "../../constants/constants"

const Turn = ({ turn }) => {
    return (
        <section className="turn">
          <Square isSelected={turn === PIEZAS.X}>
            {PIEZAS.X}
          </Square>
          <Square isSelected={turn === PIEZAS.O}>
            {PIEZAS.O}
          </Square>
        </section>
    )
}

export default Turn