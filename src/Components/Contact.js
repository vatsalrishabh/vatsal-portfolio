import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Contact = () => {
  return (
    <div id="Contact">
      <div className="Contact-top">
        <div className="Contact-heading">
          <h1>Contacts</h1>
        </div>
      </div>
      <div className="Contact-middle">
        <form action="">
            <div>
            <input type="text" name="name" placeholder="Name" /> <br />
            </div>

            <div>
            <input type="email" name="email" placeholder="Email" /> <br />
            </div>

            <div>
            <input type="text" name="message" placeholder="Message" /> <br />
            </div>

            <div className='Contact-middle-send'>
            <button>Send</button>
            </div>
        </form>
      </div>
      <div className="Contact-last">
        <div>
          <h1>Vatsal Rishabh</h1>
        </div>
        <div className='Contact-last-icons'>
         
         <div><a href='https://github.com/vatsalrishabh' target='_blank'><GitHubIcon/></a></div>
         <div > <a href='https://www.instagram.com/vatsal_rishabh/' target='_blank'><InstagramIcon/></a></div>  
         <div><a href='https://twitter.com/tech_zeus_' target='_blank'><XIcon/></a></div>
        </div>
        <div>
          <h3>© 2024 copyright all right reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
