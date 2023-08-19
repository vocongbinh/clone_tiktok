import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function AccoumtItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapperItem)}>
            <img src={data.avatar} className={clsx(styles.avatar)} />
            <div className={clsx(styles.content)}>
                <h4 className={clsx(styles.accountName)}>
                    <span> {data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheckCircle} />}
                </h4>
                <span className={clsx(styles.discription)}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccoumtItem.propTypes = {
    data: PropTypes.object,
};

export default AccoumtItem;
