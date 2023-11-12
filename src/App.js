import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./theme";
import GlobalLayout from "./layout/global";
import Home from "./pages/home/home";
import SpecificVenuePage from "./pages/specific/specific-venue";
import { ThemeMode } from "./components/user-color-theme";
//import RegisterPage from "./pages/registration/register";
import VenueList  from "./pages/booking-venue-list/venue-list"
import BookingList from "./pages/booking-venue-list/booking-list"
import CreateVenue from "./pages/create-venue/create-venue"
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Helmet>
        <title>Home - Holidaze</title>
        <meta name="description" content="Get info about available bookings"/>
        <meta name="keywords" content="Booking, Venues, Travel, Holiday" />
      </Helmet>
        <ThemeMode />
        <Theme>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/venue-list" element={<VenueList />} />
              <Route path="/booking-list-upcoming" element={<BookingList />} />
              <Route path="/booking-list-previous" element={<BookingList />} />
              <Route path="/booking-list-total" element={<BookingList />} />       
              <Route path="/create-venue" element={<CreateVenue />} />
              <Route path="/test" element={<SpecificVenuePage />} />
              <Route path="/*" element={<SpecificVenuePage />} />
            </Route>
          </Routes>
        </Theme>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path="/*" element={<RouteNotFound />} />

