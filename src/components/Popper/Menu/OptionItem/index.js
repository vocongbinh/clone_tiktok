import clsx from 'clsx';
import Button from '~/components/layout/components/Button';
import styles from './OptionItem.module.scss';
function OptionItem({ data, onClick }) {
    return (
        <div className={clsx({ [styles.separate]: data.separate })}>
            <Button type="text" icon={data.prevIcon} onClick={onClick}>
                {data.name}
            </Button>
        </div>
    );
}

export default OptionItem;
