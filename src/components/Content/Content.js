import React from 'react';
import { Routes } from "react-router-dom";


import Articles2021 from './Trends/2021/Articles2021';
import Articles2022 from './Trends/2022/Articles2021';
import ArticlesNews from './News/NewsList/ArticlesNews';
import MainPages from './MainPages';
import TitleImg from './Titles/TitleImg';
import TitleMainPages from './Titles/TitleMainPages';
import TitleNews from './Titles/TitleNews';
import TitleTrends2021 from './Titles/TitleTrends2021';
import TitleTrends2022 from './Titles/TitleTrends2022';

import style from './Content.module.css'


function Content() {
    return (
        <div className={style.field}>
            <div className={style.title}>
                <Routes>
                    {TitleImg()}
                </Routes>
                <Routes>
                    {TitleMainPages()}
                    {TitleNews()}
                    {TitleTrends2021()}
                    {TitleTrends2022()}
                </Routes>
            </div>
            <div className={style.post_field}>
                <Routes>
                    {MainPages()}
                    {ArticlesNews()}
                    {Articles2021()}
                    {Articles2022()}
                </Routes>
            </div>
        </div>
    );
}

export default Content;