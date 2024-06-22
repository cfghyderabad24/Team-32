import React, { useState } from 'react';
import './Feedback.css'; // Assuming you have a CSS file for styling

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display it
    console.log('Form submitted:', { name, phone, feedback });

    // Optionally, you can clear the form fields after submission
    setName('');
    setPhone('');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      <h2>Kindly share your views !</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"  
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>  
        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            className="form-control"
            id="feedback"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
