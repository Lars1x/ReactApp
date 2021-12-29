import React from "react";
import style from '../Content.module.css'
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

function Article(props) {
    return (
        <Route path={"/trends" + props.year + "/" + props.id} element={
            <div className={style.Articles}>
                {props.Text}
                <Link to={"/trends" + props.year} className={style.backButton}>Вернуться назад</Link>
            </div>
        } />
    );
}

export default Article