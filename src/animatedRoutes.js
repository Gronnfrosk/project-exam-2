import GlobalLayout from "./layout/global";
import Home from "./pages/home/home";
import SpecificVenuePage from "./pages/specific/specific-venue";
import LoginRegisterPage from "./pages/login&register/login-register";
import MyList from "./pages/booking-venue-list/my-list";
import CreateVenue from "./pages/create-venue/create-venue";
import UpdateVenue from "./pages/update-venue/update-venue";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/create-venue" element={<CreateVenue />} />
          <Route path="/update-venue/:venueId" element={<UpdateVenue />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/:id" element={<SpecificVenuePage />} />
          <Route path="/*" element={<SpecificVenuePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
