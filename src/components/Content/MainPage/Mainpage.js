import useDate from "../TimeFun/UseData";
import style from './MainPage.module.css'




function MainPage(){
    let timedata = useDate()
    return(
        <div className={style.field}>
            <p>
                <p>Текущее дата = {timedata.date}</p>
                <p>Текущее время = {timedata.time}</p>
                <p>Текущее пожелание = {timedata.wish}</p>
            </p>
        </div>
    );
}

export default MainPage