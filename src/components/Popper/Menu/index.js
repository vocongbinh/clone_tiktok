import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import clsx from 'clsx';
import OptionItem from './OptionItem';
import { useState } from 'react';
import Header from './Header';
function Menu({ children, listOptionItem }) {
    const [history, setHistory] = useState([{ data: listOptionItem }]);
    let isHeader = false;
    const renderItem = () => {
        const currentLayout = history[history.length - 1];

        const list = currentLayout.data.map((optionItem, id) => {
            const isParent = !!optionItem.children;
            const isSeparate = !!optionItem.separate;

            return (
                <li key={id} className={clsx(styles.optionItem)}>
                    <OptionItem
                        data={optionItem}
                        separate={isSeparate}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, { data: optionItem.children.data }]);
                            }
                        }}
                    />
                </li>
            );
        });
        return list;
    };

    return (
        <Tippy
            visible
            delay={[0, 300]}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div {...attrs} className={clsx(styles.wrapper)}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                className={clsx(styles.header)}
                                title="language"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}{' '}
                        <div className={clsx(styles.overLayout)}>
                            <ul>{renderItem()}</ul>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
