import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'

function TitleNews() {
    return (
        <Fragment>
            <Route path="/news/1/" element={<h5>Результаты работы по ТУ</h5>} />
            <Route path="/news/2/" element={<h5>Мы выполнили все лабораторные работы по Документообороту</h5>} />
        </Fragment>
    )
}

export default TitleNews