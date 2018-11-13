import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import validator from 'validator';
import { withStyles } from '@material-ui/core/styles';
import styled from 'react-emotion';

import { COLORS } from '../constants/colors';

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
  }
});

const StyledInputWrapper = styled('p')`
  flex-basis: 40%;
  margin: 10px;
  min-width: 300px;
`;

const StyledLabel = styled('label')`
  display: block;
`;

const StyledInput = styled('input')`
  border: 1px solid ${COLORS.DISABLED};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  width: 100%;
  &:focus {
    border: 1px solid ${COLORS.PRIMARY_1};
  }
`;

const StyledTextArea = styled('textarea')`
  border: 1px solid ${COLORS.DISABLED};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  resize: none;
  width: 100%;
  &:focus {
    border: 1px solid ${COLORS.PRIMARY_1};
  }
`;

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

          {/* <StyledInputWrapper>
            <StyledLabel>
              Name
            </StyledLabel>
            
            <StyledInput
              name="name"
              onChange={(e) => this.handleChange(e)}
              value={name}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel>
              Email
            </StyledLabel>
            
            <StyledInput
              name="email"
              onChange={(e) => this.handleChange(e)}
              value={email}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel>
              Phone
            </StyledLabel>
            
            <StyledInput
              name="phone"
              onChange={(e) => this.handleChange(e)}
              value={phone}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel>
              Message
            </StyledLabel>
            
            <StyledTextArea
              name="message"
              onChange={(e) => this.handleChange(e)}
              rows={1}
              value={message}
            />
          </StyledInputWrapper> */}

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
