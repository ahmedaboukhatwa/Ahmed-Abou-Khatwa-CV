import React, { Fragment } from 'react';
import About from './about';
import Languages from './languages';
import Skills from './skills';
import styles from "../../styles/intro/details.module.scss";
export default function Details() {
    return (
        <Fragment>
            <div id="details" className={styles.details}>
                <About/>
                <Skills/>
                <Languages/>
            </div>
        </Fragment>
    )
}
