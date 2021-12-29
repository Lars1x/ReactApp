import React from "react";
import { Fragment } from "react";
import Article from "../Article";
import ArticlesData2021 from "./ArticlesData2021";



function Articles2021() {
    let ArticleElements = ArticlesData2021.map((A) =>
        Article({ year: "2021", id: A.id, Text: A.Text })
    )
    
    return (
        <Fragment>
            {ArticleElements}
        </Fragment>
    );
}

export default Articles2021;