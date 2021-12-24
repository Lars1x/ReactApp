import useDate from "./UseData";
import React from "react";

import style from './Time.module.css'


function Time() {
    let now = useDate()

    return (
        <div className={style.field}>
            <p className={style.time}>
                {now.time}
            </p>
            <p className={style.date}> {now.date} </p>
        </div>
    );
}

export default Time;