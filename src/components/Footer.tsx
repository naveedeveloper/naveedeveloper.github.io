import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/tayyub-naveed" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href="mailto:tayyub.naveed.ml@gmail.com" aria-label="Email"><EmailIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Tayyub Naveed</p>
    </footer>
  );
}

export default Footer;