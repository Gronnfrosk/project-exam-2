import "./specific-venue.scss";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_URL_VENUES } from "../../services/api/constants";
import useAllVenues from "../../services/api/venues";
import { VenueCardIcons, SpecificIcons } from "../../assets/icons/icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { AvatarImg } from "../../components/profile-avatar";
import ReactCalender from "../../components/calender/user";
import CustomerCalender from "../../components/calender/customer";
import CalenderManager from "../../components/calender/venue-manager";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditVenueBtn,
  DeleteVenueBtn,
} from "../../components/buttons/button.styles";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import deleteVenue from "../../services/api/delete-venue";
import { load } from "../../utilities/save_load_remove_local_storage";
import { ModalInfo } from "../../components/modal/modal";
import loginManagerSuccessSVG from "../../assets/images/login-manager";

function SpecificVenuePage() {
  const params = useParams();
  const navigate = useNavigate();
  const profile = load("profile");
  const userStatus = load("venueManager");
  const [modal, setModal] = useState(false);
  const urlBase = `${API_URL_VENUES}/${params.id}`;
  const url = `${urlBase}?_owner=true&_bookings=true`;
  const [data, isLoading, isError] = useAllVenues(url);

  const handleEditClick = () => {
    navigate(`/update-venue/${params.id}`);
  };

  const handleDelete = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDeleteVenue = async () => {
    try {
      await deleteVenue(params.id);
      console.log("Venue deleted successfully");
      navigate("/my-list");
    } catch (error) {
      console.error("Error deleting venue:", error);
      alert("Error deleting venue: " + error.message);
      setModal(false);
    }
  };

  const { WifiIcon, ParkIcon, BreakfastIcon, PetIcon } = useMemo(
    () => VenueCardIcons(),
    [],
  );
  const { EditIcon, DeleteIcon } = useMemo(() => SpecificIcons(), []);

  if (isLoading) {
    return <SpinnerLoad />;
  }
  
  if (isError) {
    console.log("Rendering due to isError");
    return <ErrorLoad />;
  }

  return data.name ? (
    <>
      <Helmet>
        <title>Venue - {data.name}</title>
        <meta name="description" content={`Info about the venue - ${data?.name}`} />
      </Helmet>
      <main className="specific mb-5 mt-3">
        <section className="part-1">
          {data.media && data.media.length > 0 ? (
            <Carousel fade data-bs-theme="dark">
              {data.media.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} alt="Image of venue" />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Image
              src={
                "https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais"
              }
              style={{
                height: "100%",
                margin: "auto",
              }}
              alt="No image of venue"
            />
          )}
          <div className="price">
            <b>{data.price}</b> kr/d
          </div>
        </section>
        <section className="part-2 mt-4">
          <h1>{data.name}</h1>
          <div className="d-flex flex-row align-items-center justify-content-between py-1  border-top border-bottom border-black">
            <div className="rating ps-3">
              Rating
              <div className="this-rating ms-2">{data.rating}/</div>
              <div className="max-rating">5</div>
            </div>
            {profile && profile.name === data.owner.name ? (
              <div className="user-feature">
                <EditVenueBtn title="Edit venue" onClick={handleEditClick}>
                  {EditIcon}
                </EditVenueBtn>
                <DeleteVenueBtn title="Delete venue" onClick={handleDelete}>
                  {DeleteIcon}
                </DeleteVenueBtn>

                {modal && (
                  <ModalInfo
                    userSuccess={"/"}
                    confirmDelete={true}
                    closeModal={closeModal}
                    onConfirmDelete={handleDeleteVenue}
                    showModalText={
                      <div className="d-flex flex-column text-center">
                        {loginManagerSuccessSVG}
                      </div>
                    }
                    ModalTitle={"Are you sure you want to delete this venue?"}
                  />
                )}
              </div>
            ) : (
              ""
            )}
            <div className="rating">
              Max guests:{" "}
              <div className="fw-bold ms-2 me-3">{data.maxGuests}</div>
            </div>
          </div>
        </section>
        <section className="part-3 d-flex flex-wrap justify-content-center gap-5 align-items-center">
          <div className="venue-location-amenities">
            <div className="venue-location">
              <div className="title">Location:</div>
              <div className="location-country-address">
                <div>{data.location.country}</div>
                {data.location.address}, <br />
                {data.location.city}, <br />
                {data.location.zip}
              </div>
            </div>
            <div className="amenities">
              <div className="title">Amenities:</div>
              <ul className="amenity-list">
                <li
                  className={
                    data.meta.wifi === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {" "}
                  {WifiIcon} Free WIFI
                </li>
                <li
                  className={
                    data.meta.parking === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {ParkIcon} Parking available
                </li>
                <li
                  className={
                    data.meta.breakfast === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {BreakfastIcon} Breakfast included
                </li>
                <li
                  className={
                    data.meta.pets === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : "list-group-item"
                  }
                >
                  {" "}
                  {PetIcon} Pets allowed
                </li>
              </ul>
            </div>
            <div className="w-100 mx-auto">
              <div className="title my-2">Description:</div>
              {data.description}
            </div>
            <div className="w-100">
              <u>General booking info:</u> On this site you can book a venue a year
              into the future. At this venue it is posssible to checkin after
              13:00 and checkout must be before 11:00.
            </div>
          </div>
          <div className="venue-manager-profile mx-4">
            <AvatarImg
              Avatar={data.owner.avatar}
              Name={data.owner.name}
              UserType={"Venue manager"}
              Email={data.owner.email}
              specific={true}
            />
          </div>
        </section>
        <section className="part-4 mt-5">
          {userStatus === false ? (
            <CustomerCalender userStatus={userStatus} venueData={data} />
          ) : userStatus === true && profile.name === data.owner.name ? (
            <CalenderManager userStatus={userStatus} venueData={data} />
          ) : (
            <ReactCalender userStatus={userStatus} venueData={data} />
          )}
        </section>
      </main>
    </>
  ) : (
    <ErrorLoad />
  );
}

export default SpecificVenuePage;
