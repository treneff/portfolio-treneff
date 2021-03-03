import { Component } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import classes from './Contact.module.css';

class Contact extends Component {
  render() {
    return (
      <motion.div className={classes.Contact}>
        <h1>GET IN TOUCH</h1>
        <ContactForm />
        <ToastContainer />
      </motion.div>
    );
  }
}

export default Contact;
