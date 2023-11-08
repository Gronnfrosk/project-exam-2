import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#FFED79",
    customer: "#2FD2F3",
    manager: "#ED6C02",
    dark: "#2b3035",
    white: "white",
  },
  customer: {
    primary: "#2FD2F3",
  },
  manager: {
    primary: "#ED6C02",
  },
  fonts: [],
  fontSizes: {
    small: "0.9rem",
    Medium: "1.0rem",
    large: "1.5rem",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
