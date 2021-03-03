import classes from './SocialItems.module.css';
import SocialItem from './SocialItem/SocialItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const socialItems = () => (
  <ul className={classes.SocialItems}>
    <SocialItem link='https://github.com/treneff/'>
      <GitHubIcon />
    </SocialItem>
    <SocialItem link='https://www.linkedin.com/in/treneff/'>
      <LinkedInIcon />
    </SocialItem>
    <SocialItem link='mailto:treneff@protonmail.com'>
      <EmailIcon />
    </SocialItem>
  </ul>
);

export default socialItems;
