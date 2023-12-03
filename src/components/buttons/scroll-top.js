import React, { useState, useEffect } from "react";
import { UpArrow } from "../../assets/icons/icons";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          zIndex: "2",
          border: "none",
          position: "fixed",
          bottom: "15px",
          right: "15px",
          fornSize: "50px",
          borderRadius: "100%",
          color: "white",
          backgroundColor: "var(--body_backgroundColor)",
          width: "40px",
          height: "40px",
        }}
      >
        <UpArrow />
      </button>
    )
  );
};

export default ScrollToTopButton;
