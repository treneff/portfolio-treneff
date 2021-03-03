import { motion } from 'framer-motion';

import classes from './ButtonGroup.module.css';

const buttonGroup = (props) => (
  <motion.a
    target={props.target}
    whileHover={{ scale: 1.15, cursor: 'pointer' }}
    whileTap={{ scale: 0.8 }}
    className={classes.ButtonGroup}
    onClick={props.clicked}
  >
    {props.children}
  </motion.a>
);

export default buttonGroup;
