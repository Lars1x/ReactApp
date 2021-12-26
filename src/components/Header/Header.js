import logo from './logo.png';
import style from './Header.module.css'

import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className={style.header}>
            <div className={style.Logo__header}>
                <img src={logo} className={style.Logo} />
                XATKA
            </div>
            <nav classNeme={style.nav}>
                <NavLink to="/ReactApp/" className={style.link_1}  >ГЛАВНАЯ</NavLink>
            </nav>
        </header>
    )
}
export default Header;
