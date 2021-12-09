import React from "react";
import style from '../../../Content.module.css'
import { Fragment } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";



function Articles2021() {
    return (
        <Fragment>
            <Route path="/trends2021/1" element={
                <div className={style.Articles}>
                    <p>По мнению аналитиков Gartner, наступает эра «интернета поведения» (IoB). Огромное количество устройств и датчиков будет прикрепляться или даже имплантироваться в организм человека, чтобы собирать и использовать «цифровую пыль», которую он оставляет.</p>
                    <p>Причём это могут быть как носимые устройства (например, фитнес-браслеты или умные часы, которые отлеживают местоположение владельца), так и встроенные (например, подкожные чипы, которые фиксируют температуру тела человека, количество сахара или лейкоцитов в крови).</p>
                    <p>Компании используют эти данные, чтобы влиять на поведение людей, пишет Gartner. Например, во время пандемии они могут использовать компьютерное зрение и тепловизор, чтобы увидеть, носят ли сотрудники маски и идентифицировать тех, у кого повышена температура. Gartner прогнозирует, что к концу 2025 года более половины населения мира будет охвачено по крайней мере одной программой IoB.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/2" element={
                <div className={style.Articles}>
                    <p>«В прошлом году Gartner назвала мультиопыт (multiexperience) основным стратегическим технологическим трендом, а в этом году делает ещё один шаг вперед с совокупным опытом (total experience), который связывает воедино опыт клиентов, сотрудников и пользователей с мультиканальной средой, — сказал Берк. — Gartner ожидает, что компании, которые обеспечивают совокупный опыт, превзойдут конкурентов по ключевым показателям удовлетворённости в течение следующих трёх лет».</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>

            } />
            <Route path="/trends2021/3" element={
                <div className={style.Articles}>
                    <p>В отличие от обычных средств, которые обеспечивают безопасность данных, повышающие конфиденциальность вычисления защищают используемые данные, сохраняя секретность и приватность. Gartner считает, что к 2025 году половина крупных компаний внедрит повышающие конфиденциальность вычисления для обработки данных в непроверенных средах и использования многосторонней аналитики данных.</p>`
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/4" element={
                <div className={style.Articles}>
                    <p>Распределённое облако — это расположение общедоступных облачных сервисов за пределами физических центров обработки данных провайдера. Провайдер облачных услуг по-прежнему отвечает за все аспекты архитектуры облачных сервисов, администрирование и обновление.</p>
                    <p>Распределённое облако позволяет расположить центры обработки данных в любом месте. Это решает технические проблемы, а также проблемы законодательного регулирования, пишет Gartner.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/5" element={
                <div className={style.Articles}>
                    <p>Повсеместные операции — это операционная модель бизнеса, созданная для поддержки клиентов, работы сотрудников и предоставления услуг из любой точки мира. К концу 2023 года 40% организаций будут применять повсеместные операции, чтобы оптимизировать виртуальное и физическое взаимодействие с клиентами и сотрудниками, пишет Gartner.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/6" element={
                <div className={style.Articles}>
                    <p>Сеть кибербезопасности позволяет любому человеку безопасно получить доступ к любому цифровому активу, независимо от того, где находится этот актив или человек. К 2025 году сеть кибербезопасности будет поддерживать более половины запросов на управление цифровым доступом, пишет Gartner.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/7" element={
                <div className={style.Articles}>
                    <p>Эта тенденция говорит о необходимости усовершенствовать процесс принятия решений за счёт более широкого доступа к информации и более эффективного реагирования на неё.</p>
                    <p>В интеллектуальной компании для принятия решений применяются технологии обработки больших данных. Умные системы аккумулируют информацию о бизнес-процессах (например производстве и продажах) и создают на её основе прогнозные сценарии. Они оптимизируют деятельность предприятия и повышают его прибыль.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/8" element={
                <div className={style.Articles}>
                    <p>ИИ-инжиниринг стоит на трёх основных столпах — DataOps, ModelOps и DevOps — и будет способствовать повышению производительности, масштабируемости и надёжности моделей ИИ, обеспечивая при этом полную отдачу от инвестиций, пишет Gartner.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
            <Route path="/trends2021/9" element={
                <div className={style.Articles}>
                    <p>Gartner определяет гиперавтоматизацию как эффективную комбинацию взаимодополняющих наборов инструментов, которые позволяют на качественно новом уровне автоматизировать бизнес-процессы и дополнять человеческие возможности. Гиперавтоматизация предполагает применение передовых технологий, таких как искусственный интеллект (AI), машинное обучение (ML), RPA, BPM и интеллектуальный анализ данных, в том числе Process Mining.</p>
                    <p>«Гиперавтомация теперь неизбежна и необратима. Всё, что может и должно быть автоматизировано, будет автоматизировано», — сказал Берк.</p>
                    <Link to="/trends2021" className={style.backButton}>Вернуться назад</Link>
                </div>
            } />
        </Fragment>
    );
}

export default Articles2021;