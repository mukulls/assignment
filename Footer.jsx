import React from 'react'
import './footer.css';
export const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="logo1">Mr. Arun</div>
        <div className="footer_content">
          <a href="about">About</a>
          <a href="courses">Courses</a>
          <a href="testimonials">Testimonials</a>
          <a href="enroll">Enroll Now</a>
        </div>
      </div>
      <div className="copyright"> © 2024 Mr. Arun's Journalism Course. All rights reserved.</div>
    </div>
  )
}
