import styles from '../../styles/intro/intro.module.scss';
import TitleName from '../intro/titleName';
import Controls from './controls';
import Details from './details';
export default function Intro() {
    return (
    <div className={styles.intro}>
        <Controls/>
        <TitleName/>
        <Details/>
    </div>
    )
}
