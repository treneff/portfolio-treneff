import { Component } from 'react';
import classes from './About.module.css';

import ButtonGroup from '../../components/UI/ButtonGroup/ButtonGroup';
import imagePersonal from '../../images/Mountains.svg';
import imageProfessional from '../../images/Desk.svg';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleProfessionalClick = this.handleProfessionalClick.bind(this);
    this.handlePersonalClick = this.handlePersonalClick.bind(this);

    this.state = { professional: true, personal: false };
  }

  resetDOM = () => {
    this.setState({
      professional: false,
      personal: false,
    });
  };

  handleProfessionalClick() {
    this.resetDOM();
    this.setState({ professional: true });
  }
  handlePersonalClick() {
    this.resetDOM();
    this.setState({ personal: true });
  }
  render() {
    const professionalClick = this.handleProfessionalClick;
    const personalClick = this.handlePersonalClick;

    const professional = this.state.professional;
    const personal = this.state.personal;

    let content;

    if (professional) {
      content = (
        <div className={classes.ContainerText}>
          <div className={classes.TextHalfScreen}>
            <p>
              An ambitious and very hardworking web developer with background working in a
              multidisciplinary team as a Physiotherapist with high performance athletes.
            </p>
            <p>
              Currently focused on front-end development with JavaScript and ReactJS with the
              ambition to expand on that knowledge towards full-stack development.
            </p>
          </div>
          <img className={classes.Image} src={imageProfessional} alt='img-desk-professional'></img>
        </div>
      );
    } else if (personal) {
      content = (
        <div className={classes.ContainerText}>
          <img className={classes.Image} src={imagePersonal} alt='img-mountain-personal'></img>

          <div className={classes.TextHalfScreen}>
            <p>
              A lover of the outdoors and most physical activities that are performed there, but
              equally entertained by video games and a quiet day at home.{' '}
            </p>
            <p>
              Fascinated by different cultures and lucky enough to have lived in Belgium,France,
              Bulgaria and England. Well travelled from all the way up in the arctic circle to down
              south in Spain.
            </p>
          </div>
        </div>
      );
    } else {
      content = <div>Default screen image</div>;
    }

    return (
      <div className={classes.About}>
        <h1> MORE ABOUT ME AT:</h1>
        <div className={classes.ContainerButtons}>
          <ButtonGroup clicked={professionalClick}>
            <h2 tabIndex='0' className={professional ? classes.Active : null}>
              WORK
            </h2>
          </ButtonGroup>
          <div className={classes.Border}></div>
          <ButtonGroup tabIndex='0' clicked={personalClick}>
            <h2 className={personal ? classes.Active : null}>HOME</h2>
          </ButtonGroup>
        </div>
        <div>{content}</div>
      </div>
    );
  }
}

export default About;
