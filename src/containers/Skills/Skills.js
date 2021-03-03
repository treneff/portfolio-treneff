import { Component } from 'react';
import classes from './Skills.module.css';

import ButtonGroup from '../../components/UI/ButtonGroup/ButtonGroup';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';

import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.handleFrontEndClick = this.handleFrontEndClick.bind(this);
    this.handleBackEndClick = this.handleBackEndClick.bind(this);
    this.handleToolKitClick = this.handleToolKitClick.bind(this);
    this.handleTransferableClick = this.handleTransferableClick.bind(this);
    this.state = { frontEnd: true, backEnd: false, toolKit: false, transferable: false };
  }

  resetDOM = () => {
    this.setState({
      frontEnd: false,
      backEnd: false,
      toolKit: false,
      transferable: false,
    });
  };

  handleFrontEndClick() {
    this.resetDOM();
    this.setState({ frontEnd: true });
  }
  handleBackEndClick() {
    this.resetDOM();
    this.setState({ backEnd: true });
  }
  handleToolKitClick() {
    this.resetDOM();
    this.setState({ toolKit: true });
  }
  handleTransferableClick() {
    this.resetDOM();
    this.setState({ transferable: true });
  }
  render() {
    const frontEndClick = this.handleFrontEndClick;
    const backEndClick = this.handleBackEndClick;
    const toolKitClick = this.handleToolKitClick;
    const transferableClick = this.handleTransferableClick;
    const frontEnd = this.state.frontEnd;
    const backEnd = this.state.backEnd;
    const toolKit = this.state.toolKit;
    const transferable = this.state.transferable;

    let content;

    if (frontEnd) {
      content = (
        <div className={classes.Skill}>
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS (Bootstrap, SCSS, Grid systems( Currently Learning))</li>
            <li>JavaScript( Ajax, ES5+, Fetch API) </li>
            <li>React.js( Redux, MaterialUI,Framer Motion)</li>
          </ul>
        </div>
      );
    } else if (backEnd) {
      content = (
        <div className={classes.Skill}>
          <h2>Back-end</h2>
          <ul>
            <li>NodeJS</li>
            <li>RESTful APIs, JSON</li>
            <li>PostgreSQL(Currently Learning)</li>
            <li>MongoDB, Mongoose(Currently Learning)</li>
          </ul>
        </div>
      );
    } else if (toolKit) {
      content = (
        <div className={classes.Skill}>
          <h2>Tool kit</h2>
          <ul>
            <li>Version control(Git {'&'} Github)</li>
            <li>Webpack </li>
            <li>Heroku </li>
            <li>Linux Terminal-Bash</li>
            <li>Package Managers( npm, yarn)</li>
          </ul>
        </div>
      );
    } else if (transferable) {
      content = (
        <div className={classes.Skill}>
          <h2>Transferable skills</h2>
          <ul>
            <li>Teamwork</li>
            <li>Dependability </li>
            <li>Adaptability </li>
            <li>Approachability</li>
            <li>Agile Scrum methodologies</li>
          </ul>
        </div>
      );
    } else {
      content = <div>Please click a button</div>;
    }
    return (
      <div className={classes.Skills}>
        <h1> MORE ABOUT MY SKILLSET</h1>
        <div className={classes.ContainerButtons}>
          <ButtonGroup clicked={frontEndClick}>
            <CodeIcon className={frontEnd ? classes.Active : null} fontSize='large' />
          </ButtonGroup>
          <div className={classes.Border}></div>
          <ButtonGroup clicked={backEndClick}>
            <StorageIcon className={backEnd ? classes.Active : null} fontSize='large' />
          </ButtonGroup>
          <div className={classes.Border}></div>
          <ButtonGroup clicked={toolKitClick}>
            <SettingsIcon className={toolKit ? classes.Active : null} fontSize='large' />
          </ButtonGroup>
          <div className={classes.Border}></div>
          <ButtonGroup clicked={transferableClick}>
            <PersonIcon className={transferable ? classes.Active : null} fontSize='large' />
          </ButtonGroup>
        </div>

        {content}
      </div>
    );
  }
}

export default Skills;
