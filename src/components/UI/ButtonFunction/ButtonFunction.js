import { motion } from 'framer-motion';

import classes from './ButtonFunction.module.css';

const buttonFunction = (props) => (
  <motion.a
    target={props.target}
    whileHover={{ scale: 1.1, cursor: 'pointer' }}
    whileTap={{ scale: 0.8 }}
    className={classes.ButtonFunction}
    href={props.link}
    onClick={props.clicked}
  >
    {props.children}
  </motion.a>
);

export default buttonFunction;
