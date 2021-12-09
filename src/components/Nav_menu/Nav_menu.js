import style from './Nav_menu.module.css'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import News from '../Content/News/News';

import Content from '../Content/Content';

const setActive = ({isActive}) => isActive ? style.active: style.link

function Nav_menu(){
    return(
        <div className={style.navigation}>
            <div className={style.title}>
                КАТЕГОРИИ
            </div>
            <nav className={style.menu}>
                <NavLink to="/news" className={setActive} >Новости</NavLink>
                <NavLink to="/trends2021"  className={setActive} >Тренды 2021</NavLink>
                <NavLink to="/trends2022"  className={setActive} >Тренды 2022</NavLink>

                <NavLink to="/aboutus"  className={setActive} >О нас</NavLink>
            </nav>        
        </div>
    );
}


export default Nav_menu;