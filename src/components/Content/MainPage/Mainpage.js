import useDate from "../TimeFun/UseData";
import style from './MainPage.module.css'
import MainImg from './../png/MainImg.png'


function MainPage(){
    let timedata = useDate()
    return(
        <div className={style.field}>
            <p>
                <p><span>{timedata.wish} мы рады вас приведствовать на студенческом проекте, посвещенном трендам Garther за 2021 и 2022.</span></p>
                <p> В данной работе мы создавали наше первое интернет приложение, которое повысило наши навыки разработки.</p>
                <p> Так же мы надеемся, что вам понравится наш проект</p>
                <img src={MainImg} alt="img" />
                <p><span>С уважением, команда студентов группы 2бИТС2</span></p>
            </p>
        </div>
    );
}

export default MainPage