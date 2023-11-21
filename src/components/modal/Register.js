
import { ModalInfo } from "./modal";

export default function viewRegisterModal(formSuccess, change) {
  const modalContent =
    formSuccess === false ? (
      <ModalInfo
        registerSuccess={change}
        showModalText={
          "Welcome! You can now login and start booking venues for your next trip."
        }
        ModalTitle={"You have successfuly logged in"}
      />
    ) : formSuccess === true ? (
      <ModalInfo
        registerSuccess={change}
        showModalText={
          "Welcome! You can now login as a venue manager and start renting out venues."
        }
        ModalTitle={"You have successfuly logged in"}
      />
    ) : formSuccess === null ? (
      <ModalInfo
        userError={true}
        showModalText={
          "Error! Something went wrong. User may already be registered."
        }
        ModalTitle={"Failed user registrating"}
      />
    ) : (
      ""
    );

  return modalContent;
}
