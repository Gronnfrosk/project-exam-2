import "./specific-venue.scss";
import {Helmet} from "react-helmet";
import mainTop from "../../assets/images/pexels-luis-leon-2564463.jpg";
import { VenueCardIcons, SpecificIcons } from "../../assets/icons/icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { AvatarImg } from "../../components/profile-avatar";
import ReactCalender from "../../components/calender/react-calender";
import {
  EditVenueBtn,
  DeleteVenueBtn,
} from "../../components/buttons/button.styles";

function SpecificVenuePage() {
  const { WifiIcon, ParkIcon, BreakfastIcon, PetIcon } = VenueCardIcons();
  const { EditIcon, DeleteIcon } = SpecificIcons();
  const BigCityApartment = " Big city apartment";
  const description = ("Info about the" + BigCityApartment)

  return (
    <>
    <Helmet>
      <title>Venue - Big city apartment</title>
      <meta name="description" content={description} />
    </Helmet>
    <main className="specific mb-5 mt-3">
      <section className="part-1">
        <Carousel fade data-bs-theme="dark">
          <Carousel.Item>
            <Image src={mainTop} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={mainTop} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={mainTop} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="price">
          <b>999</b> kr/d
        </div>
      </section>
      <section className="part-2 mt-4">
        <h1>Big city apartment</h1>
        <div className="d-flex flex-row align-items-center justify-content-between py-1  border-top border-bottom border-black">
          <div className="rating ps-3">
            Rating
            <div className="this-rating ms-2">5/</div>
            <div className="max-rating">5</div>
          </div>
          <div className="user-feature">
            <EditVenueBtn title="Edit venue">{EditIcon}</EditVenueBtn>
            <DeleteVenueBtn title="Delete venue">{DeleteIcon}</DeleteVenueBtn>
          </div>
          <div className="rating">
            Max guests: <div className="fw-bold ms-2 me-3">10</div>
          </div>
        </div>
      </section>
      <section className="part-3 d-flex flex-wrap justify-content-center gap-5 align-items-center">
        <div className="venue-location-amenities">
          <div className="venue-location">
            <div className="title">Location:</div>
            <div className="location-country-address">
              <div>Norway</div>
              Somwhere 42, <br />
              OverTheHils, <br />
              4242
            </div>
          </div>
          <div className="amenities">
            <div className="title">Amenities:</div>
            <ul className="amenity-list">
              <li className="list-group-item">{WifiIcon} Free WIFI</li>
              <li className="list-group-item">{ParkIcon} Parking available</li>
              <li className="list-group-item">
                {BreakfastIcon} Breakfast included
              </li>
              <li className="list-group-item">{PetIcon} Pets allowed</li>
            </ul>
          </div>
          <div className="w-100 me-5">
            <div className="title my-2">Description:</div>
            Relax and enjoy a good view over the city. This is a big Apartment
            in the city...
          </div>
          <div className="w-100 me-5">
            General booking info: On this site you can book a venue a year into
            the future. Also each day you book starts 12 PM and ends after 24
            hours
          </div>
        </div>
        <div className="venue-manager-profile">
          <AvatarImg
            Name={"John Doe"}
            UserType={"Venue manager"}
            Email={"john@mail.com"}
          />
        </div>
      </section>
      <section className="part-4 mt-5">
        <h2 className="fw-bold text-center mb-2 text-center position-relative">
          Start booking today
        </h2>
        <ReactCalender Guests={10} UserStatus={false} />
      </section>
    </main>
    </>
  );
}

export default SpecificVenuePage;
