import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layout/global";
import Home from "./pages/home/home";
import SpecificVenuePage from "./pages/specific/specific-venue";
import { ThemeMode } from "./components/user-color-theme";
import LoginRegisterPage from "./pages/login&register/login-register";
import MyList from "./pages/booking-venue-list/my-list";
import CreateVenue from "./pages/create-venue/create-venue";
import { Helmet, HelmetProvider } from "react-helmet-async";
import UpdateVenue from "./pages/update-venue/update-venue";
import ScrollPage from "./helpers/scroll-page";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Helmet>
            <title>Home - Holidaze</title>
            <meta
              name="description"
              content="Get info about available bookings"
            />
            <meta name="keywords" content="Booking, Venues, Travel, Holiday" />
          </Helmet>
          <ThemeMode />
            <ScrollPage />
            <Routes>
              <Route path="/" element={<GlobalLayout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/my-list" element={<MyList />} />
                <Route path="/create-venue" element={<CreateVenue />} />
                <Route
                  path="/update-venue/:venueId"
                  element={<UpdateVenue />}
                />
                <Route path="/login-register" element={<LoginRegisterPage />} />
                <Route path="/:id" element={<SpecificVenuePage />} />
                <Route path="/*" element={<SpecificVenuePage />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
//<Route path="/*" element={<RouteNotFound />} />
