// components/Footer.js
import React from "react";
import styles from "../footer.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a href="https://github.com/Umm-e-Dua">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 Ummedua Aslam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;