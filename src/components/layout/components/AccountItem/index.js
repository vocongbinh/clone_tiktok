import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import clsx from 'clsx';
function AccoumtItem({ account }) {
    return (
        <li>
            <div className={clsx(styles.wrapperItem)}>
                <img src={account.avatar} className={clsx(styles.avatar)} />
                <div className={clsx(styles.content)}>
                    <p className={clsx(styles.accountName)}>
                        <span> {account.name}</span>
                        <FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheckCircle} />
                    </p>
                    <span className={clsx(styles.discription)}>{account.discription}</span>
                </div>
            </div>
        </li>
    );
}

export default AccoumtItem;
