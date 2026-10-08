import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WaveBackground from './WaveBackground';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

type Props = {
  mode: string;
};

function Main({ mode }: Props) {

  return (
    <div className="container">
      <div className="about-section">
        <WaveBackground mode={mode} />
        <div className="image-wrapper">
          <img src={avatar} alt="Tayyub Naveed" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/tayyub-naveed" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:tayyub.naveed.ml@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <h1>Tayyub Naveed</h1>
          <p>Machine Learning Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/tayyub-naveed" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:tayyub.naveed.ml@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
