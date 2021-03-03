import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Tabs from './components/Navigation/Tabs/Tabs';
import Footer from './components/Navigation/Footer/Footer';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import particlesConfig from './config/particlesConfig';
import Particles from 'react-particles-js';

const App = () => {
  return (
    <div className='wrapper'>
      <Router>
        <Particles
          className={'hide-mobile'}
          style={{ position: 'absolute', top: '7vh', left: '0' }}
          height='90vh'
          width='100%'
          params={particlesConfig}
        />

        <Tabs
          className='Tabs'
          items={[
            {
              name: <p tabIndex='0'>Home</p>,
              route: 'home',
              render: () => <Home />,
            },
            {
              name: <p tabIndex='0'>About</p>,
              route: 'about',
              render: () => <About />,
            },
            {
              name: <p tabIndex='0'>Skills</p>,
              route: 'skills',
              render: () => <Skills />,
            },
            {
              name: <p tabIndex='0'>Projects</p>,
              route: 'projects',
              render: () => <Projects />,
            },
            {
              name: <p tabIndex='0'>Contact</p>,
              route: 'contact',
              render: () => <Contact />,
            },
          ]}
        />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
