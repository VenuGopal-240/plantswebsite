// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container my-4" style={{marginTop:"5rem"}}>
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
