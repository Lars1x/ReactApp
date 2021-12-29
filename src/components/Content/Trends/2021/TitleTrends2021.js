import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'
import ArticlesData2021 from './ArticlesData2021';

function TitleTrends2022() {

    let TrendsTitles2021 = ArticlesData2021.map((t) =>
        <Route path={"/trends2021/" + t.id} element={<h5>{t.title}</h5>} />
    )
    return (
        <Fragment>
            {TrendsTitles2021}
        </Fragment>
    )
}

export default TitleTrends2022