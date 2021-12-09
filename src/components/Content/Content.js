import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import logonews from './png/news.png'
import logoteam from './png/team.png'
import Dima from './AboutUs/img/Dima.jpg';
import Masha from './AboutUs/img/Masha.jpg';
import Max from './AboutUs/img/Max.jpg';
import Nikita from './AboutUs/img/Nikita.jpg';

import News from './News/News'
import AboutUs from './AboutUs/AboutUs'

import style from './Content.module.css'
import { Fragment } from 'react/cjs/react.production.min';


function Content() {
    let title = "НОВОСТИ"
    return (
             <div className={style.field}>
            <div className={style.title}>
                <Routes>
                    <Route path="/news" element= {<img src={logonews} width="8%" />}/>
                    <Route path="/aboutus" element={<img src={logoteam} width="7.5%" />}/>
                </Routes>
                <Routes>
                    <Route path="/news" element= {<h5>НОВОСТИ</h5>}/>
                    <Route path="/aboutus" element={<h5>НАША КОМАНДА</h5>}/>
                </Routes>
            </div>
            <div className={style.post_field}>
                <Routes>
                    <Route path="/news" element= {<News/>}/>
                    <Route path="/aboutus" element={
                        <Fragment>
                            <AboutUs title="Никита Бардин" article="Главный разработчик приложения" img={Nikita}  />
                            <AboutUs title="Максим Толстов" article="Концепция приложения" img={Max}  />
                            <AboutUs title="Мария Показаньева" article="Веб Дизайн" img={Masha}  />
                            <AboutUs title="Димитрий Коновалов" article="Контент. Наполнение приложения" img={Dima}  />
                        </Fragment>
                    }/>
                </Routes>
            </div>
        </div>
    );
}

export default Content;