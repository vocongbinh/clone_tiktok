import { forwardRef, useState } from 'react';
import Images from '~/assets/images';
import styles from './Image.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallbackImg, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const onError = () => {
        setFallback(fallbackImg);
    };
    return (
        <img
            className={clsx(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={onError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallbackImg: PropTypes.string,
};

export default Image;
