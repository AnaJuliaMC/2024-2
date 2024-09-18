import { useState } from "react"
import Pagina from "../componentes/Pagina"

export default function Estado1(){
    let numero=11

    const estado = useState(0)
    const num = estado[0]
    const alteraNum = estado[1]

    function incrementar(){
        numero = numero + 1
        console.log(numero)

        alteraNum(200)

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
