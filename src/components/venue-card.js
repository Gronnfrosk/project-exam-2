import "./venue-card.scss";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { VenueCardIcons } from "../assets/icons/icons";
import { useTextLessener } from "../helpers/formatting/textSlice";

export default function VenueCard(props) {
  const { WifiIcon, ParkIcon, BreakfastIcon, PetIcon } = VenueCardIcons();
  const {
    id,
    name,
    description,
    media,
    price,
    maxGuests,
    rating,
    meta,
    location,
  } = props.data;

  const { wifi, parking, breakfast, pets } = meta;

  return (
    <Link to={`/${id}`} className="text-decoration-none">
      <Card>
        <div className="part-1">
          <Card.Img
            variant="top"
            src={media[0] ? media[0] : 'https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais'}
            className="img-fluid rounded-0"
            alt="A specific venue"
          />
          <div className="price">{price} kr/d</div>
        </div>
        <Card.Body>
          <div className="venue-description">
            <Card.Title>{useTextLessener(name, 50)}</Card.Title>
            <Card.Text className="h-50">Country: {location.country}</Card.Text>
            <div className="rating ms-2">
              Rating
              <div className="ms-2">{rating}</div>
              <div>/5</div>
            </div>
          </div>
          <div className="amenities">
            <small>Guests max. </small>
            <Card.Text className="count">{maxGuests}</Card.Text>
            <div className="amenity-list card-text">
              <div className={wifi === false ? "opacity-25" : ""}>
                {WifiIcon}
              </div>
              <div className={parking === false ? "opacity-25" : ""}>
                {" "}
                {ParkIcon}
              </div>
              <div className={breakfast === false ? "opacity-25" : ""}>
                {" "}
                {BreakfastIcon}
              </div>
              <div className={pets === false ? "opacity-25" : ""}>
                {PetIcon}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
