import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <Link to={props.link} className={classes.NavigationItem}>
    <p tabIndex='0' onClick={props.clicked} className={props.active ? classes.active : null}>
      {props.children}
    </p>
  </Link>
);

export default navigationItem;
