import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import clsx from 'clsx';
import {
    faAdd,
    faEllipsisVertical,
    faLanguage,
    faMagnifyingGlass,
    faUpload,
    faXmarkCircle,
    faCircleQuestion,
    faEarthAsia,
    faDownload,
    faShare,
    faInbox,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faKeyboard, faSave } from '@fortawesome/free-regular-svg-icons';

import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoumtItem from '~/components/layout/components/AccountItem';
import Button from '../Button';
import Menu from '~/components/Popper/Menu';

function Header() {
    const [accounts, setAccounts] = useState([]);
    const currentUser = true;
    setTimeout(() => {
        setAccounts([
            {
                avatar: 'https://nhadepso.com/wp-content/uploads/2023/01/199-hinh-anh-pikachu-cute-de-thuong-dang-yeu-nhat-hien-nay_1.jpg',
                name: 'binh',
                discription: 'đẹp trai',
            },
            {
                avatar: 'https://nhadepso.com/wp-content/uploads/2023/01/199-hinh-anh-pikachu-cute-de-thuong-dang-yeu-nhat-hien-nay_1.jpg',
                name: 'binh',
                discription: 'đẹp trai',
            },
        ]);
    }, 2000);
    const listOptionItem = [
        {
            prevIcon: <FontAwesomeIcon icon={faEarthAsia} />,
            name: 'English',
            children: {
                title: 'Language',
                data: [
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                ],
            },
        },
        {
            prevIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
            name: 'Feedback and help',
            to: './feedback',
        },
        {
            prevIcon: <FontAwesomeIcon icon={faKeyboard} />,
            name: 'Keyboard shortcuts',
        },
    ];
    const listOptionUser = [
        {
            prevIcon: <FontAwesomeIcon icon={faUser} />,
            name: 'View profile',
        },
        {
            prevIcon: <FontAwesomeIcon icon={faSave} />,
            name: 'Favorites',
        },
        {
            prevIcon: <FontAwesomeIcon icon={faCoins} />,
            name: 'Get coins',
        },
        {
            prevIcon: <FontAwesomeIcon icon={faGear} />,
            name: 'Settings',
        },
        ...listOptionItem,
        {
            prevIcon: <FontAwesomeIcon icon={faSignOut} />,
            name: 'Logout',
            separate: true,
        },
    ];

    return (
        <div className={clsx(styles.wrapper)}>
            <h1> tiktok</h1>
            <TippyHeadless
                render={(attrs) => (
                    <div className={clsx(styles.searchResults)} {...attrs}>
                        <PopperWrapper>
                            <ul style={{ listStyleType: 'none' }}>
                                {accounts.map((account, index) => (
                                    <AccoumtItem account={account} />
                                ))}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
                content="search"
                visible={accounts.length > 0}
                interactive
            >
                <div className={clsx(styles.search)}>
                    <input className={clsx(styles.searchInput)} placeholder="Search" />
                    <button className={clsx(styles.clearBtn)}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <button className={clsx(styles.searchBtn)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
            <div className={clsx(styles.action)}>
                <Button icon={<FontAwesomeIcon icon={faAdd} />} type="upload">
                    Upload
                </Button>
                {currentUser ? (
                    <>
                        <button className={clsx(styles.actionBtn)}>
                            <FontAwesomeIcon icon={faDownload} />
                        </button>

                        <Tippy interactive content="Messages">
                            <button className={clsx(styles.actionBtn)}>
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </Tippy>
                        <Tippy content="Inbox">
                            <button className={clsx(styles.actionBtn)}>
                                <FontAwesomeIcon icon={faInbox} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button type="primary" size="medium">
                            Login
                        </Button>
                    </>
                )}

                <Menu listOptionItem={currentUser ? listOptionUser : listOptionItem}>
                    <button className={clsx(styles.option)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
