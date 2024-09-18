import { useState } from "react"
import Pagina from "../componentes/Pagina"

export default function Estado1(){
    let numero=11

    const [num, SetNum] = useState(0)
    // const estado = useState(0)
    // const num = estado[0]
    // const alteraNum = estado[1]

    function incrementar(){
        SetNum(num + 1)

    }

    return (
        <Pagina titulo="Estado 1" subtitulo="conceito de estado no react">
            <div>
                <div>{num}</div>
                <button className="bg-zinc-600 rounded-md"
                onClick={incrementar}>
                Incrementar    
                </button>
            </div>

        </Pagina>
    )
}
