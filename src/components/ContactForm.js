import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import validator from 'validator';
import { withStyles } from '@material-ui/core/styles'

import {
  Button,
  Heading3,
} from './shared';

const styles = () => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flexBasis: '40%',
    margin: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    minWidth: 300,
  },
  submit: {
    flexBasis: '20%',
    margin: '10px 0',
  }
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
    const { classes } = this.props;

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
          className={classes.form}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />

          <TextField
            className={classes.input}
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
            className={classes.input}
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
            className={classes.input}
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
            className={classes.input}
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

          <button
            className={classes.submit}
            disabled={!formValid}
            fullWidth
            // style={{ flexBasis: '100%', textAlign: 'center', margin: '10px', width: '100%' }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(ContactForm);
