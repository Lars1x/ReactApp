import logo from './logo.png';
import style from './Header.module.css'


function Header(){
    return(
        <header className={style.header}>
            <div className={style.Logo__header}>
                <img src={logo} className={style.Logo} />
                XATKA Бiбpa
            </div>
            <nav classNeme={style.nav}>
                <a className={style.link_1} href="#">ГЛАВНАЯ</a>
                <a className={style.link_2} href="#">КОНТАКТЫ</a>
            </nav>
        </header>
    )
}
export default Header;
