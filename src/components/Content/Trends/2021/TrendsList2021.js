import React from "react";
import Post from "../Post";
import { Fragment } from 'react';
import ArticlesData2021 from "./ArticlesData2021";


function TrendsList2021() {
    let Trends2021Elements = ArticlesData2021.map((t) => <Post title={t.title} subarticle={t.PostContent} id={t.id.toString()} />)

    return (
        <Fragment>
            {Trends2021Elements}
        </Fragment>
    );
}

export default TrendsList2021;