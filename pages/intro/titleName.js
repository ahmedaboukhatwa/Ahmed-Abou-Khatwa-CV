import { Fragment } from 'react';
import styles from '../../styles/intro/titleName.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TitleName() {
    return (
        <Fragment>
            <header className={styles.header}>
            <div className={styles.title}>
                <div className={styles.front}><h2>Ahmed Abou Khatwa</h2></div>
                <div className={styles.back}><h2>front-end developer</h2></div>
            </div>
        </header>      
        </Fragment>        
    )
}
