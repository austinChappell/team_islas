import React, { Component } from 'react';
import { navigate } from 'gatsby'
import TextField from '@material-ui/core/TextField';
import { css } from 'react-emotion';
import validator from 'validator';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

import { Button } from './shared';

const inputStyle = css({
  margin: '10px 0',
})

const FORM_NAME = 'contact';
const FORM_ACTION = `/${FORM_NAME}`;

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const body = encode({
      'form-name': FORM_NAME,
      ...this.state
    });
    console.log({ body });
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
      .then((res) => {
        console.log({ res })
        // navigate(FORM_ACTION)
      })
      .catch(error => alert(error));
  };

  render() {
    const {
      email,
      message,
      name,
      phone,
    } = this.state;

    const emailValid = validator.isEmail(email);
    const messageValid = validator.isLength(message.trim(), { min: 5 });
    const nameValid = validator.isLength(name.trim(), { min: 2 });
    const phoneValid = validator.isMobilePhone(phone);

    const formValid = emailValid && messageValid && nameValid && phoneValid;

    return (
      <form
        name={FORM_NAME}
        method="post"
        action={FORM_ACTION}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ padding: 20 }}
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <TextField
          className={inputStyle}
          id="name"
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          onChange={this.handleChange}
          value={name}
          variant="outlined"
        />

        <TextField
          className={inputStyle}
          id="email"
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          onChange={this.handleChange}
          type="email"
          value={email}
          variant="outlined"
        />

        <TextField
          className={inputStyle}
          id="phone"
          fullWidth
          label="Phone"
          margin="normal"
          name="phone"
          onChange={this.handleChange}
          type="tel"
          value={phone}
          variant="outlined"
        />

        <TextField
          className={inputStyle}
          id="message"
          fullWidth
          label="Message"
          margin="normal"
          multiline
          name="message"
          onChange={this.handleChange}
          rowsMax="4"
          value={message}
          variant="outlined"
        />

        <div style={{ textAlign: 'center', margin: 10 }}>
          <Button
            disabled={!formValid}
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    )
  }
}

export default ContactForm;
