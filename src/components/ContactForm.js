import React, { Component } from 'react';
import { navigateTo } from "gatsby-link";
import TextField from '@material-ui/core/TextField';
import { css } from 'react-emotion';
import validator from 'validator';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

import { Button } from './shared';

const inputStyle = css({
  margin: '10px 0',
})

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
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
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
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ padding: 20 }}
      >
        <input type="hidden" name="form-name" value="contact" />
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
