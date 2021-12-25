import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'

function TitleMainPages() {
    return (
        <Fragment>
            <Route path="/ReactApp/" element={<h5>ГЛАВНАЯ</h5>} />
            <Route path="/news/" element={<h5>НОВОСТИ</h5>} />
            <Route path="/aboutus/" element={<h5>НАША КОМАНДА</h5>} />
            <Route path="/trends2021/" element={<h5>ТЕХНОЛОГИЧЕСКИЕ ТРЕНДЫ 2021</h5>} />
            <Route path="/trends2022/" element={<h5>ТЕХНОЛОГИЧЕСКИЕ ТРЕНДЫ 2022</h5>} />
        </Fragment>
    )
}

export default TitleMainPages