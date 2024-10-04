
export function FilhoIndireta() {
    

    return (        
         <div className="flex gap-3">
            <button 
                className="botao"
                onClick={() => setNome("João")}
            >
                João
            </button>
            <button 
                className="botao" 
                onClick={() => setNome("Maria")}
            >
                Maria
            </button>
            
            <button 
                className="botao" 
                onClick={() => setNome("José")}
            >
                José
            </button>
        
        </div>

    )
}