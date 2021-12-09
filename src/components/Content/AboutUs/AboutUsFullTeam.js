import AboutUs from "./AboutUs";
import Dima from './img/Dima.jpg';
import Masha from './img/Masha.jpg';
import Max from './img/Max.jpg';
import Nikita from './img/Nikita.jpg';

import { Fragment } from "react";


function AboutUsFullTeam() {
    return (
        <Fragment>
            <AboutUs title="Никита Бардин" article="Разработчик приложения" img={Nikita} />
            <AboutUs title="Максим Толстов" article="Концепция приложения" img={Max} />
            <AboutUs title="Мария Показаньева" article="Веб Дизайн" img={Masha} />
            <AboutUs title="Димитрий Коновалов" article="Контент. Наполнение приложения" img={Dima} />
        </Fragment>
    );
}

export default AboutUsFullTeam