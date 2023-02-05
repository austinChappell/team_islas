import React, { Component } from 'react';
import validator from 'validator';
import { Button, TextField } from '@mui/material';

import './ContactForm.css';

import {
  Heading3,
} from './shared';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
    name: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      email,
      message,
      name,
    } = this.state;

    const emailValid = validator.isEmail(email);
    const messageValid = validator.isLength(message.trim(), { min: 5 });
    const nameValid = validator.isLength(name.trim(), { min: 2 });

    const formValid = emailValid && messageValid && nameValid;

    return (
      <div style={{ marginTop: 20 }}>
        <div style={{ marginBottom: 10, textAlign: 'center' }}>
          <Heading3>
            Get In Touch
          </Heading3>
        </div>

        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input
                name="bot-field"
                onChange={(e) => this.handleChange(e)}
                />
            </label>
          </p>

          <TextField
            className="contact-form-input"
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={this.handleChange}
            value={name}
            variant="outlined"
          />
          <TextField
            className="contact-form-input"
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={this.handleChange}
            value={email}
            variant="outlined"
          />
          <TextField
            className="contact-form-input"
            fullWidth
            label="Message"
            margin="normal"
            multiline
            name="message"
            onChange={this.handleChange}
            rows={4}
            value={message}
            variant="outlined"
          />

          <div style={{ flexBasis: '100%', textAlign: 'center', margin: '10px' }}>
            <Button
              disabled={!formValid}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;
