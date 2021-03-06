import style from './News.module.css'

import {Link} from "react-router-dom";

function News(props) {

    return (
        <div className={style.post_field}>
            <h3>{props.title}</h3>
            <div className={style.post}>
                <p>
                    {props.subarticle} <Link to={props.link} className={style.link}>Читать далее...</Link>
                </p>
            </div>
        </div>
    );
}

export default News;