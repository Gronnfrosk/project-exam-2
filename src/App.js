import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter} from "react-router-dom";
import { ThemeMode } from "./components/user-color-theme";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollPage from "./utilities/scroll-page";
import AnimatedRoutes from "./animatedRoutes"

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
            <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
