import React from 'react';
import classes from './MobileNav.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const mobileNav = (props) => (
  <header className={classes.MobileNav}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
  </header>
);

export default mobileNav;
