import logo from './png/logo.png';

function header(){
    return(
        <header className="header">
                    <div className="conteiner">
                        <div className="header__inner">
                            <div className="Logo__header">
                                <img src={logo} className="Logo" />
                                XATKA Бiбpa
                            </div>
                            <nav classNeme="nav__header">
                                <a className="link__nav__header1" href="#">ГЛАВНАЯ</a>
                                <a className="link__nav__header2" href="#">КОНТАКТЫ</a>
                            </nav>
                        </div>
                    </div>
                </header>
    )
}

export default header;
