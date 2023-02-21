import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="row container-fluid my-5 py-2 footer-border">
       
        <div className='col-sm-4 '>
         <h3 className='mb-3'>Vision Techno Services</h3>
         <p>
         Vision Techno Services (P). Ltd. is an fast growing Software Development and eLearning Training solutions Company with young innovative minds.
         </p>
        </div>
        <div className='col-sm-4'>
        <h3 className='mb-3'>Get In Touch</h3>
        <h6>VISION TECHNO SERVICES PRIVATE LIMITED.</h6>
        <hr />
        <p>JPTS, MALLAPUR,</p>
        <p>HYDERABAD,500076.</p>
        <p>+91 6309351929.</p>
        <hr />
        <p>Office No: 51, 3rd Floor,</p>
        <p>B wing KK Market, Dhankawadi,</p>
        <p>PUNE, 411037.</p>
        <p>+91 7887422582</p>
        <hr />
        <p>info@visiontechnos.com.</p>
        </div>
        <div className='col-sm-4'>
        <h3 className='mb-3'>Services</h3>
        <ul>
          <li>
          Web Design and Development</li>
          <li>Console Application Development</li>
          <li>Mobile Application Development</li>
          <li>e-Learning</li>
        </ul>
        </div>
      </div>
      <div className='pb-3'>&copy;2016 Vision Techno Services | All Rights Reserved.</div>
    </div>
  )
}
