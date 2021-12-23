import React from "react";
import { Fragment } from 'react';
import News from "../News";


function NewsList() {
    return (
        <Fragment>
            <News title="Стали известны предварительные оценки по ТУ" subarticle="Пару дней назад  был опубликован список оценок по ТУ... Кто же получил допуск к экзамену?" link="1/" />
            <News title="Мы выполнили полный цикл работ по документообороту" subarticle="Наша команда выполнила все задания..." link="2/" />

        </Fragment>
    );
}

export default NewsList;