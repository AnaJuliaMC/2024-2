import { useRef, useState } from "react"
import { Pagina } from "../../componentes/Pagina"

export function UseRef(){
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementarEstado(){
        setEstado(estado + 1)
    
    }

    function IncrementarReferencia(){
        referencia.current +=1
    }

    return(
        <Pagina titulo="useREf" subtitulo="Hooks Básicos">

            <div className="flex flex-col">
                {`Ref: ${referencia.current} | State: ${estado}`}
            </div>


            <div>
                <button className="bg-red-400 p-3"
                onClick={IncrementarReferencia}>Ref +
                </button>


                <button className="bg-purple-400 p-3"
                onClick={incrementarEstado}>State +
                </button>
            </div>
        </Pagina>
    )
}