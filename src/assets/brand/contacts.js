import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { theme } from "../../colors";
import { ContactIcons } from "../icons/icons";

const { phoneIcon, mailIcon } = ContactIcons();

export default function Contact() {
  return (
    <>
      <div className="fs-5">Contact us</div>
      <div className="phoneNumber d-flex flex-row align-items-center">
        {phoneIcon}
        <div className="pt-3 mx-3">
          <p>
            +123 456 789 234 <br /> Phone
          </p>
        </div>
      </div>
      <div className="email d-flex flex-row align-items-center">
        {mailIcon}
        <div className="pt-3 mx-3">
          <p>
            holidaze.contact@mail.com
            <br />
            Email
          </p>
        </div>
      </div>
    </>
  );
}
