import classes from './Projects.module.css';

import BudgetCalcImage from '../../images/BudgetCalc.gif';
import imageAPI from '../../images/APIGIF.gif';
import imagePortfolio from '../../images/imagePortfolio.gif';
import ButtonFunction from '../../components/UI/ButtonFunction/ButtonFunction';

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <div className={classes.Projects}>
        <h1>MY WORK</h1>

        <div className={classes.Project}>
          <h3> JavaScript Budget calculator </h3>
          <img src={BudgetCalcImage} alt='Img-project-budget-calculator'></img>
          <div className={classes.Buttons}>
            <ButtonFunction link='https://codepen.io/treneff/pen/JjbKoQP' target='_blank'>
              DEMO{'&'}CODE
            </ButtonFunction>
          </div>
        </div>
        <div className={classes.Project}>
          <h3> Spotify API </h3>
          <img src={imageAPI} alt='img-project-API-spotify'></img>
          <div className={classes.Buttons}>
            <ButtonFunction link='https://codepen.io/treneff/pen/GRNqJKW' target='_blank'>
              DEMO{'&'}CODE
            </ButtonFunction>
          </div>
        </div>

        <div className={classes.Project}>
          <h3> Portfolio website </h3>
          <img src={imagePortfolio} alt='img-project-portfolio'></img>
          <div className={classes.Buttons}>
            <ButtonFunction link='https://github.com/portfolio' target='_blank'>
              CODE
            </ButtonFunction>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
