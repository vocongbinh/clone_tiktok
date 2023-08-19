import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import clsx from 'clsx';

import {
    faAdd,
    faEllipsisVertical,
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

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Images from '~/assets/images';
import SearchLayout from '../SearchLayout';

function Header() {
    const currentUser = true;
    const listOptionItem = [
        {
            prevIcon: <FontAwesomeIcon icon={faEarthAsia} />,
            name: 'English',
            children: {
                title: 'Language',
                data: [
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
                    { code: 'vn', name: 'Việt Nam' },
                    { code: 'en', name: 'English' },
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
            <SearchLayout />
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
                    {currentUser ? (
                        <Image
                            alt="vo cong binh"
                            fallbackImg={Images.noImage}
                            className={clsx(styles.avatarBtn)}
                            src="ttps://cdn.shoplightspeed.com/shops/633327/files/29258343/ftla-art-kit-painting-acrylic-pikachu.jpg"
                        />
                    ) : (
                        <button className={clsx(styles.option)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    );
}

export default Header;
