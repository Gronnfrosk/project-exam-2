import { ModalInfo } from "./modal";

export default function viewRegisterModal(formResult) {
  const modalContent =
    formResult === null ? (
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
