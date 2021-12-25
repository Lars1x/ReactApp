import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'

import logonews from './../png/news.png'
import logoteam from './../png/team.png'


function TitleImg() {
    return (
        <Fragment>
            <Route path="/news/" element={<img src={logonews} width="8%" />} />
            <Route path="/aboutus/" element={<img src={logoteam} width="7.5%" />} />
        </Fragment>
    );
}

export default TitleImg