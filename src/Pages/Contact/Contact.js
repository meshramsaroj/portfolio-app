import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import PreviewModal from "../../Component/PreviewModal/PreviewModal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const toEmail = "sarojmeshram1911@gmail.com";
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    message: "",
  });

  const [previewData, setPreviewData] = useState({}) 

  const [formError, setFormError] = useState({
    fullName: "",
    emailId: "",
    message: "",
  });

  const [btnLoading, setBtnLoading] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState({
    message: "",
    flag: false, // failed or default
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      emailId: "",
      message: "",
    });
  };

  const handleFormError = () => {
    setFormError({
      ...formError,
      fullName: !formData.fullName ? "Full name is required!" : "",
      emailId: !formData.emailId ? "Email id is required!" : "",
      message: !formData.message ? "Message is required!" : "",
    });
  };

  const hideMessage = () => {
    setTimeout(() => {
      setSubmissionMessage("");
    }, 3000);
  };

  // used emailjs service to send mail to your connected mail account https://medium.com/kirsten-werner/using-a-react-form-to-send-information-directly-to-your-email-2c9666f0d63a
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, emailId, message } = formData;
    if (!fullName || !emailId || !message) {
      setSubmissionMessage({
        message: "Please fill required field data!",
        flag: false,
      });
      handleFormError();
      hideMessage();
      return;
    }
    setPreviewData(formData)
    setBtnLoading(true);
    handleFormError();

    const templateParams = {
      from_name: formData.emailId,
      to_name: toEmail,
      message: formData.message + `\nRegards, \n\n${formData.fullName}`,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          resetForm();
          setSubmissionMessage({
            message: "Email sent successfully!",
            flag: true,
          });
          hideMessage();
        },
        (error) => {
          setSubmissionMessage({
            message: "Failed to send email!",
            flag: false,
          });
          hideMessage();
        }
      )
      .finally(() => {
        setBtnLoading(false);
      });
  };

  const handlePreviewModal = (e)=> {
    console.log("called=")
    setShowPreviewModal(true)
    e.preventDefault();
  }

  return (
    <div>
      {submissionMessage.message && (
        <p
          className={`text-white py-2 text-center w-25 m-auto my-3 ${
            submissionMessage.flag ? "bg-success" : "bg-danger"
          }`}
        >
          {submissionMessage.message}
        </p>
      )}
      <Form>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <RequiredFormLabel label={"Full Name"} />
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={formData.fullName}
                name="fullName"
                onChange={handleFormChange}
                required
                onBlur={handleFormError}
              />
              <Form.Text className="text-danger">
                {formError.fullName}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="description.ControlTextarea1"
            >
              <RequiredFormLabel label={"Message"} />
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your massage here..."
                value={formData.message}
                name="message"
                onChange={handleFormChange}
                onBlur={handleFormError}
                required
              />
              <Form.Text className="text-danger">{formError.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <RequiredFormLabel label={"Email address"} />
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={formData.emailId}
                name="emailId"
                onChange={handleFormChange}
                onBlur={handleFormError}
                required
              />
              <Form.Text className="text-danger">{formError.emailId}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
       <section>
          <Button variant="info" type="submit"  onClick={handleFormSubmit}>
            Submit <FontAwesomeIcon icon={faEnvelope} />
            {btnLoading && <Spinner animation="border" size="sm" />}
          </Button>
          <PreviewModal previewData={previewData} />
       </section>
      </Form>
    </div>
  );
};

const RequiredFormLabel = ({ label }) => (
  <Form.Label>
    {label} <span className="text-danger">*</span>
  </Form.Label>
);

export default Contact;
