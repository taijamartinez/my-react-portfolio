import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate in real-time while typing
    validateField(name, value);
  };

  // Validate a single field
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (name === "name" && !value.trim()) {
      newErrors.name = "Name is required!";
    } else {
      delete newErrors.name;
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required!";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        newErrors.email = "Invalid email format!";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "message" && !value.trim()) {
      newErrors.message = "Message is required!";
    } else {
      delete newErrors.message;
    }

    setErrors(newErrors);
  };

  // Validate Form Before Submission
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required!";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <Container className="contact-form-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="contact-heading text-center">Contact Me</h1>

          {/* Success Message */}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
            {/* Name Field */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={(e) => validateField("name", e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField("email", e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            {/* Message Field */}
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                onBlur={(e) => validateField("message", e.target.value)}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="dark" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
