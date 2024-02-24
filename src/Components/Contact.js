import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendMail = async () => {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.error('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Basic email validation
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        if (isValidEmail) {
            sendMail();
        } else {
            console.error('Invalid email address');
        }
    };

    return (
        <div id="Contact">
            <div className="Contact-top">
                <div className="Contact-heading">
                    <h1>Contacts</h1>
                </div>
            </div>
            <div className="Contact-middle">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /> <br />
                    </div>

                    <div>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> <br />
                    </div>

                    <div className='Contact-middle-message'>
                        <input type="textarea" name="message"  value={formData.message} onChange={handleChange} required /> <br />
                    </div>

                    <div className='Contact-middle-send'>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
            <div className="Contact-last">
                <div>
                    <h1>Vatsal Rishabh</h1>
                </div>
                <div className='Contact-last-icons'>
                    <div><a href='https://github.com/vatsalrishabh' target='_blank' rel="noreferrer"><GitHubIcon /></a></div>
                    <div> <a href='https://www.instagram.com/vatsal_rishabh/' target='_blank' rel="noreferrer"><InstagramIcon /></a></div>
                    <div><a href='https://twitter.com/tech_zeus_' target='_blank' rel="noreferrer"><XIcon /></a></div>
                </div>
                <div>
                    <h3>© 2024 copyright all right reserved</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
