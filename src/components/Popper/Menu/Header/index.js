import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header({ onBack, title }) {
    return (
        <div className={clsx(styles.header)}>
            <button className={clsx(styles.backBtn)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={clsx(styles.title)}>{title}</h4>
        </div>
    );
}

export default Header;
