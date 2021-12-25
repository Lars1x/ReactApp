import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'

function TitleTrends2022() {
    return (
        <Fragment>
            <Route path="/trends2022/1/" element={<h5>Фабрика данных (Data Fabric)</h5>} />
            <Route path="/trends2022/2/" element={<h5>Сеть кибербезопасности (Cybersecurity Mesh)</h5>} />
            <Route path="/trends2022/3/" element={<h5>Вычисления, усиливающие защиту конфиденциальности данных (Privacy-Enhancing Computation)</h5>} />
            <Route path="/trends2022/4/" element={<h5>Облачные платформы (Cloud-Native Platforms)</h5>} />
            <Route path="/trends2022/5/" element={<h5>Составные приложения (Composable Applications)</h5>} />
            <Route path="/trends2022/6/" element={<h5>Интеллект для принятия решений (Decision Intelligence)</h5>} />
            <Route path="/trends2022/7/" element={<h5>Гиперавтоматизация (Hyperautomation)</h5>} />
            <Route path="/trends2022/8/" element={<h5>Разработка искусственного интеллекта (AI Engineering)</h5>} />
            <Route path="/trends2022/9/" element={<h5>Распределённые предприятия (Distributed Enterprises)</h5>} />
            <Route path="/trends2022/10/" element={<h5>Совокупный опыт (Total Experience)</h5>} />
            <Route path="/trends2022/11/" element={<h5>Автономные системы (Autonomic Systems)</h5>} />
            <Route path="/trends2022/12/" element={<h5>12. Генеративный искусственный интеллект (Generative AI)</h5>} />
        </Fragment>
    )
}

export default TitleTrends2022