import Link from 'next/link';
import React, { Fragment } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn , faGithub , faCodepen } from "@fortawesome/free-brands-svg-icons";
//import cv_pdf from "../../files/Ahmed Abou Katwa CV.pdf";
import styles from "../../styles/intro/details.module.scss";

export default function Details() {
  const hidden_paragraph = (e)=>{
    e.target.classList.toggle(`${styles.hidden_paragraph}`);
  }
  return (
    <Fragment>
      <div className={styles.details}>
        <div className={styles.about}>
          <h2>About</h2>
          <p onClick={(e)=>{hidden_paragraph(e)}}> 
          Age: 21 <br/>
          Location: alexandria <br/>
          WhatsApp: 01011302045 <br/>
          Education: alexandria university faculty of commerce [E] 2019-2023 (expected)<br/><br/>
          • I&apos;m a Frontend Web Developer with Highly Skills in building high-quality websites in  Javascript <br/><br/>
          • Focus on delivering top-quality frontend interfaces, performance, and structures. <br/><br/>
        
          I can guarantee: <br/>
          - Fast response and good communication skills <br/>
          - Hand-coded, W3C valid and well organized/commented code <br/>
          - Testing and cross-browser compatibility <br/>
          - After-contract support <br/>

          I hope to be at the best of your judgment. <br/><br/>

          Best regards <br/>
          Ahmed Abou Khatwa <br/>
        </p> 
          <FontAwesomeIcon className={styles.caret_icon} icon={faCaretDown}/>
          <ul className={styles.media}>
            <li className={styles.linkedin}>
              <Link
                href="https://www.linkedin.com/in/ahmed-abou-khatwa-0a8b0a161/"
              >
                <a target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn}/>

                </a>

              </Link>
            </li>
            <li className={styles.github}>
              <Link href="https://github.com/a-mohammed2001">
              <a  target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
              </a>
              </Link>    
            </li>
            <li className={styles.codepen}>
              <Link href="https://codepen.io/a_mohammed2001" >
              <a target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faCodepen}/>
              </a>
              </Link>
            </li>
            <li className={styles.upwork}>
              <Link href="https://www.upwork.com/freelancers/~018f58fd3f6a950ff8">
              <a  target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <rect width="512" height="512" rx="15%" fill="#000" />
                  <path
                    fill="#fff"
                    d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"
                  />
                </svg>
              </a>
              </Link>
            
            </li>
            <li className={styles.cv}>
              <Link href="https://drive.google.com/file/d/17K1ZL08pCUrRTJjlit9-nqm898BZ1Mv3/view">
              <a  target="_blank">
                CV
              </a>
              </Link>
            
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
