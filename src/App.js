import './Style.css';
import React from "react";
import Header from './components/Header/Header';
import Nav_menu from './components/Nav_menu/Nav_menu';
import Content from './components/Content/Content';
import { BrowserRouter } from "react-router-dom";
import Time from './components/Content/TimeFun/Time';

import ScrollToTop from './components/ScrollToTop/ScrollToTop ';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ScrollToTop>
          
          <Header />
          <div className="content_main">
            <div className='NavBAr_time'>
              <Nav_menu />
              <Time />
            </div>
            <Content />
          </div>

        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
