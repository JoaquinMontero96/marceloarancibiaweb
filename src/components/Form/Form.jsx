import React, { useState } from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_8yw4emt', 'template_ffg3jsp', event.target, 's_YsfARjJGQEled-p')
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <form action="contact.php" method="POST" id='form' onSubmit={handleSubmit}>
      <label>
        <p>NOMBRE (*)</p>
        <input name='name' type="text" value={name} onChange={(event) => setName(event.target.value)} required/>
      </label>
      <label>
        <p>EMAIL (*)</p>
        <input name='email' type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
      </label>
      <label>
        <p>ASUNTO (*)</p>
        <input name='subject' type="text" value={subject} onChange={(event) => setSubject(event.target.value)} required/>
      </label>
      <label>
        <p>MENSAJE (*)</p>
        <textarea name='message' value={message} onChange={(event) => setMessage(event.target.value)} required/>
      </label>
      <div class="g-recaptcha" data-sitekey="6LdnXCMlAAAAAAuEBSre5hz96E5PCUyAjKNmvzbI"></div>
      <button className='sendBtn' type="submit">ENVIAR</button>
    </form>
  );
};

export default Form
