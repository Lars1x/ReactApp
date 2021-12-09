import style from './AboutUs.module.css'

function AboutUs(props) {

    return (
        <div className={style.post_field}>
            <h3>{props.title}</h3>
            <div className={style.post}>
                <img src={props.img} height="100%" width="140px"/>
                <p>
                    {props.article}
                </p>
            </div>
        </div>
    );
}

export default AboutUs;