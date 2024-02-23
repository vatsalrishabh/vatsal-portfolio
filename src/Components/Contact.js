import React from 'react';

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
          <input type="text" name="name" placeholder="Name" /> <br />
          <input type="email" name="email" placeholder="Email" /> <br />
          <input type="text" name="message" placeholder="Message" /> <br />
          <button>Send</button>
        </form>
      </div>
      <div className="Contact-last">
        <div>
          <h1>Vatsal Rishabh</h1>
        </div>
        <div>
          <img src="" alt="instagram" />
          <img src="" alt="twitter" />
          <img src="" alt="github" />
        </div>
        <div>
          <h1>© 2021 copyright all right reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
