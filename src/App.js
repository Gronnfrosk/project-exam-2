import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./theme";
import GlobalLayout from "./layout/global";
import Home from "./pages/home/home";
import SpecificVenuePage from "./pages/specific/specific-venue";
import { ThemeMode } from "./components/user-color-theme";
import LoginRegisterPage from "./pages/login&register/login-register";
import VenueList from "./pages/booking-venue-list/venue-list";
import BookingList from "./pages/booking-venue-list/booking-list";
import CreateVenue from "./pages/create-venue/create-venue";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeMode />
        <Theme>
          <Routes>

            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<SpecificVenuePage />} />
            </Route>
          </Routes>
        </Theme>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path="/*" element={<RouteNotFound />} />
