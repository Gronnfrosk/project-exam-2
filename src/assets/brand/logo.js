import { LogoIcon } from "../icons/icons";

export function BrandLogo() {
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
      <LogoIcon />
      Holidaze
    </div>
  );
}
