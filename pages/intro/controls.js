import React, { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import portfolio_styles from '../../styles/portfolio/portfolio.module.scss';
import details_styles from '../../styles/intro/details.module.scss';

import styles from "../../styles/intro/controls.module.scss";


export default function Controls() {
    
    const active_details = (e)=>{
        details.classList.toggle(`${details_styles.active_details}`);
        for (let i = 0; i < projects.children.length; i++) {
          projects.children[i].classList.toggle(`${portfolio_styles.click_control}`);
          console.log(details);
        }
      }
      
    return (
        <Fragment>
            <div className={styles.control} onClick={(e)=>{active_details(e)}}>
                <FontAwesomeIcon className={styles.icon} icon={faAlignJustify}/>
            </div>
        </Fragment>
    )
}
