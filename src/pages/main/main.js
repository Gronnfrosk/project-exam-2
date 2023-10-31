import mainTop from "../../assets/images/pexels-luis-leon-2564463.jpg";
import { PrimaryButton } from "../../components/buttons/button.styles";

function MainPage() {
  return (
    <div className="">
      <img
        src={mainTop}
        alt="background of city at night"
        style={{ height: "300px" }}
      />
      <h1>Available bookings</h1>
      <PrimaryButton> Click me </PrimaryButton>
    </div>
  );
}

export default MainPage;
