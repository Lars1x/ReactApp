import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react'

function TitleTrends2021() {
    return (
        <Fragment>
            <Route path="/trends2021/1/" element={<h5>Интернет поведения (IoB)</h5>} />
            <Route path="/trends2021/2/" element={<h5>Совокупный опыт (Total Experience)</h5>} />
            <Route path="/trends2021/3/" element={<h5>Повышающие конфиденциальность вычисления (Privacy-Enhancing Computation)</h5>} />
            <Route path="/trends2021/4/" element={<h5>Распределённое облако (Distributed Cloud)</h5>} />
            <Route path="/trends2021/5/" element={<h5>Повсеместные операции (Anywhere Operations)</h5>} />
            <Route path="/trends2021/6/" element={<h5>Сеть кибербезопасности (Cybersecurity Mesh)</h5>} />
            <Route path="/trends2021/7/" element={<h5>Интеллектуальный композиционный бизнес (Intelligent Composable Business)</h5>} />
            <Route path="/trends2021/8/" element={<h5>ИИ-инжиниринг (AI Engineering)</h5>} />
            <Route path="/trends2021/9/" element={<h5>Гиперавтоматизация (Hyperautomation)</h5>} />
        </Fragment>
    )
}

export default TitleTrends2021