import classes from './Home.module.css';
import { motion } from 'framer-motion';

import HomepageLabel from '../../components/HomepageLabel/HomepageLabel';
import HomepageIntro from '../../components/HomepageIntro/HomepageIntro';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.Home}>
      <HomepageLabel />
      <HomepageIntro />
      <motion.div
        className={classes.ButtonContainer}
        whileHover={{ scale: 1.15, cursor: 'pointer' }}
        whileTap={{ scale: 0.8 }}
      >
        <Link to='/about' className={classes.ButtonLink}>
          <p tabIndex='0'>LEARN MORE ABOUT ME</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
