import style from './Nav_menu.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? style.active: style.link

function Nav_menu(){
    return(
        <div className={style.navigation}>
            <div className={style.title}>
                КАТЕГОРИИ
            </div>
            <nav className={style.menu}>
                <NavLink to="/news/" className={setActive} >Новости</NavLink>
                <NavLink to="/trends2021/"  className={setActive} >Тренды 2021</NavLink>
                <NavLink to="/trends2022/"  className={setActive} >Тренды 2022</NavLink>

                <NavLink to="/aboutus/"  className={setActive} >О нас</NavLink>
            </nav>        
        </div>
    );
}


export default Nav_menu;