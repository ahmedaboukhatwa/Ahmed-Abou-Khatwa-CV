import { Fragment } from 'react';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
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
            <div className={styles.control}>
                <FontAwesomeIcon className={styles.icon} icon={faAlignJustify}/>
            </div>
        </header>      
        </Fragment>        
    )
}
