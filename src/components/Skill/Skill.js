import classes from './Skill.module.css';
import { motion } from 'framer-motion';

const skill = (props) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={classes.Skill}>
    {props.children}
  </motion.div>
);

export default skill;
