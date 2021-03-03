import React from 'react';
import classes from './SocialItem.module.css';
const socialItem = (props) => (
  <li className={classes.SocialItem}>
    <a href={props.link} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  </li>
);

export default socialItem;
