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
            <div>
                {`Ref: ${referencia.current} | State: ${estado}`}
            </div>
        </Pagina>
    )
}