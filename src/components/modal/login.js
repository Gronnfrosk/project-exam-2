import { ModalInfo } from "./modal";
import loginSuccessSVG from "../../assets/images/login-customer";

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
          "Welcome! As a venue manager you can now start renting out venues."
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
