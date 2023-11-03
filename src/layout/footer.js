import { BrandLogo } from "../assets/brand/logo";
import FooterSVG from "../assets/images/footer-image";
import Contact from "../assets/brand/contacts";
import { FooterIcons } from "../assets/icons/icons";
import { PrimaryLink } from "../components/links";

function Footer() {
  const { instaIcon, pinterestIcon, twitterIcon, facebookIcon } = FooterIcons();

  return (
    <>
      {FooterSVG}
      <footer className="text-light bg-dark fs-6 w-100" data-bs-theme="dark">
        <div className="py-4 mx-auto " style={{ maxWidth: "1320px" }}>
          <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
            <div>
              <BrandLogo />
              <div
                style={{
                  maxWidth: "800px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "25px",
                  padding: "25px",
                  margin: "20px 30px 0 30px",
                  border: "5px solid #FFED79",
                }}
              >
                We are a newly launched accommodation booking site called
                Holidaze. Book holidays at a venue or register and manage venues
                and bookings at those venues.
              </div>
            </div>
            <div className="ms-5 mt-4 ps-5">
              <Contact />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center mb-3">
          <PrimaryLink href="https://www.instagram.com/">
            {instaIcon}
          </PrimaryLink>
          <PrimaryLink href="https://no.pinterest.com/">
            {pinterestIcon}
          </PrimaryLink>
          <PrimaryLink href="https://twitter.com/">{twitterIcon}</PrimaryLink>
          <PrimaryLink href="https://www.facebook.com/">
            {facebookIcon}
          </PrimaryLink>
        </div>
        <p className="text-center mb-0 pb-1">&copy; 2023 Holidaze</p>
      </footer>
    </>
  );
}

export default Footer;
