import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import classes from './ContactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// styled components setup
const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    input {
      width: 50vw;
      text-align: center;
      min-width: 300px;
      color: white;
      margin: 2vh auto;
    }
    fieldset {
      border-color: white;
      border-width: 0.4vh;
      border-radius: 7px;
      margin: 2vh auto;
    }
    &:hover fieldset {
      border-color: black;
    }
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;
const StyledTextFieldMessage = styled(TextField)`
  .MuiOutlinedInput-root {
    textArea {
      width: 50vw;
      text-align: center;
      min-width: 300px;
      color: white;
      margin-bottom: 2vh;
    }
    fieldset {
      border-color: white;
      border-width: 0.4vh;
      border-radius: 7px;
      margin-bottom: 2vh;
    }
    &:hover fieldset {
      border-color: black;
    }
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Please fill out all the information before sending!', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        'service_bzbbaeq',
        'template_v8mddzp',
        templateParams,
        'user_5XCHCsbcIkty2ehdlwhIw'
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure

      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <form
        className={classes.ContactForm}
        id='contact-form'
        onSubmit={this.handleSubmit}
        noValidate
      >
        <StyledTextField
          type='text'
          name='name'
          variant='outlined'
          value={this.state.name}
          className={`formControl formInput ${formErrors.name.length > 0 ? 'error' : null}`}
          onChange={this.handleChange}
          placeholder='Name'
          noValidate
        />
        {formErrors.name.length > 0 && <span className='errorMessage'>{formErrors.name}</span>}

        <StyledTextField
          type='email'
          name='email'
          variant='outlined'
          value={this.state.email}
          className={`formControl formInput ${formErrors.email.length > 0 ? 'error' : null}`}
          onChange={this.handleChange}
          placeholder='Email'
          noValidate
        />
        {formErrors.email.length > 0 && <span className='errorMessage'>{formErrors.email}</span>}

        <StyledTextField
          type='subject'
          name='subject'
          variant='outlined'
          value={this.state.subject}
          className={`formControl formInput ${formErrors.subject.length > 0 ? 'error' : null}`}
          onChange={this.handleChange}
          placeholder='Subject'
          noValidate
        />
        {formErrors.subject.length > 0 && (
          <span className='errorMessage'>{formErrors.subject}</span>
        )}

        <StyledTextFieldMessage
          rows={4}
          type='text'
          name='message'
          variant='outlined'
          multiline
          value={this.state.message}
          className={`formControl formInput ${formErrors.message.length > 0 ? 'error' : null}`}
          onChange={this.handleChange}
          placeholder='Message'
          noValidate
        />
        {formErrors.message.length > 0 && (
          <span className='errorMessage'>{formErrors.message}</span>
        )}

        <motion.button
          whileHover={{ scale: 1.15, cursor: 'pointer' }}
          whileTap={{ scale: 0.8 }}
          className={classes.ButtonContact}
          type='submit'
        >
          Submit
        </motion.button>
      </form>
    );
  }
}

export default ContactForm;
