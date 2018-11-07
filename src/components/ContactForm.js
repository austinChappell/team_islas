import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { css } from 'react-emotion';
import validator from 'validator';

import {
  Button,
  Heading3,
  Flex,
} from './shared';

const inputStyle = css({
  flexBasis: '40%',
  margin: 10,
  minWidth: 300,
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
      <div style={{ marginTop: 20 }}>
        <div style={{ marginBottom: 10, textAlign: 'center' }}>
          <Heading3>
            Get In Touch
          </Heading3>
        </div>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="bot-field" />

        <Flex
          flexWrap="wrap"
          justifyContent="center"
        >
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
        </Flex>

        <Flex justifyContent="center">
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
        </Flex>
    

          <div style={{ textAlign: 'center', margin: 10 }}>
            <Button
              disabled={!formValid}
              type="submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;
