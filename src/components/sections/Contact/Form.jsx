import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { Grid } from '../../../layout/layout.styles';
import {
  CF, CFError, CFInput, CFSuccess, CFTextArea,
} from './contact.styles';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const ContactForm = () => {
  const [state, setState] = useState({});
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        setState({});
        setMessage('Your message has been sent!');
        setTimeout(() => { setMessage(null); }, 5000);
      })
      .catch(() => {
        setError('Oops...something went wrong! Please, try again.');
        setTimeout(() => { setError(null); }, 5000);
      });
  };

  return (
    <CF onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <Grid columns="1fr 1fr">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <CFInput required name="name" onChange={handleChange} type="text" placeholder="Name" />
        <CFInput required name="email" onChange={handleChange} type="email" placeholder="Email" />
      </Grid>
      <CFTextArea required name="message" onChange={handleChange} placeholder="Write message" />
      <Button>
        Submit
      </Button>
      {message ? <CFSuccess>{message}</CFSuccess> : null}
      {error ? <CFError>{error}</CFError> : null}
    </CF>
  );
};
