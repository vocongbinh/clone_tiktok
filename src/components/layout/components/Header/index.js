import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const cx = clsx.bind(styles);

    return (
        <div className={clsx(styles.wrapper)}>
            <h1> tiktok</h1>
            <div className={clsx(styles.search)}>
                <input className={clsx(styles.searchInput)} placeholder="Search" />
                <button className={clsx(styles.clearBtn)}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>

                <button className={clsx(styles.searchBtn)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={clsx(styles.action)}></div>
        </div>
    );
}

export default Header;
