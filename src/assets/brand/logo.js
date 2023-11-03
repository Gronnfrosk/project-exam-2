import { LogoIcon } from "../icons/icons";
import { useTheme } from "styled-components";

export function BrandLogo() {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: `"Georgia", "sans-serif", "PT sans"`,
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <LogoIcon
        style={{
          color: `${theme.color.primary}`,
          fontSize: "1em",
          marginRight: "5px",
        }}
      />
      Holidaze
    </div>
  );
}
