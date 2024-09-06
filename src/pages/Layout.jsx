import { Outlet } from "react-router-dom";
import {Menu} from "../componentes/menu/Menu"

export function Layout(){
    return(
        <div className="">
            <Menu />
            <Outlet />
        </div>

    )
}