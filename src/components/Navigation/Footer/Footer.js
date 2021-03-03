import classes from './Footer.module.css';
import SocialItems from '../SocialItems/SocialItems';
let test = () => {
  console.log('render');
};
const footer = () => (
  <footer className={classes.Footer}>
    <SocialItems />
    <a href='https://treneff.io'> Treneff © 2021</a>
    {test()}
  </footer>
);

export default footer;
