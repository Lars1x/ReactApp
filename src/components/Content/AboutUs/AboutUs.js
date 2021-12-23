import style from './AboutUs.module.css'

function AboutUs(props) {

    return (<
        div className={style.post_field} >
        <h3> {props.title} </h3>
        <div className={style.post} >
            <img src={props.img} className={style.imgAboutUs} />
            <div className={style.postText}>
                <p> {props.article}</p>
                <ul>
                    <li><span>e-mail:</span> 213123</li>
                    <li><span>VK:</span> 321312 </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;