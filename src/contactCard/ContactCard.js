import React from 'react';
import './ContactCard.css';

const ContactCard = ({contactData}) => {
    return (
     <div className="contact-card">
       <div className="left-section">
         <img src={contactData.avatar} className="avatar" />
       </div>
       <div className="right-section">
        <div className="name">{contactData.firstName} {contactData.lastName}</div>
        <div className="email">{contactData.email}</div>
        <div className="phone">Call me @ {contactData.phoneNumber}</div>
        <div className="area">{contactData.country}</div>
        <div className="position">{contactData.designation} @ {contactData.company}</div>
       </div>
     </div>
    );
}


export default ContactCard;