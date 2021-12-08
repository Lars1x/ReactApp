function navigation_menu(){
    return(
        <div className="navigation">
                <div className="navigation_title">
                    КАТЕГОРИИ
                </div>
                <div classNeme="lineNavig"></div>
                <nav className="menu">
                    <ul>
                        <li><a className="link__nav__menu" href="#">Новости</a></li>
                        <li><a className="link__nav__menu" href="#">Достижения</a></li>
                        <li><a className="link__nav__menu" href="#">Наши работы</a></li>
                        <li><a className="link__nav__menu" href="#">О нас</a></li>
                    </ul>
                </nav> 
            </div>
    );
}
export default navigation_menu;