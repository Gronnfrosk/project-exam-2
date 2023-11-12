import "./venue-card.scss";
import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";
import Card from "react-bootstrap/Card";
import { VenueCardIcons } from "../assets/icons/icons";

export default function VenueCard() {
  const { WifiIcon, ParkIcon, BreakfastIcon, PetIcon } = VenueCardIcons();

  return (
    <Card>
      <div className="part-1">
        <Card.Img
          variant="top"
          src={mainTop}
          className="img-fluid rounded-0"
          alt="A specific venue"
        />
        <div className="price">999 kr/d</div>
      </div>
      <Card.Body>
        <div className="venue-description">
          <Card.Title>Big city apartment</Card.Title>
          <Card.Text className="pt-2">
            Relax and enjoy a good view over the city. This is a big Apartment
            in the city...
          </Card.Text>
          <div className="rating ms-2">
            Rating
            <div className="this-rating ms-2">5/</div>
            <div className="max-rating">5</div>
          </div>
        </div>
        <div className="amenities">
          <small>Max guests</small>
          <Card.Text className="count">10</Card.Text>
          <Card.Text className="amenity-list">
            {WifiIcon} {ParkIcon} {BreakfastIcon} {PetIcon}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
