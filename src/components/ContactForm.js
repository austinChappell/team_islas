import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import validator from 'validator';
import { withStyles } from '@material-ui/core/styles';

import {
  Button,
  Heading3,
} from './shared';

const styles = () => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 600,
  },
  input: {
    flexBasis: '100%',
    margin: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    minWidth: 300,
  }
});

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
            className={classes.input}
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
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={this.handleChange}
            value={email}
            variant="outlined"
          />
          <TextField
            className={classes.input}
            fullWidth
            label="Phone"
            margin="normal"
            name="phone"
            onChange={this.handleChange}
            value={phone}
            variant="outlined"
          />
          <TextField
            className={classes.input}
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
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(ContactForm);
