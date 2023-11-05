import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./theme";
import GlobalLayout from "./layout/global";
import Main from "./pages/home/home";
import { ThemeMode } from "./components/user-color-theme";
//import RegisterPage from "./pages/registration/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeMode />
        <Theme>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/:id" element={<Main />} />
            </Route>
          </Routes>
        </Theme>
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
