import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollPage() {
  const location = useLocation();

  useEffect(() => {
    const attemptScroll = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    const delay = 600;
    setTimeout(attemptScroll, delay);
  }, [location]);

  return null;
}
