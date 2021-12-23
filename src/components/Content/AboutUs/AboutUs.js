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
                    <li><span>e-mail:</span> <a href={"mailto:"+props.email} target="_blank"> {props.email}</a></li>
                    <li><span>VK:</span><a href={props.vk} target="_blank">  {props.vktext}</a> </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;