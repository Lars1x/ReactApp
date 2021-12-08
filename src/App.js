
import './Style.css';
import React from "react";
import news from './news';
import header from './header';
import navigation_menu from './nav_menu';
import aboutUs from './about_us';


  
function App() {
  return (
    <div className="wrapper">
        {header()}
        <div className="content_main">
            {navigation_menu()}
            {/* {news()} */}
            {aboutUs()}
        </div>
    </div>
  );
}

export default App;
