import team from './png/team.png'
import Dima from './img/Dima.jpg';
import Masha from './img/Masha.jpg';
import Max from './img/Max.jpg';
import Nikita from './img/Nikita.jpg';

function aboutUs() {
    return (
        // height: 100%;
        // width: 100px;
        <div className="content_field">
            <div className="content_title">
                <img src={team} height="50px" width="50px"/>
                <h5>НАША КОМАНДА</h5>
            </div>
            <div className="content__news">
                <div className="content__post">
                    <h3>Никита Бардин</h3>
                    <div className="about__us__posts">
                        <img src={Nikita} height="100%" width="140px"/>
                        <p>
                            Главный разработчик приложения
                        </p>
                    </div>
                </div>
                <div className="content__post">
                    <h3>Максим Толстов</h3>
                    <div className="about__us__posts">
                        <img src={Max} height="100%" width="140px" />
                        <p>
                            Концепция приложения
                        </p>
                    </div>
                </div>
                <div className="content__post">
                    <h3>Мария Показаньева</h3>
                    <div className="about__us__posts">
                        <img src={Masha} height="100%" width="140px"/>
                        <p>
                            Веб Дизайн
                        </p>
                    </div>
                </div>
                <div className="content__post">
                    <h3>Димитрий Коновалов</h3>
                    <div className="about__us__posts">
                        <img src={Dima} height="100%" width="140px"/>
                        <p>
                            Просто Дима
                            {/* Контент. Наполнение сайта информацией  */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default aboutUs;