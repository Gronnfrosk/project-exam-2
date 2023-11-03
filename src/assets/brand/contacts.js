import { ContactIcons } from "../icons/icons";

export default function Contact() {
  const { phoneIcon, mailIcon } = ContactIcons();

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
