import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function useModal({
  content = "",
  heading = "",
  secondaryAction = {
    label: "Cancel",
    action: () => {},
    hidden: false,
  },
  primaryAction = {
    label: "Save",
    action: () => {},
    hidden: false,
  },
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        {!secondaryAction.hidden && (
          <Button
            className="cancelbtn"
            variant="secondary"
            onClick={() => {
              handleClose();
              secondaryAction.action();
            }}
          >
            {secondaryAction.label}
          </Button>
        )}
        {!primaryAction.hidden && (
          <Button
            style={{ background: "#0068ff" }}
            variant="primary"
            onClick={() => {
              handleClose();
              primaryAction.action();
            }}
          >
            {primaryAction.label}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
  return {
    handleShow,
    handleClose,
    modal,
  };
}
