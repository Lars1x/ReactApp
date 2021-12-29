import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'
import ArticlesData2022 from './ArticlesData2022';

function TitleTrends2022() {

    let TrendsTitles2022 = ArticlesData2022.map((t) =>
        <Route path={"/trends2022/" + t.id} element={<h5>{t.title}</h5>} />
    )
    return (
        <Fragment>
            {TrendsTitles2022}
        </Fragment>
    )
}

export default TitleTrends2022