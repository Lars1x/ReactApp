import AboutUs from "./AboutUs";
import Dima from './img/Dima.jpg';
import Masha from './img/Masha.jpg';
import Max from './img/Max.jpg';
import Nikita from './img/Nikita.jpg';

import { Fragment } from "react";


function AboutUsFullTeam() {
    return (
        <Fragment>
            <AboutUs title="Никита Бардин" article="Разработчик приложения" img={Nikita} email="n.bardin2015@yandex.ru" vk="https://vk.com/lars1k"vktext="lars1k" />
            <AboutUs title="Максим Толстов" article="Концепция приложения" img={Max} email="uncleveles@gmail.com" vk="https://vk.com/max_jpeg"vktext="max_jpeg" />
            <AboutUs title="Мария Показаньева" article="Веб Дизайн" img={Masha} email="pmd372002@gmail.com" vk="https://vk.com/pokazan_maria" vktext="pokazan_maria" />
            <AboutUs title="Димитрий Коновалов" article="Контент. Наполнение приложения" img={Dima} email="uncleveles@gmail.com" vk="https://vk.com/uncle_veles" vktext="uncle_veles" />
        </Fragment>
    );
}

export default AboutUsFullTeam