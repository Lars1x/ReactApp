import React from "react";
import { Route } from 'react-router-dom'
import { Fragment } from "react";

import AboutUsFullTeam from './AboutUs/AboutUsFullTeam';
import TrendsList2021 from './Trends/2021/TrendsList2021';
import TrendsList2022 from './Trends/2022/TrendsList2022';
import NewsList from './News/NewsList/NewsList';
import HomePage from './HomePage/Homepage';

function MainPages() {
    return (
        <Fragment>
            <Route path="/ReactApp/" element={
                <HomePage />
            } />
            <Route path="/news/" element={
                <NewsList />
            } />
            <Route path="/aboutus/" element={
                <AboutUsFullTeam />
            } />
            <Route path="/trends2021/" element={
                <TrendsList2021 />
            } />
            <Route path="/trends2022/" element={
                <TrendsList2022 />
            } />
        </Fragment>
    );
}

export default MainPages