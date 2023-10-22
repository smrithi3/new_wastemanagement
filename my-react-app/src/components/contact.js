import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server).
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="support">
        <h2>Support</h2>
        <p>If you have any questions or need assistance, please contact our support team:</p>
        <p>Email: support@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: sahyadri, adyar, mangalore</p>
        <p>Email: info@example.com</p>
        <p>Phone: 987-654-3210</p>
      </div>
    </div>
  );
}

export default Contact;