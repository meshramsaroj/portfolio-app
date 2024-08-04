import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const PreviewModal = ({ previewData }) => {
  const [show, setShow] = useState(false);
  const { fullName, message } = previewData;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        className="mx-3"
        onClick={handleShow}
        disabled={!Object.keys(previewData).length}
      >
        Preview <FontAwesomeIcon icon={faEye} />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Email Preview <FontAwesomeIcon icon={faEnvelope} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {message}
            <br />
            Regards, <br />
            {fullName}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewModal;
