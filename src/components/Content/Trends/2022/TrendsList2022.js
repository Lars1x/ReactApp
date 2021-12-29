import React from "react";
import Post from "../Post";
import { Fragment } from 'react';
import ArticlesData2022 from "./ArticlesData2022";

function TrendsList2022() {
    let Trends2022Elements = ArticlesData2022.map((t) =>
        <Post title={t.title} subarticle={t.PostContent} id={t.id.toString()} />
    )
    return (
        <Fragment>
            {Trends2022Elements}
        </Fragment>
    );
}

export default TrendsList2022;