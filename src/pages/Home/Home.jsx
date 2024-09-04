import { Menu } from "../../componentes/menu/Menu"
import styles from "./Home.module.css"

export function Home(){
    return(
        <div className={styles.Home}>
            <Menu/>
        </div>
    )
}