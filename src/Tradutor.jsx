import { useState } from "react";
import { Pagina } from "./componentes/Pagina";

export default function Tradutor() {
    const [texto, setTexto] = useState("")
    const [textoIngles, setTextoIngles] = useState("");
    
    function textEnglish() {
        fetch(`https://api.mymemory.translated.net/get?q=${texto}!&langpair=pt-br|en-us`)
        .then(resposta => resposta.json())  
        .then(objeto => setTextoIngles(objeto.responseData.translatedText))
        
    }

    return (
        <Pagina titulo="Tradutor" subtitulo="Traduzir">
            <div className="flex flex-col">
                <div className="flex flex-row justify-around">
                    <span>Português</span>
                    <span>Inglês</span>
                </div>
                <div className="flex flex-row gap-4 p-2">
                    <textarea id="portugues" type="text" value={texto} onChange={(e) => setTexto(e.target.value)} className=" w-96 h-96 p-2 bg-blue-300 text-custom-black" maxLength={250}>
                    </textarea>
                    <textarea type="text" value={textoIngles} onChange={(e) => setTexto(e.target.value)} readOnly className=" w-96 h-96 p-2 bg-blue-300 text-custom-black">
                    </textarea> 
                </div>
                <div className="flex flex-row absolute bottom-36" >
                <span className="bg-blue-300 ml-10  text-custom-black text-xl">{texto.length}/250</span>
                <button className="bg-blue-600 ml-32 p-2  w-36" onClick={textEnglish}>TRADUZIR</button>
                </div>
            </div>
        </Pagina>
    )
}