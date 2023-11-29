import { ModalInfo } from "./modal";
import loginSuccessSVG from "../../assets/images/login-customer";
import loginManagerSuccessSVG from "../../assets/images/login-manager";

export default function viewLoginModal(formSuccess) {
  const modalContent =
    formSuccess === false ? (
      <ModalInfo
        userSuccess={"/"}
        showModalText={
          <div className="d-flex flex-column text-center">
            {" "}
            Welcome!
            {loginSuccessSVG}
            You can now start booking venues for your next trip!
          </div>
        }
        ModalTitle={"You have successfuly logged in"}
      />
    ) : formSuccess === true ? (
      <ModalInfo
        userSuccess={"/"}
        showModalText={
          <div className="d-flex flex-column text-center">
            {" "}
            Welcome!
            {loginManagerSuccessSVG}
            As a venue manager you can now start renting out venues.
          </div>
        }
        ModalTitle={"You have successfuly logged in"}
      />
    ) : formSuccess === null ? (
      <ModalInfo
        userError={true}
        showModalText={
          "Error! You have entered invalid username or password combination."
        }
        ModalTitle={"Invalid login credentials"}
      />
    ) : (
      ""
    );

  return modalContent;
}
