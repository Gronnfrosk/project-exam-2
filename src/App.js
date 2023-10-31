import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Main from "./pages/main/main";

//import { ReactCalender } from "./components/calender/react-calender.js"<ReactCalender />
//import { loginPage } from "./pages/login/login.js"
//import { BlueButton, GreenButton, RedButton } from "./components/button.styles"
//import { Button, BaseButton, PrimaryButton } from "./components/button.styles"

//import MainPage from "./pages/main/main"

import { theme } from "./colors";
import GlobalLayout from  "./layout/global"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/:id" element={<Main />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path="/*" element={<RouteNotFound />} />

//<header className="App-header">
//        <div id="container">
//          <button className="learn-more">
//            <span className="circle" aria-hidden="true">
//              <span className="icon arrow"></span>
//            </span>
//            <span className="button-text">Learn More</span>
//          </button>
//        </div>
//      </header>
//      <div className="container">
//        <a href="http://marcel-pirnay.be/" className="btn">
//          <svg width="277" height="62">
//            <defs>
//                <linearGradient id="grad1">
//                    <stop offset="0%" stopColor="#FF8282"/>
//                    <stop offset="100%" stopColor="#E178ED" />
//                </linearGradient>
//            </defs>
//            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
//          </svg>
//          <span>Welcome in my world</span>
//        </a>
//      </div>
