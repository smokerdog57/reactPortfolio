// /src/components/contact.jsx v0.98

// import dependencies
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Perform validation checks on blur
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        newErrors.name = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        newErrors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'message':
        newErrors.message = value.trim() === '' ? 'Message is required' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const isFormValid = () => {
    // Check if there are no errors in the errors object
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the form is valid
    if (isFormValid()) {
      // If all checks pass, you can proceed with submitting the form or other actions
      // For now, let's just log the form data to the console
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <div className="error-message">{errors.name}</div>
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Email validation pattern
            required
          />
          <div className="error-message">{errors.email}</div>
        </div>

        <div className={`form-group ${errors.message ? 'error' : ''}`}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          ></textarea>
          <div className="error-message">{errors.message}</div>
        </div>

        <button type="submit" className="submit-button" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
