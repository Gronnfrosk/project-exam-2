import { LogoIcon } from "../icons/icons";

export function BrandLogo() {
  return (
    <div
      className="logo-container"
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
          color: `var(--primary_color)`,
          fontSize: "1em",
          marginRight: "5px",
        }}
      />
      Holidaze
    </div>
  );
}
