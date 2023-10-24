import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }

    // Display validation errors or submit the form
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit the form data (you can add your logic here)
      alert('Form submitted');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          className='form-control'
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="error">{formErrors.name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          className='form-control'
            type="email"
            id="email"
            name="email"
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="error">{formErrors.email}</div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
          className='form-control'
            id="message"
            name="message"
            placeholder='Enter A Message'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <div className="error">{formErrors.message}</div>
        </div>

        <button className='btn btn-dark' type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
