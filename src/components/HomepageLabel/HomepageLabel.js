import React from 'react';
import classes from './HomepageLabel.module.css';

import HomepageLetter from './HomepageLetter/HomepageLetter';

const homepageLabel = () => (
  <div className={classes.HomepageLabel}>
    <div className={classes.TopLabel}>
      <HomepageLetter content='H' />
      <HomepageLetter content='I' />
      <HomepageLetter content=',' />
      <HomepageLetter content=' ' />
      <HomepageLetter content='I' />
      <HomepageLetter content="'" />
      <HomepageLetter content='M' />
      <HomepageLetter content=' ' />
    </div>
    <div className={classes.BotLabel}>
      <HomepageLetter content='G' />
      <HomepageLetter content='E' />
      <HomepageLetter content='O' />
      <HomepageLetter content='R' />
      <HomepageLetter content='G' />
      <HomepageLetter content='E' />
    </div>
  </div>
);

export default homepageLabel;
