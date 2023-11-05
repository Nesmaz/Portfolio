import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.scss';
import { FiPhoneCall } from 'react-icons/fi';
import { SiMaildotru } from 'react-icons/si'
import w from '/root/react/nesmazportfolio/src/assets/whatsapp.png';
import l from '/root/react/nesmazportfolio/src/assets/linkedin.png';
import g from '/root/react/nesmazportfolio/src/assets/github.png';
import d from '/root/react/nesmazportfolio/src/assets/discordd.png';

const Contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ckoljg9', 'template_nr4c9gd', form.current, 'inOS1N0--BS7hZ3rP')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });

          setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    };
    
    return (
      <div className='sec contact' id="contact">
        <div className='str'></div>
        <h3>Contact</h3>
        <div className="c-wrapper">

          <div className="info">
              <div className="num tab">
                <a href='tel:+201121365836' target="_blank" rel="noopener noreferrer">
                  <FiPhoneCall />
                  <p>+201121365836</p>
                </a>
              </div>

              <div className="mail tab">
                <a href='mailto:nesmabdelazim@gmail.com'target="_blank" rel="noopener noreferrer">
                  <SiMaildotru/>
                  <p>nesmabdelazim@gmail.com</p>
                </a>
              </div>

              <div className="links">
                <a href='https://www.linkedin.com/in/nesma-abdelazim/' target="_blank" rel="noopener noreferrer"><img alt='icon' src={l} width={30}></img></a>
                <a href='https://github.com/Nesmaz' target="_blank" rel="noopener noreferrer"><img alt='icon' src={g} width={30}></img></a>
                <a href='https://wa.me/+201121365836' target="_blank" rel="noopener noreferrer"><img alt='icon' src={w} width={30}></img></a>
                <a href='https://discord.com/users/nesmah' target="_blank" rel="noopener noreferrer"><img alt='icon' src={d} width={30} /></a>
              </div>
          </div>


          <form ref={form} onSubmit={sendEmail}>
              <div className='name field'>
                {/* <label>Name</label> */}
                <input type="text" name="user_name" placeholder='Enter your name' required/>
              </div>

              <div className="email field">
                {/* <label>Email</label> */}
                <input type="email" name="user_email" placeholder='Enter your e-mail' required/>
              </div>

              <div className='msg'>
                {/* <label>Message</label> */}
                <textarea name="user_message" rows="6" cols="40" placeholder='Write your message' required/>
              </div>
              <div className="sub">
                <input type="submit" value="Send"/>
              </div>
              {isSubmitted && (
              <div>
                <p>Your message has been sent successfully</p>
              </div>
            )}
          </form>
        </div>
      </div>
    );

}

export default Contact