
import React from 'react';
import "./ContactUs.css"
import Header2 from '../Header2';
import Footer from '../Footer';
export default function ContactUs() {
  return (
    <>
            <div className="mainContainer">
              <Header2 />
            </div>
    <div className="contact-us-container">
      {/* Header Section */}
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      </header>

    
      <div className="contact-us-content">
      
        <div className="contact-us-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

 
        <div className="detail">
            <div className="contact-us-details">
            <h2>Get in Touch</h2>
            <ul>
            <li>
              <strong>Email: </strong>
              <a href="mailto:satyamrajput@example.com">satyamrajput@gmail.com</a>
            </li>
                <li><strong>Phone:</strong> +91 7985916332</li>
                <li><strong>Address: </strong>Sector pi1 & pi2 ,  Greater Noida</li>
            </ul>
            </div>
            <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224488.94385851943!2d77.4362242!3d28.46027425000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGalgotias%20University!5e0!3m2!1sen!2sin!4v1736588269546!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
        </div>    
      </div>
    </div>
    <Footer/>
    </>
  );
}
