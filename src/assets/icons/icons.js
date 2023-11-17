import { useTheme } from "styled-components";
import { BsSun, BsPersonFill } from "react-icons/bs";
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
  FaAngleRight,
  FaRegImage,
  FaSearch,
  FaTimes,
  FaWifi,
  FaParking,
  FaCoffee,
  FaPaw,
  FaTrashAlt,
} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { PiGearSixFill } from "react-icons/pi";

export function LogoIcon() {
  return (
    <BsSun style={{ color: "#FFED79", fontSize: "1em", marginRight: "5px" }} />
  );
}

export function AvatarIcon() {
  return <BsPersonFill />;
}

// Icons used in navbar for regular users and venue manager
export function NavbarIcon() {
  const UpcomingIcon = <FaEarthAfrica />;
  const PreviousIcon = <FaRegClock />;
  const Total = <FaThList />;

  const TotalVenueIcon = <FaThList className="me-2" />;
  const CreateIcon = <FaPlusCircle className="fs-6 me-2" />;

  const EditAvatar = <FaRegImage className="fs-6 me-2" />;

  return {
    UpcomingIcon,
    PreviousIcon,
    Total,
    CreateIcon,
    TotalVenueIcon,
    EditAvatar,
  };
}

// Social icons in the footer
export function FooterIcons() {
  const instaIcon = <FaInstagram className="fs-1 p-1" />;
  const pinterestIcon = <FaPinterest className="fs-1 p-1" />;
  const twitterIcon = <FaTwitter className="fs-1 p-1" />;
  const facebookIcon = <FaFacebookSquare className="fs-1 p-1" />;

  return { instaIcon, pinterestIcon, twitterIcon, facebookIcon };
}

// Icons displayed with the contact information
export function ContactIcons() {
  const theme = useTheme();

  const phoneIcon = (
    <FaPhoneAlt style={{ color: [theme.color.primary], fontSize: "1.25em" }} />
  );
  const mailIcon = (
    <FaEnvelope style={{ color: [theme.color.primary], fontSize: "1.4em" }} />
  );

  return { phoneIcon, mailIcon };
}

export function RightArrow() {
  return <FaAngleRight />;
}

export function InputIcons() {
  const SearchIcon = <FaSearch />;
  const XIcon = <FaTimes />;

  return { SearchIcon, XIcon };
}

export function VenueCardIcons() {
  const WifiIcon = <FaWifi />;
  const ParkIcon = <FaParking />;
  const BreakfastIcon = <FaCoffee />;
  const PetIcon = <FaPaw />;

  return { WifiIcon, ParkIcon, BreakfastIcon, PetIcon };
}

export function SpecificIcons() {
  const EditIcon = <PiGearSixFill />;
  const DeleteIcon = <FaTrashAlt />;

  return { EditIcon, DeleteIcon };
}
