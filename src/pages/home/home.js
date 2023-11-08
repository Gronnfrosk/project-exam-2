import "./home.scss";
import Form from "react-bootstrap/Form";
import { PrimaryButton } from "../../components/buttons/button.styles";
import { BrandLogo } from "../../assets/brand/logo";
import { InputBase } from "../../components/form-input";
import { InputIcons } from "../../assets/icons/icons";
import VenueCard from "../../components/venue-card";

function MainPage() {
  const { SearchIcon, XIcon } = InputIcons();
  return (
    <>
      <header>
        <div className="top-picture" alt="background of city at night">
          <div className="homeContainer">
            <BrandLogo />
            <a href="#booking" className="btn">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#2fd2f3" />
                    <stop offset="33%" stopColor="#ffed79" />
                    <stop offset="100%" stopColor="#ed6c02" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>Start Booking Adventure</span>
              <i class="arrow down"></i>
            </a>
          </div>
        </div>
        <h1 id="booking" className="text-center mt-4">
          Available bookings
        </h1>
      </header>
      <main>
        <section>
          <Form className="search">
            <InputBase
              placeholder={" Search here..."}
              type={"text"}
              label={""}
            />
            <div className="search-icon">{SearchIcon}</div>
          </Form>
        </section>
        <div class="divider dropdown-toggle gap-2 ps-3">Recent</div>
        <section>
          <VenueCard />
        </section>
        <section className="d-flex my-5 justify-content-center">
          <PrimaryButton> More </PrimaryButton>
        </section>
      </main>
    </>
  );
}

export default MainPage;

//        <div id="container">
//          <button className="learn-more">
//            <span className="circle" aria-hidden="true">
//              <span className="icon arrow"></span>
//            </span>
//            <span className="button-text">Learn More</span>
//          </button>
//        </div>
//      </header>
//      <div className="container">
//        <a href="http://marcel-pirnay.be/" className="btn">
//          <svg width="277" height="62">
//            <defs>
//                <linearGradient id="grad1">
//                    <stop offset="0%" stopColor="#FF8282"/>
//                    <stop offset="100%" stopColor="#E178ED" />
//                </linearGradient>
//            </defs>
//            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
//          </svg>
//          <span>Start Booking Adventure</span>
//        </a>
//      </div>
