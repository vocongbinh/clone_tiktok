import clsx from 'clsx';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
function Button({ to, href, icon, children, type, size, className, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={clsx(styles.wrapper, {
                [className]: className,
                [styles.primary]: type === 'primary',
                [styles.upload]: type === 'upload',
                [styles.outline]: type === 'outline',
                [styles.text]: type === 'text',
                [styles.round]: type === 'round',
                [styles.min]: size === 'min',
                [styles.medium]: size === 'medium',
            })}
            {...props}
        >
            {icon && <span className={clsx(styles.prevIcon)}>{icon} </span>}
            <span className={clsx(styles.title)}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
