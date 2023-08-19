import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoumtItem from '~/components/layout/components/AccountItem';
import styles from './SearchLayout.module.scss';
import * as searchServices from '~/apiServices/searchServices';
import clsx from 'clsx';
import { useDebounce } from '~/hooks';
import request from '~/utils/request';
import axios from 'axios';
import { parsePath } from 'react-router-dom';
function SearchLayout() {
    const searchRef = useRef();
    const [accounts, setAccounts] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const handleClear = () => {
        setValueSearch('');
        searchRef.current.focus();
    };
    const debounceValue = useDebounce(valueSearch, 500);
    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }
        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await searchServices.search(debounceValue);
                setAccounts(result.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounceValue]);

    return (
        <TippyHeadless
            render={(attrs) => (
                <div className={clsx(styles.searchResults)} {...attrs}>
                    {valueSearch.length > 0 && (
                        <PopperWrapper>
                            {accounts.map((account) => (
                                <AccoumtItem key={account.id} data={account} />
                            ))}
                        </PopperWrapper>
                    )}
                </div>
            )}
            content="search"
            visible={accounts.length > 0 && showResult}
            interactive
            onClickOutside={() => setShowResult(false)}
        >
            <div className={clsx(styles.search)}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={searchRef}
                    value={valueSearch}
                    onChange={(e) => {
                        if (!e.target.value.startsWith(' ')) setValueSearch(e.target.value);
                    }}
                    className={clsx(styles.searchInput)}
                    placeholder="Search"
                />

                {valueSearch.length > 0 && loading === false && (
                    <button className={clsx(styles.clearBtn)} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}

                {loading && (
                    <button className={clsx(styles.loadingIcon)}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={clsx(styles.searchBtn)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default SearchLayout;
