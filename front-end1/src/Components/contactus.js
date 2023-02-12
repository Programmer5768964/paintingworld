import React from 'react';


const ContactUs = ()=>{
    return (
        <div className='register'>
            <h1>Contact Us</h1>

            <input className='SignupBox' type="text" placeholder="Enter name" />
            <input className='SignupBox' type="text" placeholder="Enter email" />
            <input className='SignupBox' type="phone" placeholder="Enter phone number" />
            <textarea className='SignupBox' type="message" placeholder="Write from here..." />
            <button className='btn' type='btn' >Submit</button>

        </div>

    )
}

export default ContactUs;