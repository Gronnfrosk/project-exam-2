import { theme } from "../brand/colors";
import { BsSun } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaPhoneAlt,
  FaEnvelope,
  FaThList,
  FaRegClock,
  FaPlusCircle,
} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

export function LogoIcon() {
  return (
    <BsSun style={{ color: "#FFED79", fontSize: "1em", marginRight: "5px" }} />
  );
}

export function NavbarIcon() {
  const upcomingIcon = (
    <FaEarthAfrica className="me-1" style={{ color: [theme.color.customer] }} />
  );
  const previousIcon = (
    <FaRegClock className="me-1" style={{ color: [theme.color.customer] }} />
  );
  const totalIcon = (
    <FaThList className="me-2" style={{ color: [theme.color.customer] }} />
  );
  const totalVenueIcon = (
    <FaThList className="me-2" style={{ color: [theme.color.manager] }} />
  );
  const createIcon = (
    <FaPlusCircle
      className="fs-6 me-2"
      style={{ color: [theme.color.manager] }}
    />
  );

  return { upcomingIcon, previousIcon, totalIcon, createIcon, totalVenueIcon };
}

export function FooterIcons() {
  const instaIcon = <FaInstagram className="fs-2 p-1" />;
  const pinterestIcon = <FaPinterest className="fs-2 p-1" />;
  const twitterIcon = <FaTwitter className="fs-2 p-1" />;
  const facebookIcon = <FaFacebookSquare className="fs-2 p-1" />;

  return { instaIcon, pinterestIcon, twitterIcon, facebookIcon };
}

export function ContactIcons() {
  const phoneIcon = (
    <FaPhoneAlt style={{ color: [theme.color.primary], fontSize: "1.25em" }} />
  );
  const mailIcon = (
    <FaEnvelope style={{ color: [theme.color.primary], fontSize: "1.4em" }} />
  );

  return { phoneIcon, mailIcon };
}
