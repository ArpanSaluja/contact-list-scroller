import React, { useState, useRef, useCallback } from 'react';
import ContactCard from './ContactCard';
import './ContactCardList.css';
import ContactJson from '../Mocks/contact.json';

const ContactCardList = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    console.log('last element');
    console.log('node '+node);
  })

    return (
     <div className="contactcard-list">
       {ContactJson.contacts.map((contact,index) => 
       {
         // Showing 10 contacts per page on the basis of pageNumber
        if(index >= pageNumber*10+1 && index<(pageNumber+1)*10)
         return <ContactCard key={index} contactData={contact} /> 
        if(index == (pageNumber+1)*10)
         return <ContactCard key={index} ref={lastBookElementRef} contactData={contact} /> 
      })}
     </div>
    );
}

export default ContactCardList;