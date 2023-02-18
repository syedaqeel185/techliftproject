import React from 'react';
import './maillist.css'

const MailList = () => {
  return (
    <div className='mail'>
         <h1 className='mailTitle'>Contact Us</h1>
         <span className='dsjdhsjdsjdhsjdhsjdjsdncncn'>Sign up and get amazing offers</span>
         <div className='mailInputContainer'>
            <input type="email" placeholder='Your Email' name="email" defaultValue=""/>
            <button type="">Send</button>
         </div>

    </div>
  );
}

export default MailList;
