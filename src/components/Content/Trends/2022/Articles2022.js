import React from "react";
import { Fragment } from "react";
import Article from "../Article";
import ArticlesData2022 from "./ArticlesData2022";

function Articles2022() {
    let ArticleElements = ArticlesData2022.map((A) =>
        Article({ year: "2022", id: A.id, Text: A.Text })
    )

    return (
        <Fragment>
            {ArticleElements}
        </Fragment>
    );
}

export default Articles2022;