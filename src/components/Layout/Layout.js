import { Component } from 'react';

import classes from './Layout.module.css';
import Footer from '../Navigation/Footer/Footer';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particlesConfig';
import Tabs from '../Navigation/Tabs/Tabs';
import Home from '../../containers/Home/Home';
import About from '../../containers/About/About';
import Skills from '../../containers/Skills/Skills';
import Projects from '../../containers/Projects/Projects';
import Contact from '../../containers/Contact/Contact';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showeSideDrawer };
    });
  };

  render() {
    return (
      <>
        <div className={classes.HideMobile} style={{ position: 'absolute', top: '7vh', left: '0' }}>
          <Particles height='90vh' width='100vw' params={particlesConfig} />
        </div>
        <Footer />
        <nav>
          <Tabs
            className={classes.Tabs}
            items={[
              {
                name: (
                  <p tabIndex='0'>
                    <HomeOutlinedIcon className={classes.HideMonitor} />
                    <div className={classes.HideMobile}>Home</div>
                  </p>
                ),
                route: 'home',
                render: () => <Home />,
              },
              {
                name: (
                  <p tabIndex='0'>
                    <InfoOutlinedIcon className={classes.HideMonitor} />
                    <div className={classes.HideMobile}>About</div>
                  </p>
                ),
                route: 'about',
                render: () => <About />,
              },
              {
                name: (
                  <p tabIndex='0'>
                    <SettingsOutlinedIcon className={classes.HideMonitor} />
                    <div className={classes.HideMobile}>Skills</div>
                  </p>
                ),
                route: 'skills',
                render: () => <Skills />,
              },
              {
                name: (
                  <p tabIndex='0'>
                    <VisibilityOutlinedIcon className={classes.HideMonitor} />
                    <div className={classes.HideMobile}>Projects</div>
                  </p>
                ),
                route: 'projects',
                render: () => <Projects />,
              },
              {
                name: (
                  <p tabIndex='0'>
                    <EmailOutlinedIcon className={classes.HideMonitor} />
                    <div className={classes.HideMobile}>Contact</div>
                  </p>
                ),
                route: 'contact',
                render: () => <Contact />,
              },
            ]}
          />
        </nav>
      </>
    );
  }
}
export default Layout;
