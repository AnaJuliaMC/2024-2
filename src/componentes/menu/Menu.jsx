import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";



export function Menu() {

    const getEstilo= () => {
        let estiloInicial = "flex items-center gap-3 px-3 py-5 hover:bg-slate-800 hover:text-slate-200 "
    
        let estiloAtivo = "text-red-500"

        return estiloFinal;


    };

    return (
        <div className={`bg-slate-400 w-60 h-screen
                flex flex-col `}>

            <header className="flex justify-center p-3 border-b border-zinc-800 solid">
                <IconRouteAltLeft />
                <span className="font-bold">React Rotas </span>
            </header>


            <nav className="flex flex-col">

                <NavLink to="/home" className={getEstilo}>
                    <IconHome />  Home
                </NavLink>

                <NavLink to="/contato" className={getEstilo}>
                    <IconAddressBook /> Contato
                </NavLink>

                <NavLink to="/sobre" className={getEstilo}>
                    <IconInfoCircle /> Sobre
                </NavLink>

            </nav>


            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento Web 2</span>

            </footer>
        </div>
    )
}
