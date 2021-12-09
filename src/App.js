
import './Style.css';
import React from "react";
import Header from './components/Header/Header';
import Nav_menu from './components/Nav_menu/Nav_menu';
import Content from './components/Content/Content';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import News from './components/Content/News/News';


  
function App() {
  return (
      <div className="wrapper">
        {Header()}
        <div className="content_main">
          <BrowserRouter>
              {Nav_menu()}
              {Content()}
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
