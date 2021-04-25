import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { Grid } from '../../../layout/layout.styles';
import { CF, CFInput, CFTextArea } from './contact.styles';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const ContactForm = () => {
  const [state, setState] = useState({});
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
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <CF onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <Grid columns="1fr 1fr">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <CFInput name="name" onChange={handleChange} type="text" placeholder="Name" />
        <CFInput name="email" onChange={handleChange} type="email" placeholder="Email" />
      </Grid>
      <CFTextArea name="message" onChange={handleChange} placeholder="Write message" />
      <Button>
        Submit
      </Button>
      {error ? <div>Oops...something went wrong! Please, try again.</div> : null}
    </CF>
  );
};
