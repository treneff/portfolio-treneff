import React from 'react';
import classes from './HomepageLetter.module.css';
import { motion } from 'framer-motion';

const homepageLetter = (props) => (
  <motion.div
    className={classes.HomepageLetter}
    size={'100%'}
    background={''}
    initial={{ y: 26 * 1.2 }}
    whileHover={{ y: 0 }}
  >
    {props.content}
  </motion.div>
);

export default homepageLetter;
