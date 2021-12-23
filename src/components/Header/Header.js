import logo from './logo.png';
import style from './Header.module.css'

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


function Header() {
    return (
        <header className={style.header}>
            <div className={style.Logo__header}>
                <img src={logo} className={style.Logo} />
                XATKA
                {/* Бiбpa */}
            </div>
            <nav classNeme={style.nav}>
                <NavLink to="/" className={style.link_1}  >ГЛАВНАЯ</NavLink>
                {/* <NavLink to="/" className={style.link_2}  >КОНТАКТЫ</NavLink> */}
            </nav>
        </header>
    )
}
export default Header;
