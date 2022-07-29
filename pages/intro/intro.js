import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/intro/intro.module.scss';
import TitleName from '../intro/titleName';
import Details from './details';
import Languages from './languages';
import Skills from './skills';
export default function Intro() {
    return (
    <div className={styles.intro}>
        <TitleName/>
        <Details/>
        <Skills/>
        <Languages/>
    </div>
    )
}
