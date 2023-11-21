import { ModalInfo } from "./modal";

export default function viewLoginModal(formSuccess) {
  const modalContent =
    formSuccess === false ? (
      <ModalInfo
        userSuccess={"/"}
        showModalText={
          "Welcome! You can now start booking venues for your next trip."
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
