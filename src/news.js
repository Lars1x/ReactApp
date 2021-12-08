import logonews from './png/news.png'


function news() {
    return (
        <div className="content_field">
            <div className="content_title">
                <img src={logonews} width="8%" />
                <h5>НОВОСТИ</h5>
            </div>
            <div className="content__news">
                <div className="content__post">
                    <h3>Дима в очередной раз проспал пары...</h3>
                    <p>
                    <span>Главный вопрос дня</span>:<br /> Сможет ли он он получить зачет по английскому с такой посещяймостью?
                    </p>
                </div>
                <div className="content__post">
                    <h3>Дима в очередной раз проспал пары...</h3>
                    <p>
                    <span>Главный вопрос дня</span>:<br /> Сможет ли он он получить зачет по английскому с такой посещяймостью?
                    </p>
                </div>
                <div className="content__post">
                    <h3>Дима в очередной раз проспал пары...</h3>
                    <p>
                    <span>Главный вопрос дня</span>: <br /> Сможет ли он он получить зачет по английскому с такой посещяймостью?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default news;