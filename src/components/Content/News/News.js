import style from './News.module.css'


function News() {
    return(
        <div className={style.post}>
            <h3>Дима в очередной раз проспал пары...</h3>
            <p>
                <span>Главный вопрос дня</span>:<br /> Сможет ли он он получить зачет по английскому с такой посещяймостью?
            </p>
        </div>
    );
}

export default News;