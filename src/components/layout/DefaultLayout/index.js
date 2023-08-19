import clsx from 'clsx';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
    const cx = clsx.bind(styles);
    return (
        <div>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
