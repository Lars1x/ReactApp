import style from './Post.module.css'

import { Link } from "react-router-dom";

function Post(props) {
    return (
        <div className={style.post_field}>
            <h3>{props.title}</h3>
            <div className={style.post}>
                <p>
                    {props.subarticle}
                    <div>
                        <Link to={props.id} className={style.link}>Читать далее...</Link>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default Post;