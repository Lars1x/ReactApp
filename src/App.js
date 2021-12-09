
import './Style.css';
import React from "react";
import Header from './components/Header/Header';
import Nav_menu from './components/Nav_menu/Nav_menu';
import Content from './components/Content/Content';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop/ScrollToTop ';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ScrollToTop>
          {Header()}
          <div className="content_main">
            <Nav_menu />
            <Content />
          </div>

        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
