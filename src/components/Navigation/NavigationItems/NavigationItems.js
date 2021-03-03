import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem clicked={props.clicked} link='/home'>
      HOME
    </NavigationItem>
    <NavigationItem clicked={props.clicked} link='/about'>
      ABOUT
    </NavigationItem>
    <NavigationItem clicked={props.clicked} link='/skills'>
      SKILLS
    </NavigationItem>
    <NavigationItem clicked={props.clicked} link='/projects'>
      PROJECTS
    </NavigationItem>
    <NavigationItem clicked={props.clicked} link='/contact'>
      CONTACT
    </NavigationItem>
  </ul>
);

export default navigationItems;
