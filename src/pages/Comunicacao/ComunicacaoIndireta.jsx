import {Pagina} from "../../componentes/Pagina"
import { PaiIndireta } from "../../componentes/comunicação/Indireta/PaiIndireta";

export function ComunicacaoIndireta() {

    return (
        <Pagina 
            titulo="Comunicação Indireta"
            subtitulo="Exemplo de comunicação INDIRETA entre componentes"
        >
            <PaiIndireta />
        </Pagina>
    )
}