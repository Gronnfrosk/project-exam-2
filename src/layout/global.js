import { Outlet } from "react-router-dom";
import { CollapsibleNavbar } from "./navbar";
import Footer from "./footer";

export default function GlobalLayout() {
  return (
    <>
      <CollapsibleNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
